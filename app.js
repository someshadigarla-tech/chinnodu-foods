/**
 * Chinnodu Foods - Authentic Homemade Pickles & Sweets
 * Interactive Storefront & E-Commerce Logic
 */

// =============================================================================
// Chinnodu Foods Official Menu Dataset (Exact 24 Items from Price List)
// =============================================================================
const PRODUCTS_DATABASE = [
  // ==================== 1. TRADITIONAL SWEETS & LADDUS ====================
  {
    id: "bellam-sunnunda",
    name: "Bellam Sunnunda",
    teluguName: "బెల్లం సున్నుండ",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Customer Favorite",
    rating: 5.0,
    reviewsCount: 310,
    spice: "🍯 Pure Ghee & Jaggery",
    image: "assets/images/bellam-sunnunda.jpg",
    description: "Traditional Andhra Urad Dal Sunnunda prepared with aromatic roasted black gram, organic jaggery, and generous pure desi ghee. Rich in iron and protein.",
    shelfLife: "30 Days",
    ingredients: "Roasted Urad Dal (Minapappu), Organic Jaggery (Bellam), Pure Desi Ghee, Cardamom.",
    weights: {
      "500g": 470,
      "1kg": 900
    },
    defaultWeight: "500g"
  },
  {
    id: "ragi-laddu",
    name: "Ragi Laddu",
    teluguName: "రాగి లడ్డు",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Healthy Superfood",
    rating: 4.9,
    reviewsCount: 185,
    spice: "🍯 Nutritious & Sweet",
    image: "assets/images/ragi-laddu.jpg",
    description: "Nutritious finger millet (ragi) flour roasted in pure cow ghee and sweetened with pure jaggery. High calcium and wholesome energy snack.",
    shelfLife: "30 Days",
    ingredients: "Organic Ragi Flour, Desi Ghee, Jaggery, Roasted Cashews, Cardamom.",
    weights: {
      "250g": 230,
      "500g": 450,
      "1kg": 920
    },
    defaultWeight: "500g"
  },
  {
    id: "nuvvulu-laddu",
    name: "Nuvvulu Laddu (Sesame)",
    teluguName: "నువ్వుల లడ్డు (చిమ్మిలి)",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Iron & Calcium Rich",
    rating: 4.9,
    reviewsCount: 220,
    spice: "🍯 Nutty Jaggery Sweet",
    image: "assets/images/nuvvulu-laddu.jpg",
    description: "Traditional Andhra sesame laddu made with cleaned white and black sesame seeds pounded with organic jaggery and pure ghee.",
    shelfLife: "45 Days",
    ingredients: "Farm Fresh Sesame Seeds (Nuvvulu), Organic Jaggery, Pure Ghee, Cardamom.",
    weights: {
      "250g": 199,
      "500g": 379,
      "1kg": 749
    },
    defaultWeight: "500g"
  },
  {
    id: "kajjikayalu",
    name: "Kajjikayalu",
    teluguName: "కజ్జికాయలు (కొబ్బరి-నువ్వులు)",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Festival Special",
    rating: 4.8,
    reviewsCount: 195,
    spice: "🍯 Crispy Stuffed Sweet",
    image: "assets/images/kajjikayalu.jpg",
    description: "Crisp golden crescent pastries stuffed with roasted dry coconut, roasted sesame, poppy seeds, and cardamom jaggery/sugar filling.",
    shelfLife: "25 Days",
    ingredients: "Fine Flour Dough, Dry Coconut, Roasted Gram, Cardamom, Pure Ghee, Wood-Pressed Oil.",
    weights: {
      "500g": 350,
      "1kg": 700
    },
    defaultWeight: "500g"
  },
  {
    id: "gorumitilu",
    name: "Gorumitilu",
    teluguName: "గోరుమిటీలు",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Heritage Sweet",
    rating: 4.8,
    reviewsCount: 140,
    spice: "🍯 Crisp Sugar-Glazed",
    image: "assets/images/gorumitilu.jpg",
    description: "Classic sweet crisps shaped delicately by hand, deep fried in pure oil and dipped in crystallized fragrant cardamom sugar syrup.",
    shelfLife: "30 Days",
    ingredients: "Wheat & All-Purpose Flour, Pure Ghee, Sugar Syrup, Cardamom.",
    weights: {
      "250g": 130,
      "500g": 260,
      "1kg": 520
    },
    defaultWeight: "500g"
  },
  {
    id: "rava-laddu",
    name: "Rava Laddu",
    teluguName: "రవ్వ లడ్డు",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Classic Delight",
    rating: 4.8,
    reviewsCount: 175,
    spice: "🍯 Melt in Mouth",
    image: "assets/images/rava-laddu.jpg",
    description: "Aromatic Bombay semolina roasted to a golden hue in pure ghee, blended with sugar, dried coconut flakes, plump raisins, and cashews.",
    shelfLife: "20 Days",
    ingredients: "Bombay Rava, Desi Ghee, Sugar, Fresh Grated Coconut, Cashews, Raisins, Cardamom.",
    weights: {
      "500g": 350,
      "1kg": 700
    },
    defaultWeight: "500g"
  },
  {
    id: "kobbari-laddu",
    name: "Kobbari Laddu",
    teluguName: "కొబ్బరి లడ్డు",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Fresh Coconut Sweet",
    rating: 4.9,
    reviewsCount: 210,
    spice: "🍯 Juicy Coconut & Ghee",
    image: "assets/images/kobbari-laddu.jpg",
    description: "Soft, juicy laddus made with freshly grated coastal coconuts, slow-simmered in organic jaggery syrup and perfumed with pure cardamom.",
    shelfLife: "20 Days",
    ingredients: "Fresh Grated Coconut, Organic Jaggery, Pure Cow Ghee, Green Cardamom.",
    weights: {
      "250g": 189,
      "500g": 389,
      "1kg": 749
    },
    defaultWeight: "500g"
  },
  {
    id: "ghee-arisalu",
    name: "Ghee Arisalu",
    teluguName: "స్వచ్ఛమైన నెయ్యి అరిసెలు",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Royal Festival Sweet",
    rating: 5.0,
    reviewsCount: 380,
    spice: "🍯 Pure Desi Ghee Aroma",
    image: "assets/images/ghee-arisalu.jpg",
    description: "The royal Andhra festival sweet. Fresh wet rice flour kneaded into rich jaggery syrup, fried exclusively in pure desi cow ghee to melt-in-the-mouth perfection.",
    shelfLife: "25 Days",
    ingredients: "Fresh Wet Rice Flour, Organic Sugarcane Jaggery, 100% Pure Desi Cow Ghee, Cardamom.",
    weights: {
      "500g": 379,
      "1kg": 749
    },
    defaultWeight: "500g"
  },
  {
    id: "ghee-nuvvula-arisalu",
    name: "Ghee Nuvvula Arisalu",
    teluguName: "నెయ్యి నువ్వుల అరిసెలు",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Traditional Andhra Classic",
    rating: 5.0,
    reviewsCount: 320,
    spice: "🍯 Sesame & Ghee Rich",
    image: "assets/images/ghee-nuvvula-arisalu.jpg",
    description: "Pure ghee arisalu generously crusted with farm sesame seeds for an irresistible nutty crunch alongside sweet, soft jaggery dough.",
    shelfLife: "25 Days",
    ingredients: "Wet Rice Flour, Organic Jaggery, Pure Cow Ghee, White Sesame Seeds (Nuvvulu), Cardamom.",
    weights: {
      "500g": 399,
      "1kg": 799
    },
    defaultWeight: "500g"
  },
  {
    id: "bellam-mithai-laddu",
    name: "Bellam Mithai Laddu (Boondi Laddu)",
    teluguName: "బెల్లం బూందీ మిఠాయి లడ్డు",
    category: "sweets",
    categoryLabel: "Traditional Sweets",
    diet: "veg",
    tag: "Authentic Jaggery Laddu",
    rating: 4.9,
    reviewsCount: 260,
    spice: "🍯 Sweet Jaggery Boondi",
    image: "assets/images/bellam-mithai-laddu.jpg",
    description: "Crisp tiny gram flour boondi beads bound tightly in pure caramelized organic jaggery syrup with aromatic cloves and cardamom.",
    shelfLife: "30 Days",
    ingredients: "Besan (Gram Flour), Organic Jaggery, Pure Ghee, Cardamom, Edible Camphor, Cloves.",
    weights: {
      "250g": 250,
      "500g": 399,
      "1kg": 499
    },
    defaultWeight: "500g"
  },

  // ==================== 2. CRISPY SAVOURIES & SNACKS ====================
  {
    id: "challa-guthulu",
    name: "Challa Guthulu (Rose Cookies)",
    teluguName: "చల్లా గుత్తులు (గులాబీ పువ్వులు)",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "Crispy Delicate Flower",
    rating: 4.8,
    reviewsCount: 160,
    spice: "Mild Crunchy Snack",
    image: "assets/images/challa-guthulu.jpg",
    description: "Traditional Andhra flower-shaped cookies prepared using brass cast iron moulds with rice and coconut batter. Delicately crunchy and light.",
    shelfLife: "45 Days",
    ingredients: "Rice Flour, Fine Flour, Sugar, Cardamom, Wood-Pressed Pure Oil.",
    weights: {
      "250g": 150,
      "500g": 300,
      "1kg": 600
    },
    defaultWeight: "500g"
  },
  {
    id: "beetroot-janthikalu",
    name: "Beetroot Janthikalu",
    teluguName: "బీట్‌రూట్ జంతికలు (మురుకులు)",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "Healthy & Colorful",
    rating: 4.9,
    reviewsCount: 240,
    spice: "🌶️ Mild & Nutritious",
    image: "assets/images/beetroot-janthikalu.jpg",
    description: "Wholesome natural vibrant beetroot juice kneaded with rice flour, roasted gram and ajwain. Natural crimson color, crunchy and rich in vitamins.",
    shelfLife: "45 Days",
    ingredients: "Fresh Beetroot Puree, Rice Flour, Roasted Gram Flour, Ajwain, Cumin, Cold-Pressed Oil, Salt.",
    weights: {
      "250g": 150,
      "500g": 300,
      "1kg": 600
    },
    defaultWeight: "500g"
  },
  {
    id: "janthikalu",
    name: "Traditional Janthikalu (Murukku)",
    teluguName: "సంప్రదాయ జంతికలు",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "All-Time Favorite",
    rating: 4.9,
    reviewsCount: 310,
    spice: "🌶️ Crunchy Cumin Savory",
    image: "assets/images/janthikalu.jpg",
    description: "The quintessential Andhra tea-time murukku! Hand-pressed rice flour spirals tempered with white sesame, carom seeds, and hing.",
    shelfLife: "60 Days",
    ingredients: "Rice Flour, Roasted Chana Flour, Cumin, White Sesame, Ajwain, Cold-Pressed Groundnut Oil, Salt.",
    weights: {
      "250g": 150,
      "500g": 300,
      "1kg": 600
    },
    defaultWeight: "500g"
  },
  {
    id: "ragi-chakralu",
    name: "Ragi Chakralu (Finger Millet Murukku)",
    teluguName: "రాగి చక్రాలు (మిల్లెట్ మురుకులు)",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "Healthy Millet Snack",
    rating: 4.9,
    reviewsCount: 220,
    spice: "🌶️ Wholesome & Crunchy",
    image: "assets/images/ragi-chakralu.jpg",
    description: "Healthy whole ragi (finger millet) flour infused with cumin, garlic and chilli flakes. High fiber, zero palm oil, pure homemade crunch.",
    shelfLife: "60 Days",
    ingredients: "Whole Ragi Flour, Rice Flour, Sesame Seeds, Ajwain, Wood-Pressed Groundnut Oil, Rock Salt.",
    weights: {
      "250g": 150,
      "500g": 300,
      "1kg": 600
    },
    defaultWeight: "500g"
  },
  {
    id: "chegodilu",
    name: "Godavari Chegodilu",
    teluguName: "గోదావరి చెగోడీలు",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "Godavari Special",
    rating: 5.0,
    reviewsCount: 420,
    spice: "🌶️ Super Crunchy Rings",
    image: "assets/images/chegodilu.jpg",
    description: "Crispy golden rings crafted from cooked rice dough, seasoned with moong dal, ajwain, and white sesame. Super crisp with an addictive crunch.",
    shelfLife: "60 Days",
    ingredients: "Rice Flour, Soaked Moong Dal, Cumin Seeds, Ajwain, White Sesame, Pure Cold-Pressed Oil, Salt.",
    weights: {
      "250g": 140,
      "500g": 280,
      "1kg": 560
    },
    defaultWeight: "500g"
  },
  {
    id: "karam-gavvalu",
    name: "Karam Gavvalu (Spicy Shells)",
    teluguName: "కారం గవ్వలు",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "Spicy Tea-Time Hit",
    rating: 4.9,
    reviewsCount: 275,
    spice: "🌶️🌶️ Medium Spicy Crunch",
    image: "assets/images/karam-gavvalu.jpg",
    description: "Traditional fluted shell snacks kneaded with spicy red chilli powder, roasted cumin, and butter. Extremely crunchy and savory.",
    shelfLife: "60 Days",
    ingredients: "Wheat Flour, Rice Flour, Red Chilli Powder, Cumin, Butter, Wood-Pressed Oil, Rock Salt.",
    weights: {
      "250g": 150,
      "500g": 300,
      "1kg": 600
    },
    defaultWeight: "500g"
  },
  {
    id: "saggubiyyam-chekkalu",
    name: "Saggubiyyam Chekkalu (Sabudana Crisps)",
    teluguName: "సగ్గుబియ్యం చెక్కలు",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "Crispy Cracker",
    rating: 4.9,
    reviewsCount: 310,
    spice: "🌶️ Crispy Herb Cracker",
    image: "assets/images/saggubiyyam-chekkalu.jpg",
    description: "Hand-patted flat rice crackers studded with soft soaked sabudana (tapioca pearls), chana dal, curry leaves, and green chillies.",
    shelfLife: "45 Days",
    ingredients: "Rice Flour, Saggubiyyam (Sabudana), Soaked Bengal Gram, Curry Leaves, Green Chilli Paste, Salt, Oil.",
    weights: {
      "250g": 160,
      "500g": 320,
      "1kg": 640
    },
    defaultWeight: "500g"
  },
  {
    id: "spicy-boondhi",
    name: "Spicy Boondhi (Kara Boondi)",
    teluguName: "కారపు బూందీ (వెల్లుల్లి-జీడిపప్పు)",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "Garlic & Peanut Crunch",
    rating: 4.8,
    reviewsCount: 230,
    spice: "🌶️🌶️ Garlicky Spicy",
    image: "assets/images/spicy-boondhi.jpg",
    description: "Crispy fried gram flour droplets tossed with crunchy roasted peanuts, whole roasted cashews, fried curry leaves, and crushed garlic masala.",
    shelfLife: "60 Days",
    ingredients: "Besan (Gram Flour), Roasted Peanuts, Roasted Cashews, Curry Leaves, Crushed Garlic, Guntur Chilli, Salt.",
    weights: {
      "250g": 140,
      "500g": 275,
      "1kg": 550
    },
    defaultWeight: "500g"
  },
  {
    id: "gothum-pendi-cheppes",
    name: "Gothum Pendi Cheppes (Wheat Chekkalu)",
    teluguName: "గోధుమ పిండి చెక్కలు (చేప్పెస్)",
    category: "savouries",
    categoryLabel: "Crispy Savouries",
    diet: "veg",
    tag: "Wholesome Wheat Crunch",
    rating: 4.8,
    reviewsCount: 170,
    spice: "🌶️ Mild & Crispy",
    image: "assets/images/gothum-pendi-cheppes.jpg",
    description: "Crisp hand-pressed round crackers made from wholesome stone-ground whole wheat flour seasoned with ajwain, sesame and butter.",
    shelfLife: "45 Days",
    ingredients: "Whole Wheat Flour (Gothuma Pindi), Butter, Ajwain, White Sesame, Red Chilli, Wood-Pressed Oil, Salt.",
    weights: {
      "250g": 189,
      "500g": 359,
      "1kg": 589
    },
    defaultWeight: "500g"
  },

  // ==================== 3. HOMEMADE PICKLES ====================
  {
    id: "gongura-pickle",
    name: "Andhra Special Gongura Pickle",
    teluguName: "ఆంధ్రా స్పెషల్ గోంగూర పచ్చడి",
    category: "pickles",
    categoryLabel: "Homemade Pickles",
    diet: "veg",
    tag: "Authentic Andhra Matha",
    rating: 5.0,
    reviewsCount: 450,
    spice: "🌶️🌶️🌶️ Fiery & Tangy",
    image: "assets/images/gongura-pickle.jpg",
    description: "Freshly harvested sour Gongura leaves slow-cooked in pure wood-pressed sesame oil, tempered with crushed garlic, roasted fenugreek, and Guntur chillies.",
    shelfLife: "9 Months",
    ingredients: "Fresh Country Gongura, Cold-Pressed Sesame Oil, Guntur Red Chillies, Garlic Pods, Fenugreek, Cumin, Mustard, Rock Salt.",
    weights: {
      "250g": 189,
      "500g": 369,
      "1kg": 749
    },
    defaultWeight: "500g"
  },
  {
    id: "tomata-pickle",
    name: "Country Tomata Pickle (Tomato Nilva Pachadi)",
    teluguName: "నాటు టమాటా నిల్వ పచ్చడి",
    category: "pickles",
    categoryLabel: "Homemade Pickles",
    diet: "veg",
    tag: "Daily Kitchen Favorite",
    rating: 4.9,
    reviewsCount: 390,
    spice: "🌶️🌶️ Robust & Tangy",
    image: "assets/images/tomata-pickle.jpg",
    description: "Sun-ripened red country tomatoes slow-reduced with aged tamarind pulp, whole garlic pods, roasted hing, and cold wood-pressed groundnut oil.",
    shelfLife: "9 Months",
    ingredients: "Ripe Farm Tomatoes, Cold-Pressed Groundnut Oil, Tamarind Pulp, Red Chilli Powder, Garlic, Asafoetida (Hing), Mustard, Rock Salt.",
    weights: {
      "250g": 189,
      "500g": 369,
      "1kg": 749
    },
    defaultWeight: "500g"
  },

  // ==================== 4. AUTHENTIC TANDRA & JELLY DELICACIES ====================
  {
    id: "mango-thandra-bellam",
    name: "Mango Thandra Bellam (Jaggery Aam Papad)",
    teluguName: "మామిడి తాండ్ర (ఆర్గానిక్ బెల్లం)",
    category: "tandra",
    categoryLabel: "Authentic Tandra",
    diet: "veg",
    tag: "100% Real Mango & Jaggery",
    rating: 5.0,
    reviewsCount: 340,
    spice: "🥭 Sweet Natural Mango Chew",
    image: "assets/images/mango-thandra-bellam.jpg",
    description: "Pure sun-dried pulp of sweet Banganapalli mangoes blended with organic sugarcane jaggery. Layer upon layer dried naturally under the hot Godavari sun.",
    shelfLife: "6 Months",
    ingredients: "100% Real Mango Pulp, Organic Sugarcane Jaggery, Ghee.",
    weights: {
      "500g": 169,
      "1kg": 249
    },
    defaultWeight: "500g"
  },
  {
    id: "mango-thandra-sugar",
    name: "Mango Thandra Sugar (Classic Aam Papad)",
    teluguName: "మామిడి తాండ్ర (పంచదార)",
    category: "tandra",
    categoryLabel: "Authentic Tandra",
    diet: "veg",
    tag: "Classic Godavari Tandra",
    rating: 4.9,
    reviewsCount: 290,
    spice: "🥭 Sweet Mango Slices",
    image: "assets/images/mango-thandra-sugar.jpg",
    description: "Golden sun-dried layered mango fruit leather prepared with real mango nectar and pure sugar. Chewy, sweet, and bursting with childhood nostalgia.",
    shelfLife: "6 Months",
    ingredients: "Pure Mango Fruit Pulp, Sugar, Citric Juice.",
    weights: {
      "500g": 169,
      "1kg": 249
    },
    defaultWeight: "500g"
  },
  {
    id: "tati-thandra",
    name: "Tati Thandra (Traditional Palm Fruit Tandra)",
    teluguName: "సాంప్రదాయ తాటి తాండ్ర",
    category: "tandra",
    categoryLabel: "Authentic Tandra",
    diet: "veg",
    tag: "Rare Seasonal Delicacy",
    rating: 5.0,
    reviewsCount: 310,
    spice: "🌴 Earthy Wild Sweet",
    image: "assets/images/tati-thandra.jpg",
    description: "Rare traditional Andhra delicacy extracted from ripe Asian palmyra palm fruits (Taati Pandu). Layer-dried in the sun, rich in dietary fiber and authentic forest minerals.",
    shelfLife: "6 Months",
    ingredients: "Ripe Palmyra Palm Fruit Pulp (Tati Pandu), Organic Jaggery.",
    weights: {
      "500g": 199,
      "1kg": 400
    },
    defaultWeight: "500g"
  }
];

// =============================================================================
// Application State & Configuration
// =============================================================================
const APP_STATE = {
  cart: [],
  activeCategory: "all",
  currentSort: "featured",
  searchQuery: "",
  selectedProductWeights: {}, // Map: productId -> weight ('250g', '500g', '1kg')
  appliedCoupon: null,
  modalCurrentProductId: null,
  modalSelectedWeight: "500g",
  modalQty: 1,
  freeShippingThreshold: 999,
  standardShippingFee: 79,
  whatsappNumber: "+917382914229",
  secondaryPhone: "+917893006417",
  upiId: "9676698427-2@ybl"
};

// =============================================================================
// Initialization
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();

  // Initialize default weights for all products
  PRODUCTS_DATABASE.forEach(prod => {
    APP_STATE.selectedProductWeights[prod.id] = prod.defaultWeight || Object.keys(prod.weights)[0] || "500g";
  });

  renderStorefront();
  updateCartUI();
  setupSearchLogic();
  setupHeaderScroll();
});

// =============================================================================
// Storefront Rendering & Card Generation
// =============================================================================
function renderStorefront() {
  const gridContainer = document.getElementById("product-cards-grid");
  const emptyState = document.getElementById("empty-catalog-state");
  const catalogTitle = document.getElementById("catalog-section-title");
  const filterIndicator = document.getElementById("active-filter-indicator");
  const filterText = document.getElementById("active-filter-text");

  if (!gridContainer) return;

  // Filter products
  let filtered = PRODUCTS_DATABASE.filter(prod => {
    const categoryMatch = (APP_STATE.activeCategory === "all") || (prod.category === APP_STATE.activeCategory);

    let searchMatch = true;
    if (APP_STATE.searchQuery.trim() !== "") {
      const q = APP_STATE.searchQuery.toLowerCase();
      searchMatch = prod.name.toLowerCase().includes(q) ||
                    prod.teluguName.includes(q) ||
                    prod.description.toLowerCase().includes(q) ||
                    prod.categoryLabel.toLowerCase().includes(q);
    }

    return categoryMatch && searchMatch;
  });

  // Sort products
  if (APP_STATE.currentSort === "price-low") {
    filtered.sort((a, b) => {
      const pA = a.weights[APP_STATE.selectedProductWeights[a.id] || a.defaultWeight];
      const pB = b.weights[APP_STATE.selectedProductWeights[b.id] || b.defaultWeight];
      return pA - pB;
    });
  } else if (APP_STATE.currentSort === "price-high") {
    filtered.sort((a, b) => {
      const pA = a.weights[APP_STATE.selectedProductWeights[a.id] || a.defaultWeight];
      const pB = b.weights[APP_STATE.selectedProductWeights[b.id] || b.defaultWeight];
      return pB - pA;
    });
  } else if (APP_STATE.currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update Section Title & Active Filter Notice
  const catNamesMap = {
    "all": "All Products (24 Delicacies)",
    "sweets": "Traditional Sweets & Laddus (సాంప్రదాయ మిఠాయిలు)",
    "savouries": "Crispy Savouries & Snacks (పిండివంటలు & హాట్స్)",
    "pickles": "Homemade Pickles (నిల్వ పచ్చళ్ళు)",
    "tandra": "Authentic Tandra Varieties (తాండ్ర రకాలు)"
  };
  catalogTitle.textContent = catNamesMap[APP_STATE.activeCategory] || "Our Menu";

  if (APP_STATE.activeCategory !== "all" || APP_STATE.searchQuery.trim() !== "") {
    filterIndicator.style.display = "flex";
    filterText.textContent = `Showing: ${filtered.length} delicacies found (${catNamesMap[APP_STATE.activeCategory] || "Search"})`;
  } else {
    filterIndicator.style.display = "none";
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = "";
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  // Render product cards
  gridContainer.innerHTML = filtered.map(prod => {
    const availableWeights = Object.keys(prod.weights);
    let activeWeight = APP_STATE.selectedProductWeights[prod.id];
    if (!prod.weights[activeWeight]) {
      activeWeight = prod.defaultWeight || availableWeights[0];
      APP_STATE.selectedProductWeights[prod.id] = activeWeight;
    }
    const currentPrice = prod.weights[activeWeight];

    return `
      <article class="product-card" data-product-id="${prod.id}">
        <!-- Media Area -->
        <div class="product-media" onclick="openQuickView('${prod.id}')">
          <img src="${prod.image}" alt="${prod.name}" class="product-thumb" loading="lazy">
          
          <!-- Veg Indicator -->
          <div class="diet-badge ${prod.diet}" title="100% Vegetarian Homemade"></div>

          <!-- Product Tag -->
          ${prod.tag ? `<span class="product-label-tag">${prod.tag}</span>` : ''}

          <!-- Quick View Hover Button -->
          <button class="btn-quick-view" onclick="event.stopPropagation(); openQuickView('${prod.id}')">
            Quick View 🔍
          </button>
        </div>

        <!-- Product Content Body -->
        <div class="product-body">
          <div class="product-meta-top">
            <span class="product-cat-name">${prod.categoryLabel}</span>
            <div class="product-rating-box">
              <span>★</span>
              <span>${prod.rating.toFixed(1)}</span>
              <span style="color:var(--text-light); font-weight:normal;">(${prod.reviewsCount})</span>
            </div>
          </div>

          <h3 class="product-title" onclick="openQuickView('${prod.id}')" style="cursor:pointer;">${prod.name}</h3>
          <span class="product-telugu-name">${prod.teluguName}</span>
          <p class="product-desc-short">${prod.description}</p>

          <!-- Dynamic Weight Selector (Only Available Weights for this item) -->
          <div class="product-weight-selector">
            <span class="weight-selector-label">Available Weights:</span>
            <div class="weight-options-row" style="grid-template-columns: repeat(${availableWeights.length}, 1fr);">
              ${availableWeights.map(wKey => `
                <button 
                  class="weight-opt-btn ${wKey === activeWeight ? 'active' : ''}" 
                  onclick="selectCardWeight('${prod.id}', '${wKey}')"
                >
                  ${wKey}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Card Price & Action Buttons -->
          <div class="product-footer-row">
            <div class="price-container">
              <span class="price-currency-sym">Price:</span>
              <span class="price-amount" id="price-display-${prod.id}">₹${currentPrice}</span>
            </div>

            <div class="product-action-btns">
              <button 
                class="btn-card-add-cart" 
                onclick="handleCardAddToCart('${prod.id}')" 
                title="Add to Cart"
              >
                + Add
              </button>

              <button 
                class="btn-card-wa-buy" 
                onclick="buySingleItemViaWhatsApp('${prod.id}')" 
                title="Order on WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm6.273-3.832c1.616.96 3.197 1.48 4.887 1.481 5.485 0 9.948-4.467 9.951-9.957.002-2.66-1.033-5.161-2.915-7.045C16.37 2.76 13.868 1.72 11.2 1.72c-5.49 0-9.956 4.467-9.959 9.96-.001 1.79.475 3.535 1.38 5.093l-.998 3.64 3.731-.977zm12.355-7.37c-.305-.152-1.805-.892-2.084-.993-.28-.101-.484-.152-.687.152-.203.305-.788 1.002-.966 1.206-.178.203-.356.228-.661.076-.305-.152-1.288-.475-2.454-1.517-.908-.81-1.52-1.812-1.698-2.117-.178-.305-.019-.47.133-.621.137-.136.305-.356.457-.533.152-.178.203-.305.305-.508.102-.203.051-.381-.025-.533-.076-.152-.687-1.657-.941-2.27-.248-.599-.5-.517-.688-.527l-.587-.01c-.203 0-.533.076-.813.381-.28.305-1.067 1.042-1.067 2.542 0 1.5 1.092 2.946 1.244 3.15.152.203 2.15 3.284 5.207 4.602.727.314 1.295.5 1.737.64.73.232 1.393.198 1.918.12.585-.087 1.805-.737 2.06-1.45.253-.712.253-1.322.178-1.45-.076-.127-.28-.203-.585-.355z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Weight Selector on Card
function selectCardWeight(productId, weight) {
  APP_STATE.selectedProductWeights[productId] = weight;
  
  const prod = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!prod) return;

  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (card) {
    const weightBtns = card.querySelectorAll(".weight-opt-btn");
    weightBtns.forEach(btn => {
      if (btn.textContent.trim() === weight) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const priceEl = document.getElementById(`price-display-${productId}`);
    if (priceEl) {
      priceEl.textContent = `₹${prod.weights[weight]}`;
      priceEl.style.transform = "scale(1.15)";
      setTimeout(() => { priceEl.style.transform = "scale(1)"; }, 150);
    }
  }
}

// Add to Cart from Card Button
function handleCardAddToCart(productId) {
  const prod = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!prod) return;

  const weight = APP_STATE.selectedProductWeights[productId] || prod.defaultWeight || Object.keys(prod.weights)[0];
  addToCart(productId, weight, 1);
  showToast(`Added ${prod.name} (${weight}) to Cart! 🛒`);
}

// =============================================================================
// Category Filtering & Sorting
// =============================================================================
function filterCatalog(categoryId) {
  APP_STATE.activeCategory = categoryId;
  APP_STATE.searchQuery = "";
  
  const searchInput = document.getElementById("header-search-input");
  if (searchInput) searchInput.value = "";
  const searchWrapper = document.getElementById("header-search-wrapper");
  if (searchWrapper) searchWrapper.classList.remove("has-val");

  document.querySelectorAll(".filter-pill").forEach(pill => {
    if (pill.dataset.filter === categoryId) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  document.querySelectorAll(".cat-card").forEach(card => {
    if (card.dataset.category === categoryId) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  renderStorefront();

  const catalogEl = document.getElementById("menu-catalog");
  if (catalogEl && window.scrollY > 400) {
    catalogEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function sortCatalog(sortVal) {
  APP_STATE.currentSort = sortVal;
  renderStorefront();
}

// =============================================================================
// Quick View Modal
// =============================================================================
function openQuickView(productId) {
  const prod = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!prod) return;

  APP_STATE.modalCurrentProductId = productId;
  const availableWeights = Object.keys(prod.weights);
  APP_STATE.modalSelectedWeight = APP_STATE.selectedProductWeights[productId] || prod.defaultWeight || availableWeights[0];
  APP_STATE.modalQty = 1;

  document.getElementById("modal-product-img").src = prod.image;
  document.getElementById("modal-product-img").alt = prod.name;
  document.getElementById("modal-badge-tag").textContent = prod.tag || "Fresh Batch";
  document.getElementById("modal-product-cat").textContent = prod.categoryLabel;
  document.getElementById("modal-product-title").textContent = prod.name;
  document.getElementById("modal-product-telugu").textContent = prod.teluguName;
  document.getElementById("modal-product-rating").textContent = `★★★★★ ${prod.rating.toFixed(1)} (${prod.reviewsCount} reviews)`;
  document.getElementById("modal-spice-meter").textContent = prod.spice;
  document.getElementById("modal-product-desc").textContent = prod.description;
  document.getElementById("modal-shelf-life").textContent = prod.shelfLife;
  document.getElementById("modal-ingredients").textContent = prod.ingredients;
  document.getElementById("modal-qty-input").value = APP_STATE.modalQty;

  const weightGroup = document.getElementById("modal-weight-options");
  weightGroup.innerHTML = availableWeights.map(wKey => `
    <button 
      class="weight-opt-btn ${wKey === APP_STATE.modalSelectedWeight ? 'active' : ''}" 
      onclick="selectModalWeight('${wKey}')"
    >
      ${wKey} - ₹${prod.weights[wKey]}
    </button>
  `).join('');

  updateModalPrice();

  const overlay = document.getElementById("quick-view-overlay");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function selectModalWeight(weight) {
  APP_STATE.modalSelectedWeight = weight;
  const weightGroup = document.getElementById("modal-weight-options");
  const btns = weightGroup.querySelectorAll(".weight-opt-btn");
  btns.forEach(btn => {
    if (btn.textContent.includes(weight)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  updateModalPrice();
}

function updateModalPrice() {
  const prod = PRODUCTS_DATABASE.find(p => p.id === APP_STATE.modalCurrentProductId);
  if (!prod) return;

  const unitPrice = prod.weights[APP_STATE.modalSelectedWeight];
  const totalPrice = unitPrice * APP_STATE.modalQty;
  document.getElementById("modal-price-display").textContent = `₹${totalPrice}`;
}

function incrementModalQty() {
  APP_STATE.modalQty += 1;
  document.getElementById("modal-qty-input").value = APP_STATE.modalQty;
  updateModalPrice();
}

function decrementModalQty() {
  if (APP_STATE.modalQty > 1) {
    APP_STATE.modalQty -= 1;
    document.getElementById("modal-qty-input").value = APP_STATE.modalQty;
    updateModalPrice();
  }
}

function addModalItemToCart() {
  if (!APP_STATE.modalCurrentProductId) return;
  const prod = PRODUCTS_DATABASE.find(p => p.id === APP_STATE.modalCurrentProductId);
  if (!prod) return;

  addToCart(prod.id, APP_STATE.modalSelectedWeight, APP_STATE.modalQty);
  closeQuickViewModal();
  showToast(`Added ${APP_STATE.modalQty}x ${prod.name} (${APP_STATE.modalSelectedWeight}) to Cart! 🛒`);
  openCartDrawer();
}

function closeQuickViewModal() {
  const overlay = document.getElementById("quick-view-overlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// =============================================================================
// Shopping Cart Logic & Drawer
// =============================================================================
function addToCart(productId, weight, qty = 1) {
  const prod = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!prod) return;

  const unitPrice = prod.weights[weight];

  const existingIndex = APP_STATE.cart.findIndex(
    item => item.id === productId && item.weight === weight
  );

  if (existingIndex > -1) {
    APP_STATE.cart[existingIndex].qty += qty;
  } else {
    APP_STATE.cart.push({
      id: productId,
      name: prod.name,
      teluguName: prod.teluguName,
      image: prod.image,
      weight: weight,
      unitPrice: unitPrice,
      qty: qty
    });
  }

  saveCartToStorage();
  updateCartUI();
}

function updateCartItemQty(index, delta) {
  if (!APP_STATE.cart[index]) return;

  APP_STATE.cart[index].qty += delta;
  if (APP_STATE.cart[index].qty <= 0) {
    APP_STATE.cart.splice(index, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(index) {
  if (!APP_STATE.cart[index]) return;
  APP_STATE.cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  const totalItemCount = APP_STATE.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = APP_STATE.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);

  document.getElementById("cart-count-badge").textContent = totalItemCount;
  document.getElementById("cart-total-preview").textContent = `₹${subtotal}`;
  document.getElementById("cart-drawer-items-count").textContent = `${totalItemCount} items`;

  const floatingCart = document.getElementById("floating-cart-pill");
  const floatingCount = document.getElementById("floating-cart-count");
  const floatingTotal = document.getElementById("floating-cart-total");

  if (totalItemCount > 0) {
    floatingCart.classList.add("show");
    floatingCount.textContent = totalItemCount;
    floatingTotal.textContent = `View Cart • ₹${subtotal}`;
  } else {
    floatingCart.classList.remove("show");
  }

  const freeShippingText = document.getElementById("free-shipping-text");
  const freeShippingFill = document.getElementById("free-shipping-fill");
  const shippingCharge = subtotal >= APP_STATE.freeShippingThreshold || subtotal === 0 ? 0 : APP_STATE.standardShippingFee;

  if (subtotal >= APP_STATE.freeShippingThreshold) {
    freeShippingText.innerHTML = `🎉 Congratulations! You have unlocked <strong>FREE DELIVERY</strong>!`;
    freeShippingFill.style.width = "100%";
  } else if (subtotal > 0) {
    const needed = APP_STATE.freeShippingThreshold - subtotal;
    const percent = Math.min(100, Math.round((subtotal / APP_STATE.freeShippingThreshold) * 100));
    freeShippingText.innerHTML = `Add <strong>₹${needed}</strong> more for <strong>FREE DELIVERY 🚚</strong>`;
    freeShippingFill.style.width = `${percent}%`;
  } else {
    freeShippingText.innerHTML = `Add ₹${APP_STATE.freeShippingThreshold} for <strong>FREE DELIVERY 🚚</strong>`;
    freeShippingFill.style.width = "0%";
  }

  const cartList = document.getElementById("cart-drawer-items");
  const emptyView = document.getElementById("cart-empty-view");
  const cartFooter = document.getElementById("cart-drawer-footer");

  if (APP_STATE.cart.length === 0) {
    cartList.innerHTML = "";
    emptyView.classList.add("show");
    cartFooter.style.display = "none";
    return;
  } else {
    emptyView.classList.remove("show");
    cartFooter.style.display = "flex";
  }

  cartList.innerHTML = APP_STATE.cart.map((item, idx) => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-weight">${item.weight} pack</span>
        <div class="cart-item-bottom">
          <span class="cart-item-price">₹${item.unitPrice * item.qty}</span>
          <div class="qty-stepper">
            <button onclick="updateCartItemQty(${idx}, -1)">-</button>
            <input type="text" value="${item.qty}" readonly>
            <button onclick="updateCartItemQty(${idx}, 1)">+</button>
          </div>
        </div>
      </div>
      <button class="cart-item-remove-btn" onclick="removeCartItem(${idx})" title="Remove item">&times;</button>
    </div>
  `).join('');

  let discountAmount = 0;
  const discountRow = document.getElementById("bill-discount-row");
  const discountEl = document.getElementById("bill-discount");

  if (APP_STATE.appliedCoupon && subtotal > 0) {
    discountAmount = Math.round((subtotal * APP_STATE.appliedCoupon.discountPercent) / 100);
    discountRow.style.display = "flex";
    discountEl.textContent = `-₹${discountAmount} (${APP_STATE.appliedCoupon.code})`;
  } else {
    discountRow.style.display = "none";
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCharge);

  document.getElementById("bill-subtotal").textContent = `₹${subtotal}`;
  document.getElementById("bill-shipping").textContent = shippingCharge === 0 ? "FREE" : `₹${shippingCharge}`;
  document.getElementById("bill-grandtotal").textContent = `₹${grandTotal}`;
}

function openCartDrawer() {
  document.getElementById("cart-drawer").classList.add("active");
  document.getElementById("cart-drawer-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cart-drawer").classList.remove("active");
  document.getElementById("cart-drawer-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

function applyCoupon() {
  const input = document.getElementById("coupon-input");
  const msg = document.getElementById("coupon-msg");
  const code = input.value.trim().toUpperCase();

  if (code === "CHINNODU10" || code === "RUCHULU10") {
    APP_STATE.appliedCoupon = { code: code, discountPercent: 10 };
    msg.className = "coupon-msg success";
    msg.textContent = "10% Welcome Discount applied!";
  } else if (code === "HOMEMADE50") {
    APP_STATE.appliedCoupon = { code: "HOMEMADE50", discountPercent: 8 };
    msg.className = "coupon-msg success";
    msg.textContent = "Special offer applied!";
  } else {
    msg.className = "coupon-msg error";
    msg.textContent = "Invalid promo code. Try 'CHINNODU10'";
  }

  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem("chinnodu_foods_cart", JSON.stringify(APP_STATE.cart));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("chinnodu_foods_cart") || localStorage.getItem("sri_ruchulu_cart");
    if (saved) {
      APP_STATE.cart = JSON.parse(saved);
    }
  } catch (e) {
    APP_STATE.cart = [];
  }
}

// =============================================================================
// WhatsApp 1-Click Ordering System
// =============================================================================
function checkoutViaWhatsApp() {
  if (APP_STATE.cart.length === 0) {
    showToast("Please add items to cart first!");
    return;
  }

  const subtotal = APP_STATE.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const shippingCharge = subtotal >= APP_STATE.freeShippingThreshold ? 0 : APP_STATE.standardShippingFee;
  let discountAmount = 0;
  if (APP_STATE.appliedCoupon) {
    discountAmount = Math.round((subtotal * APP_STATE.appliedCoupon.discountPercent) / 100);
  }
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCharge);

  let message = `*Namaskaram Chinnodu Foods!* 🏺\n\n`;
  message += `I would like to place an order from your website:\n\n`;
  message += `*📋 ORDER ITEMS:*\n`;

  APP_STATE.cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (${item.weight})\n`;
    message += `   Qty: ${item.qty} x ₹${item.unitPrice} = ₹${item.unitPrice * item.qty}\n`;
  });

  message += `\n*🧾 BILL DETAILS:*`;
  message += `\nItem Total: ₹${subtotal}`;
  if (discountAmount > 0) {
    message += `\nDiscount (${APP_STATE.appliedCoupon.code}): -₹${discountAmount}`;
  }
  message += `\nShipping: ${shippingCharge === 0 ? 'FREE DELIVERY 🚚' : `₹${shippingCharge}`}`;
  message += `\n*Grand Total: ₹${grandTotal}*\n\n`;
  message += `Please confirm availability and share payment / delivery instructions.\n`;
  message += `Thank you!`;

  const cleanNumber = APP_STATE.whatsappNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  window.open(waUrl, "_blank");
}

function buySingleItemViaWhatsApp(productId) {
  const prod = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!prod) return;

  const weight = APP_STATE.selectedProductWeights[productId] || prod.defaultWeight || Object.keys(prod.weights)[0];
  const price = prod.weights[weight];

  let message = `*Namaskaram Chinnodu Foods!* 🏺\n\n`;
  message += `I would like to order this delicacy:\n`;
  message += `• *${prod.name}* (${prod.teluguName})\n`;
  message += `• Quantity/Pack: *${weight}*\n`;
  message += `• Price: *₹${price}*\n\n`;
  message += `Please send me the delivery details and payment link. Thank you!`;

  const cleanNumber = APP_STATE.whatsappNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  window.open(waUrl, "_blank");
}

// =============================================================================
// Online Checkout Modal Flow & Order Placement
// =============================================================================
function openCheckoutModal() {
  if (APP_STATE.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  closeCartDrawer();

  const totalCount = APP_STATE.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = APP_STATE.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const shippingCharge = subtotal >= APP_STATE.freeShippingThreshold ? 0 : APP_STATE.standardShippingFee;
  let discountAmount = 0;
  if (APP_STATE.appliedCoupon) {
    discountAmount = Math.round((subtotal * APP_STATE.appliedCoupon.discountPercent) / 100);
  }
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCharge);

  document.getElementById("checkout-items-qty").textContent = `${totalCount} items`;
  document.getElementById("checkout-total-payable").textContent = `₹${grandTotal}`;

  document.getElementById("checkout-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkout-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

function togglePaymentDetails(mode) {
  const upiBox = document.getElementById("upi-box");
  if (mode === "upi") {
    upiBox.style.display = "block";
  } else {
    upiBox.style.display = "none";
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const address = document.getElementById("cust-address").value.trim();
  const city = document.getElementById("cust-city").value.trim();
  const pincode = document.getElementById("cust-pincode").value.trim();
  const state = document.getElementById("cust-state").value;
  const paymentMethod = 'upi'; // 100% Prepaid UPI (No Cash on Delivery)

  const orderId = `CF-${Math.floor(10000 + Math.random() * 90000)}`;

  const subtotal = APP_STATE.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const shippingCharge = subtotal >= APP_STATE.freeShippingThreshold ? 0 : APP_STATE.standardShippingFee;
  let discountAmount = 0;
  if (APP_STATE.appliedCoupon) {
    discountAmount = Math.round((subtotal * APP_STATE.appliedCoupon.discountPercent) / 100);
  }
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCharge);

  // Construct complete order payload
  const orderData = {
    id: orderId,
    createdAt: new Date().toISOString(),
    customer: {
      name,
      phone,
      address,
      city,
      state,
      pincode
    },
    items: JSON.parse(JSON.stringify(APP_STATE.cart)),
    subtotal,
    discount: discountAmount,
    shipping: shippingCharge,
    grandTotal,
    paymentMethod,
    paymentStatus: paymentMethod === 'upi' ? 'Paid' : 'Pending',
    status: 'received',
    statusTimeline: [
      {
        status: 'received',
        time: new Date().toISOString(),
        note: 'Order successfully placed via Website Checkout'
      }
    ],
    tracking: {
      courier: '',
      trackingId: '',
      trackingUrl: '',
      dispatchedAt: '',
      estimatedDelivery: ''
    }
  };

  // 1. Save to server API
  fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData)
  }).catch(err => {
    console.warn("Could not save order to server API, caching locally:", err);
  });

  // 2. Also cache order in browser localStorage so it's always accessible
  try {
    let localOrders = [];
    const cached = localStorage.getItem("cf_orders_cache");
    if (cached) localOrders = JSON.parse(cached);
    localOrders.unshift(orderData);
    localStorage.setItem("cf_orders_cache", JSON.stringify(localOrders));
    localStorage.setItem("cf_last_order_id", orderId);
  } catch (err) {
    console.error("Storage error:", err);
  }

  const receiptSummary = document.getElementById("success-receipt-summary");
  receiptSummary.innerHTML = `
    <div style="margin-bottom:8px;"><strong>Customer:</strong> ${name} (${phone})</div>
    <div style="margin-bottom:8px;"><strong>Address:</strong> ${address}, ${city}, ${state} - ${pincode}</div>
    <div style="margin-bottom:8px;"><strong>Payment Mode:</strong> <span style="color:#059669; font-weight:700;">Prepaid UPI (PhonePe / Google Pay / Paytm)</span></div>
    <div style="margin-bottom:8px;"><strong>Items Ordered:</strong> ${APP_STATE.cart.length} types (${APP_STATE.cart.map(i => `${i.name} [${i.weight}]`).join(', ')})</div>
    <div style="border-top:1px dashed var(--border-color); padding-top:8px;"><strong>Total Payable:</strong> <span style="color:var(--primary-maroon); font-size:1.1rem; font-weight:800;">₹${grandTotal}</span></div>
  `;

  document.getElementById("success-order-id").textContent = `#${orderId}`;

  let waMsg = `*Order Confirmation - Chinnodu Foods #${orderId}*\n\n`;
  waMsg += `Name: ${name}\nPhone: ${phone}\nAddress: ${address}, ${city}, ${state} - ${pincode}\nPayment: ${paymentMethod.toUpperCase()}\n\n`;
  waMsg += `Total Amount: ₹${grandTotal}\n\nPlease confirm dispatch and share tracking ID once shipped. Thank you!`;

  const cleanNumber = APP_STATE.whatsappNumber.replace(/[^0-9]/g, '');
  document.getElementById("success-whatsapp-track-btn").href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(waMsg)}`;

  // Set the "Track Live on Website" button in the success modal
  const liveTrackBtn = document.getElementById("success-live-track-btn");
  if (liveTrackBtn) {
    liveTrackBtn.onclick = () => {
      closeSuccessModal();
      openTrackOrderModal(orderId);
    };
  }

  APP_STATE.cart = [];
  saveCartToStorage();
  updateCartUI();

  closeCheckoutModal();
  document.getElementById("order-success-overlay").classList.add("active");
}

function closeSuccessModal() {
  document.getElementById("order-success-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

// =============================================================================
// Live Search Logic
// =============================================================================
function setupSearchLogic() {
  const searchInput = document.getElementById("header-search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  const dropdown = document.getElementById("search-results-dropdown");
  const searchWrapper = document.getElementById("header-search-wrapper");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim().toLowerCase();
    APP_STATE.searchQuery = val;

    if (val.length > 0) {
      searchWrapper.classList.add("has-val");

      const matches = PRODUCTS_DATABASE.filter(p => 
        p.name.toLowerCase().includes(val) ||
        p.teluguName.includes(val) ||
        p.categoryLabel.toLowerCase().includes(val)
      ).slice(0, 5);

      if (matches.length > 0) {
        dropdown.classList.add("show");
        dropdown.innerHTML = matches.map(m => {
          const startingPrice = Object.values(m.weights)[0];
          return `
            <div class="search-result-item" onclick="openQuickView('${m.id}')">
              <img src="${m.image}" alt="${m.name}" class="search-result-thumb">
              <div class="search-result-info">
                <div class="search-result-name">${m.name}</div>
                <div class="search-result-price">Starts at ₹${startingPrice}</div>
              </div>
            </div>
          `;
        }).join('');
      } else {
        dropdown.classList.add("show");
        dropdown.innerHTML = `<div style="padding:14px; text-align:center; font-size:0.85rem; color:var(--text-muted);">No matching delicacies found</div>`;
      }

      renderStorefront();
    } else {
      searchWrapper.classList.remove("has-val");
      dropdown.classList.remove("show");
      dropdown.innerHTML = "";
      renderStorefront();
    }
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    APP_STATE.searchQuery = "";
    searchWrapper.classList.remove("has-val");
    dropdown.classList.remove("show");
    renderStorefront();
  });

  document.addEventListener("click", (e) => {
    if (!searchWrapper.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
}

// =============================================================================
// FAQ Accordion Toggle
// =============================================================================
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const answer = item.querySelector(".faq-answer");
  const isActive = item.classList.contains("active");

  document.querySelectorAll(".faq-item").forEach(other => {
    other.classList.remove("active");
    other.querySelector(".faq-answer").style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add("active");
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

// =============================================================================
// Toast Feedback System
// =============================================================================
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🏺</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 3000);
}

// =============================================================================
// Mobile Drawer & Sticky Header Helpers
// =============================================================================
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
const mobileDrawerOverlay = document.getElementById("mobile-drawer-overlay");
const drawerCloseBtn = document.getElementById("drawer-close-btn");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNavDrawer.classList.add("active");
    mobileDrawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

function closeMobileDrawer() {
  if (mobileNavDrawer) mobileNavDrawer.classList.remove("active");
  if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeMobileDrawer);
if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener("click", closeMobileDrawer);

function setupHeaderScroll() {
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = "var(--shadow-md)";
    } else {
      header.style.boxShadow = "none";
    }
  });
}

const headerCartBtn = document.getElementById("header-cart-btn");
if (headerCartBtn) {
  headerCartBtn.addEventListener("click", openCartDrawer);
}

// =============================================================================
// Customer Live Order Tracking System
// =============================================================================
function openTrackOrderModal(prefillId) {
  const modal = document.getElementById("track-order-overlay");
  if (!modal) return;

  const input = document.getElementById("track-order-query");
  const resultContainer = document.getElementById("track-result-container");
  
  if (prefillId) {
    input.value = prefillId;
    trackOrderLookup(prefillId);
  } else {
    // If no prefill, check if customer placed an order earlier in this browser session
    const lastOrderId = localStorage.getItem("cf_last_order_id");
    if (lastOrderId && !input.value) {
      input.value = lastOrderId;
      trackOrderLookup(lastOrderId);
    } else if (resultContainer && !input.value) {
      resultContainer.innerHTML = '';
    }
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  setTimeout(() => input.focus(), 150);
}

function closeTrackOrderModal() {
  const modal = document.getElementById("track-order-overlay");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

async function handleTrackOrderSubmit(e) {
  if (e) e.preventDefault();
  const query = document.getElementById("track-order-query").value.trim();
  if (!query) {
    showToast("Please enter your Order ID (e.g. CF-84291) or Phone number");
    return;
  }
  await trackOrderLookup(query);
}

async function trackOrderLookup(query) {
  const resultContainer = document.getElementById("track-result-container");
  if (!resultContainer) return;

  resultContainer.innerHTML = `
    <div style="text-align:center; padding:2rem; color:var(--text-muted);">
      <div style="font-size:2rem; animation: pulse 1s infinite;">⏳</div>
      <div style="margin-top:0.5rem; font-weight:600;">Searching order records...</div>
    </div>
  `;

  let matchedOrders = [];

  // Try API first
  try {
    const res = await fetch(`/api/track?q=${encodeURIComponent(query)}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.orders)) {
        matchedOrders = data.orders;
      }
    }
  } catch (err) {
    console.warn("API tracking lookup failed, falling back to local storage:", err);
  }

  // Fallback to local storage if API didn't return matches
  if (matchedOrders.length === 0) {
    try {
      const cached = localStorage.getItem("cf_orders_cache");
      if (cached) {
        const localList = JSON.parse(cached);
        const cleanQ = query.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        matchedOrders = localList.filter(o => {
          const cleanId = (o.id || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          const cleanPhone = (o.customer?.phone || '').replace(/[^0-9]/g, '');
          return cleanId === cleanQ || (cleanPhone.length >= 10 && cleanPhone.endsWith(cleanQ.slice(-10)));
        });
      }
    } catch (err) {}
  }

  if (matchedOrders.length === 0) {
    resultContainer.innerHTML = `
      <div style="background:#FFF9F5; border:1px solid #FCD34D; border-radius:12px; padding:1.5rem; text-align:center; margin-top:1rem;">
        <div style="font-size:2rem; margin-bottom:0.5rem;">🔍</div>
        <h4 style="color:var(--primary-maroon); font-size:1.1rem; margin-bottom:0.35rem;">Order Not Found</h4>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.5;">
          We couldn't locate any order for <strong>"${query}"</strong>. Please check your Order ID (starts with CF-) or registered 10-digit phone number.
        </p>
        <div style="margin-top:1rem;">
          <a href="https://wa.me/917382914229?text=Hi%20Chinnodu%20Foods!%20I%20need%20help%20tracking%20my%20order%20${encodeURIComponent(query)}" target="_blank" class="btn-wa-gold" style="display:inline-flex; font-size:0.85rem; padding:0.5rem 1rem;">
            <span>💬 Inquire on WhatsApp (+91 73829 14229)</span>
          </a>
        </div>
      </div>
    `;
    return;
  }

  // Render matched order(s)
  resultContainer.innerHTML = matchedOrders.map(order => renderCustomerTrackCard(order)).join("");
}

function renderCustomerTrackCard(order) {
  const steps = [
    { key: 'received', label: 'Order Placed', icon: '📝', desc: 'Received & Queued' },
    { key: 'confirmed', label: 'Confirmed', icon: '✅', desc: 'Kitchen Verified' },
    { key: 'packed', label: 'Packed Fresh', icon: '🏺', desc: 'Aroma-Sealed Jar' },
    { key: 'shipped', label: 'Dispatched', icon: '🚚', desc: 'Handed to Courier' },
    { key: 'delivered', label: 'Delivered', icon: '🎉', desc: 'Enjoy Authentic Ruchulu!' }
  ];

  const statusHierarchy = ['received', 'confirmed', 'packed', 'shipped', 'delivered'];
  let currentIdx = statusHierarchy.indexOf(order.status);
  if (currentIdx === -1) currentIdx = 0;
  if (order.status === 'cancelled') currentIdx = -1;

  const tracking = order.tracking || {};
  const cust = order.customer || {};

  return `
    <div class="track-card-result">
      <div class="track-card-header">
        <div>
          <span class="track-order-id-pill">#${order.id}</span>
          <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
            Placed on ${new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700; color:var(--primary-maroon); font-size:1.05rem;">₹${order.grandTotal}</div>
          <div style="font-size:0.75rem; color:#059669; font-weight:700; text-transform:uppercase;">⚡ Prepaid UPI (Paid)</div>
        </div>
      </div>

      <!-- Live Visual Stepper -->
      <div class="tracking-stepper">
        ${steps.map((s, idx) => {
          const isDone = currentIdx >= idx;
          const isCurrent = currentIdx === idx;
          return `
            <div class="stepper-step ${isDone ? 'completed' : ''} ${isCurrent ? 'active' : ''}">
              <div class="stepper-node">
                ${isDone ? (isCurrent ? s.icon : '✓') : idx + 1}
              </div>
              <div class="stepper-title">${s.label}</div>
              <div class="stepper-subtitle">${s.desc}</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Courier / Tracking Highlight Banner If Dispatched -->
      ${tracking.trackingId ? `
        <div class="courier-dispatch-banner">
          <div class="courier-banner-icon">🚚</div>
          <div class="courier-banner-info">
            <h4 class="courier-banner-title">Parcel Dispatched via ${tracking.courier || 'Express Courier'}</h4>
            <div class="courier-tracking-row">
              <span class="tracking-id-text">Tracking / Consignment No: <strong>${tracking.trackingId}</strong></span>
              <button type="button" class="btn-copy-sm" onclick="navigator.clipboard.writeText('${tracking.trackingId}'); showToast('Copied Tracking ID!');">
                📋 Copy
              </button>
            </div>
            ${tracking.trackingUrl ? `
              <div style="margin-top:0.6rem;">
                <a href="${tracking.trackingUrl}" target="_blank" rel="noopener noreferrer" class="btn-track-courier">
                  <span>🌐 Track Live on Courier Website &rarr;</span>
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      ` : (order.status === 'received' || order.status === 'confirmed' || order.status === 'packed') ? `
        <div class="dispatch-preparing-banner">
          <span style="font-size:1.5rem;">👩‍🍳</span>
          <div>
            <strong>Freshly Preparing in our Cloud Kitchen!</strong>
            <p style="margin:2px 0 0 0; font-size:0.82rem; color:var(--text-muted);">
              Our village homemakers are freshly preparing, seasoning, and airtight-sealing your order. Tracking ID will be generated upon courier handover.
            </p>
          </div>
        </div>
      ` : ''}

      <!-- Order Details Summary -->
      <div class="track-items-summary">
        <div style="font-size:0.82rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:6px;">
          Delivery to: ${cust.name || 'Customer'}, ${cust.city || ''} (${cust.pincode || ''})
        </div>
        <div style="font-size:0.85rem; color:var(--text-main);">
          <strong>Items:</strong> ${(order.items || []).map(i => `${i.name} [${i.weight || ''}] x${i.qty}`).join(', ')}
        </div>
      </div>

      <!-- Direct Assistance -->
      <div style="margin-top:1rem; text-align:center;">
        <a href="https://wa.me/917382914229?text=Namaskaram%20Chinnodu%20Foods!%20I%20have%20a%20question%20regarding%20my%20order%20%23${order.id}" target="_blank" class="track-wa-help-link">
          <span>💬 Need assistance with this order? Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  `;
}

