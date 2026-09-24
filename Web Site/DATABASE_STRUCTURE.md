# Chinnodu Foods - Database Architecture & Storage Documentation

## 1. Overview & Storage Architecture

Chinnodu Foods uses a lightweight, highly responsive, zero-dependency **JSON Document Store Architecture** powered by the Node.js filesystem engine (`server.js`) with an automatic browser-side `localStorage` caching layer.

```
📁 Web Site/
├── 📄 orders.json             <-- Orders Database (Orders, Customers, Items, Tracking)
├── 📄 accounts.json           <-- Money & Accounts Database (Bank, UPI, Cash, Ledger)
├── 📄 server.js               <-- REST API Controllers & Persistence Handlers
├── 📄 admin.html              <-- Admin Control Center (Order & Money Dashboards)
└── 📄 app.js                  <-- Storefront E-Commerce Engine & Tracking Client
```

### Key Architectural Benefits
- **Zero Database Installations Required**: No complicated setup with MySQL/PostgreSQL/MongoDB required to run immediately.
- **Human-Readable & Backable**: Can be backed up, inspected, edited, or restored with simple file copy or Git.
- **ACID-like Atomic File Writes**: Server reads and writes clean, validated JSON payloads with timestamped revisions.
- **Fail-Safe Client Synchronization**: If disconnected or running on static hosting, client-side caching ensures orders and ledger persist without loss.

---

## 2. Orders Database Schema (`orders.json`)

The `orders.json` file contains an array of order records.

### Entity: `Order`

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Unique order identification code | `"CF-84291"` |
| `createdAt` | `string (ISO 8601)` | Timestamp when the order was submitted | `"2026-09-24T12:30:00.000Z"` |
| `updatedAt` | `string (ISO 8601)` | Timestamp of last status/tracking update | `"2026-09-24T16:00:00.000Z"` |
| `customer` | `Customer Object` | Consignee details for shipping & communication | *(See below)* |
| `items` | `OrderItem[]` | Array of items ordered with pack sizes & quantities | *(See below)* |
| `subtotal` | `number` | Total cost of items before discount/shipping (₹) | `1430` |
| `discount` | `number` | Coupon discount applied (₹) | `0` |
| `shipping` | `number` | Shipping charge (₹0 if free shipping threshold met) | `0` |
| `grandTotal` | `number` | Final payable amount (₹) | `1430` |
| `paymentMethod`| `string` | Payment method chosen: `"upi"` \| `"cod"` \| `"direct"` | `"upi"` |
| `paymentStatus`| `string` | Payment state: `"Paid"` \| `"Pending"` \| `"Refunded"` | `"Paid"` |
| `status` | `string` | Order fulfillment lifecycle stage: `"received"` \| `"confirmed"` \| `"packed"` \| `"shipped"` \| `"delivered"` \| `"cancelled"` | `"shipped"` |
| `statusTimeline`| `StatusStep[]` | Chronological audit log of fulfillment stages | *(See below)* |
| `tracking` | `TrackingInfo` | Courier details, consignment number, and tracking URL | *(See below)* |
| `notes` | `string` | Special instructions or kitchen customization notes | `"Extra spicy batch requested"` |

### Nested Object: `Customer`
```json
{
  "name": "Venkat Subramanyam",
  "phone": "+919848012345",
  "address": "Flat 402, Godavari Heights, Beside Sai Baba Temple, Jubilee Hills",
  "city": "Hyderabad",
  "state": "Telangana",
  "pincode": "500033"
}
```

### Nested Object: `OrderItem`
```json
{
  "id": "gongura-chicken-pickle",
  "name": "Gongura Chicken Pickle (Boneless)",
  "weight": "500g",
  "qty": 2,
  "unitPrice": 480
}
```

### Nested Object: `TrackingInfo`
```json
{
  "courier": "India Post (Speed Post)",
  "trackingId": "EP849204910IN",
  "trackingUrl": "https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx",
  "dispatchedAt": "2026-09-24T16:00:00.000Z",
  "estimatedDelivery": "2 - 3 Business Days"
}
```

---

## 3. Money & Accounts Database Schema (`accounts.json`)

The `accounts.json` file tracks all store bank accounts, online UPI wallets, cash in hand, courier COD receivables, and the complete financial transaction ledger.

### Entity: `Account`

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Internal account key (`acc_upi`, `acc_bank`, `acc_cash`, `acc_courier_cod`) |
| `name` | `string` | Account label (e.g. `"UPI / PhonePe / GPay"`) |
| `identifier` | `string` | UPI ID, Bank Account / IFSC, or Cash register ID |
| `type` | `string` | `"digital_wallet"` \| `"bank"` \| `"cash"` \| `"pending_receivable"` |
| `balance` | `number` | Current live funds balance in Rupees (₹) |
| `currency` | `string` | Default: `"INR"` |
| `status` | `string` | `"active"` \| `"archived"` |

#### Standard Store Accounts:
1. **`acc_upi`** - PhonePe / Google Pay / Paytm Wallet (`9676698427-2@ybl`) - *Receives all online customer payments*
2. **`acc_bank`** - Primary Business Bank Account (Current/Savings Account) - *Vendor payments & operating capital*
3. **`acc_cash`** - Cash in Hand (Store/Kitchen Counter Register)

> [!NOTE]
> **Prepaid Only Policy:** Cash on Delivery (COD) is disabled to prevent courier transit losses on fresh homemade food delicacies. All customer orders are 100% prepaid via UPI or direct bank transfer.

---

### Entity: `Transaction` (Financial Ledger)

Every rupee that enters or leaves Chinnodu Foods is recorded as an immutable ledger transaction.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique transaction ID (e.g. `"TXN-1001"`) |
| `date` | `string (ISO 8601)` | Timestamp when the financial movement took place |
| `type` | `string` | `"income"` \| `"expense"` \| `"transfer"` |
| `accountId` | `string` | Source or destination account (`acc_upi`, `acc_bank`, `acc_cash`) |
| `orderId` | `string (optional)` | Referenced Order ID (e.g. `"CF-84291"`) |
| `category` | `string` | Transaction classification |
| `amount` | `number` | Value in INR (₹) |
| `reference` | `string` | Bank UTR, UPI reference number, or receipt voucher ID |
| `description` | `string` | Detailed narrative explanation of the entry |
| `status` | `string` | `"settled"` |

---

## 4. Financial Calculations & Formulas

```
Liquid Capital = UPI Balance + Bank Balance + Cash in Hand
Total Business Net Worth = Liquid Capital

Gross Inflow = Sum of all Settled Incomes (Prepaid Sales)
Total Outflow = Sum of all Settled Expenses (Ingredients, Ghee, Packaging, Courier)
Net Operating Profit = Gross Inflow - Total Outflow
```

---

## 5. Secure Two-Factor (2FA) OTP Authentication Architecture

### Admin Identity & Security Boundaries
- **Owner**: Somesh Adigarla
- **Admin Email**: `someshadigarla@gmail.com`
- **Admin Phone**: `+91 9676698427` (or `9676698427`)
- **Admin Password**: Protected via server environment variable `ADMIN_PASSWORD` (never committed to repository or displayed in client UI).
- **Two-Factor Authentication (2FA)**: Enforced via a cryptographically secure 6-digit numeric OTP dispatched to `+91 9676698427`.

### OTP Security & Data Model
Every verification OTP adheres to the following cryptographic and operational standards:
1. **CSPRNG Generation**: Generated exclusively using `crypto.randomInt(100000, 1000000)`. Never uses predictable PRNGs like `Math.random()`.
2. **Zero Plaintext Storage**: The server stores only a cryptographically salted SHA-256 hash:
   `otpHash = SHA-256(otp + ":" + salt)` where `salt` is a random 16-byte hex value.
3. **Data Model Schema**:
   | Field | Type | Description |
   | :--- | :--- | :--- |
   | `id` | `string` | Cryptographic session token (32-byte hex) |
   | `identifier` | `string` | Bound user email or phone |
   | `purpose` | `string` | Authentication purpose (e.g. `'admin_login'`) |
   | `otpHash` | `string` | SHA-256 salted hash of the 6-digit OTP |
   | `salt` | `string` | Cryptographic random salt |
   | `expiresAt` | `number` | Unix timestamp of expiration (strictly 5 minutes) |
   | `attempts` | `number` | Number of failed verification attempts |
   | `maxAttempts` | `number` | Maximum allowed verification attempts (`5`) |
   | `used` | `boolean` | Single-use flag; immediately marked `true` upon verification |
   | `createdAt` | `number` | Unix timestamp when OTP was created |
   | `resendAvailableAt` | `number` | Cooldown timestamp before next resend is allowed (60s) |

4. **Timing-Safe Verification**: Comparisons are performed using `crypto.timingSafeEqual()` to eliminate timing side-channel attacks.
5. **Single-Use & Replay Protection**: Verified OTPs are immediately marked as used and deleted from memory. An OTP cannot be verified twice.
6. **Automatic Invalidation**: Requesting a fresh OTP immediately invalidates any prior unverified OTP for the same user and purpose.
7. **Brute-Force & Lockout Protection**:
   - Verification is capped at 5 attempts. Exceeding 5 failed attempts triggers an automated 15-minute temporary lockout.
   - Resend requests enforce a 60-second cooldown timer.
   - Request rate limiting caps OTP generation to 5 requests per 15 minutes.
8. **Zero-Leakage Assurance**: The OTP code is never exposed in HTTP API responses, frontend JavaScript, URLs, error messages, or production server logs.

---

## 6. REST API Endpoint Directory

### Authentication & Public Endpoints
- `POST /api/auth/request-otp` (Alias: `/api/admin/login`) - Validate credentials & dispatch secure 6-digit OTP.
- `POST /api/auth/verify-otp` (Alias: `/api/admin/verify-otp`) - Validate OTP hash, enforce attempt limits, and issue `HttpOnly` session cookie.
- `POST /api/auth/resend-otp` (Alias: `/api/admin/resend-otp`) - Re-dispatch fresh OTP subject to 60-second cooldown.
- `POST /api/orders` - Place new prepaid customer order (100% Prepaid UPI, auto-credits ledger).
- `GET /api/track?q=...` - Public customer order tracking lookup by Order ID or phone number.
- Static assets (`index.html`, `style.css`, `app.js`, `admin.html`).

### Protected Admin Endpoints (Require Valid 2FA Session Cookie)
- `GET /api/admin/check-auth` - Validate active browser session & retrieve admin identity.
- `POST /api/admin/logout` - Invalidate session & clear session cookie.
- `GET /api/orders` - Fetch all orders & customer records.
- `PUT /api/orders/:id` - Update fulfillment status, courier partner, tracking ID.
- `DELETE /api/orders/:id` - Delete order.
- `GET /api/finance/summary` - Fetch bank balances & financial KPIs.
- `GET /api/finance/transactions` - Filter ledger transactions.
- `POST /api/finance/transactions` - Record business expense, income, or transfer.
- `PUT /api/finance/accounts/:id` - Synchronize account balances.
