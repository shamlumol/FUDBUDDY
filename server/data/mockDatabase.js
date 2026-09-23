
const collections = [
  {
    "id": 1,
    "title": "Top Trending Spots",
    "places": "12 Places",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": 2,
    "title": "Best Rooftops",
    "places": "8 Places",
    "image": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": 3,
    "title": "Newly Opened",
    "places": "15 Places",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": 4,
    "title": "Luxury Dining",
    "places": "10 Places",
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400"
  }
];
const restaurants = [
  {
    "id": 1,
    "name": "Restaurant 1 - Indian",
    "location": "Yanbu",
    "distance": "7.9 km",
    "distanceValue": 7.9,
    "rating": 3.7,
    "diningRating": 4.7,
    "deliveryRating": 4.8,
    "reviewCount": "661",
    "price": "$",
    "costForTwo": "SR 51 for two",
    "logo": "https://images.unsplash.com/photo-1500000000001?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000001?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000001?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000001?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Indian, Lebanese",
    "tags": [
      "Indian",
      "Lebanese"
    ],
    "dietary": [
      "Healthy",
      "Gluten-Free"
    ],
    "promoted": false,
    "offerText": ""
  },
  {
    "id": 2,
    "name": "Restaurant 2 - Arabic",
    "location": "Jubail",
    "distance": "6.1 km",
    "distanceValue": 6.1,
    "rating": 4.6,
    "diningRating": 5,
    "deliveryRating": 4.7,
    "reviewCount": "273",
    "price": "$$",
    "costForTwo": "SR 85 for two",
    "logo": "https://images.unsplash.com/photo-1500000000002?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000002?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000002?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000002?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Arabic, American",
    "tags": [
      "Arabic",
      "American"
    ],
    "dietary": [
      "Vegan",
      "Vegetarian"
    ],
    "promoted": false,
    "offerText": "Up to SR 50 OFF"
  },
  {
    "id": 3,
    "name": "Restaurant 3 - Mexican",
    "location": "Dammam",
    "distance": "6.9 km",
    "distanceValue": 6.9,
    "rating": 4.4,
    "diningRating": 4.2,
    "deliveryRating": 4,
    "reviewCount": "1605",
    "price": "$$$",
    "costForTwo": "SR 158 for two",
    "logo": "https://images.unsplash.com/photo-1500000000003?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000003?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000003?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000003?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Mexican, Mexican",
    "tags": [
      "Mexican"
    ],
    "dietary": [
      "Keto"
    ],
    "promoted": false,
    "offerText": "Free Delivery"
  },
  {
    "id": 4,
    "name": "Restaurant 4 - Chinese",
    "location": "Al Qatif",
    "distance": "2 km",
    "distanceValue": 2,
    "rating": 3.1,
    "diningRating": 4.3,
    "deliveryRating": 4.7,
    "reviewCount": "1629",
    "price": "$$$",
    "costForTwo": "SR 196 for two",
    "logo": "https://images.unsplash.com/photo-1500000000004?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000004?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000004?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000004?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Chinese, Lebanese",
    "tags": [
      "Chinese",
      "Lebanese"
    ],
    "dietary": [
      "Keto"
    ],
    "promoted": true,
    "offerText": ""
  },
  {
    "id": 5,
    "name": "Restaurant 5 - American",
    "location": "Mecca",
    "distance": "8.4 km",
    "distanceValue": 8.4,
    "rating": 3.7,
    "diningRating": 5,
    "deliveryRating": 4.5,
    "reviewCount": "1631",
    "price": "$",
    "costForTwo": "SR 148 for two",
    "logo": "https://images.unsplash.com/photo-1500000000005?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000005?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000005?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000005?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "American, Chinese",
    "tags": [
      "American",
      "Chinese"
    ],
    "dietary": [
      "Less spicy",
      "Halal"
    ],
    "promoted": false,
    "offerText": "Up to SR 50 OFF"
  },
  {
    "id": 6,
    "name": "Restaurant 6 - Thai",
    "location": "Riyadh",
    "distance": "1.3 km",
    "distanceValue": 1.3,
    "rating": 4.8,
    "diningRating": 4,
    "deliveryRating": 4.5,
    "reviewCount": "643",
    "price": "$$$",
    "costForTwo": "SR 68 for two",
    "logo": "https://images.unsplash.com/photo-1500000000006?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000006?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000006?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000006?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Thai, Healthy",
    "tags": [
      "Thai",
      "Healthy"
    ],
    "dietary": [
      "Healthy",
      "Less spicy"
    ],
    "promoted": false,
    "offerText": "Free Delivery"
  },
  {
    "id": 7,
    "name": "Restaurant 7 - Arabic",
    "location": "Taif",
    "distance": "1.7 km",
    "distanceValue": 1.7,
    "rating": 3.6,
    "diningRating": 5,
    "deliveryRating": 4.8,
    "reviewCount": "1025",
    "price": "$$",
    "costForTwo": "SR 169 for two",
    "logo": "https://images.unsplash.com/photo-1500000000007?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000007?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000007?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000007?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Arabic, Lebanese",
    "tags": [
      "Arabic",
      "Lebanese"
    ],
    "dietary": [
      "Halal",
      "Healthy"
    ],
    "promoted": false,
    "offerText": "Up to SR 50 OFF"
  },
  {
    "id": 8,
    "name": "Restaurant 8 - Arabic",
    "location": "Alkhobar",
    "distance": "4.2 km",
    "distanceValue": 4.2,
    "rating": 3.7,
    "diningRating": 4.4,
    "deliveryRating": 4.6,
    "reviewCount": "1339",
    "price": "$$",
    "costForTwo": "SR 170 for two",
    "logo": "https://images.unsplash.com/photo-1500000000008?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000008?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000008?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000008?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Arabic, Healthy",
    "tags": [
      "Arabic",
      "Healthy"
    ],
    "dietary": [
      "Healthy",
      "Halal"
    ],
    "promoted": false,
    "offerText": "Buy 1 Get 1"
  },
  {
    "id": 9,
    "name": "Restaurant 9 - Chinese",
    "location": "Tabuk",
    "distance": "1.1 km",
    "distanceValue": 1.1,
    "rating": 3.8,
    "diningRating": 4.9,
    "deliveryRating": 4.2,
    "reviewCount": "1000",
    "price": "$$",
    "costForTwo": "SR 102 for two",
    "logo": "https://images.unsplash.com/photo-1500000000009?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000009?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000009?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000009?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Chinese, Mexican",
    "tags": [
      "Chinese",
      "Mexican"
    ],
    "dietary": [
      "Gluten-Free",
      "Vegan"
    ],
    "promoted": true,
    "offerText": "Flat 30% OFF"
  },
  {
    "id": 10,
    "name": "Restaurant 10 - Healthy",
    "location": "Jubail",
    "distance": "2.7 km",
    "distanceValue": 2.7,
    "rating": 3.1,
    "diningRating": 4.4,
    "deliveryRating": 4.8,
    "reviewCount": "1772",
    "price": "$$",
    "costForTwo": "SR 87 for two",
    "logo": "https://images.unsplash.com/photo-1500000000010?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000010?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000010?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000010?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Healthy, Indian",
    "tags": [
      "Healthy",
      "Indian"
    ],
    "dietary": [
      "Gluten-Free",
      "Less spicy"
    ],
    "promoted": true,
    "offerText": "Buy 1 Get 1"
  },
  {
    "id": 11,
    "name": "Restaurant 11 - Chinese",
    "location": "Yanbu",
    "distance": "7.1 km",
    "distanceValue": 7.1,
    "rating": 4.6,
    "diningRating": 4.9,
    "deliveryRating": 4.6,
    "reviewCount": "1601",
    "price": "$",
    "costForTwo": "SR 130 for two",
    "logo": "https://images.unsplash.com/photo-1500000000011?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000011?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000011?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000011?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Chinese, Indian",
    "tags": [
      "Chinese",
      "Indian"
    ],
    "dietary": [
      "Vegetarian",
      "Less spicy"
    ],
    "promoted": true,
    "offerText": "Free Delivery"
  },
  {
    "id": 12,
    "name": "Restaurant 12 - Arabic",
    "location": "Taif",
    "distance": "5.9 km",
    "distanceValue": 5.9,
    "rating": 3.4,
    "diningRating": 4.1,
    "deliveryRating": 4.7,
    "reviewCount": "549",
    "price": "$",
    "costForTwo": "SR 146 for two",
    "logo": "https://images.unsplash.com/photo-1500000000012?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000012?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000012?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000012?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Arabic, Mexican",
    "tags": [
      "Arabic",
      "Mexican"
    ],
    "dietary": [
      "Vegan"
    ],
    "promoted": true,
    "offerText": "Flat 30% OFF"
  },
  {
    "id": 13,
    "name": "Restaurant 13 - Indian",
    "location": "Taif",
    "distance": "6.4 km",
    "distanceValue": 6.4,
    "rating": 4.1,
    "diningRating": 4.8,
    "deliveryRating": 4.5,
    "reviewCount": "2091",
    "price": "$",
    "costForTwo": "SR 182 for two",
    "logo": "https://images.unsplash.com/photo-1500000000013?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000013?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000013?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000013?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Indian, Mexican",
    "tags": [
      "Indian",
      "Mexican"
    ],
    "dietary": [
      "Vegetarian",
      "Less spicy"
    ],
    "promoted": false,
    "offerText": "Buy 1 Get 1"
  },
  {
    "id": 14,
    "name": "Restaurant 14 - Arabic",
    "location": "Dhahran",
    "distance": "7.6 km",
    "distanceValue": 7.6,
    "rating": 4.7,
    "diningRating": 4.6,
    "deliveryRating": 4.8,
    "reviewCount": "1078",
    "price": "$$$",
    "costForTwo": "SR 93 for two",
    "logo": "https://images.unsplash.com/photo-1500000000014?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000014?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000014?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000014?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Arabic, American",
    "tags": [
      "Arabic",
      "American"
    ],
    "dietary": [
      "Keto",
      "Halal"
    ],
    "promoted": false,
    "offerText": "Free Delivery"
  },
  {
    "id": 15,
    "name": "Restaurant 15 - Healthy",
    "location": "Mecca",
    "distance": "8.8 km",
    "distanceValue": 8.8,
    "rating": 4.6,
    "diningRating": 4.2,
    "deliveryRating": 4.5,
    "reviewCount": "838",
    "price": "$$",
    "costForTwo": "SR 153 for two",
    "logo": "https://images.unsplash.com/photo-1500000000015?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000015?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000015?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000015?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Healthy, Japanese",
    "tags": [
      "Healthy",
      "Japanese"
    ],
    "dietary": [
      "Gluten-Free",
      "Vegetarian"
    ],
    "promoted": false,
    "offerText": "Up to SR 50 OFF"
  },
  {
    "id": 16,
    "name": "Restaurant 16 - Healthy",
    "location": "Hail",
    "distance": "9.6 km",
    "distanceValue": 9.6,
    "rating": 4.7,
    "diningRating": 4.2,
    "deliveryRating": 4.2,
    "reviewCount": "1724",
    "price": "$",
    "costForTwo": "SR 58 for two",
    "logo": "https://images.unsplash.com/photo-1500000000016?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000016?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000016?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000016?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Healthy, Lebanese",
    "tags": [
      "Healthy",
      "Lebanese"
    ],
    "dietary": [
      "Vegetarian",
      "Halal"
    ],
    "promoted": true,
    "offerText": ""
  },
  {
    "id": 17,
    "name": "Restaurant 17 - Italian",
    "location": "Alkhobar",
    "distance": "7.3 km",
    "distanceValue": 7.3,
    "rating": 3.4,
    "diningRating": 4.4,
    "deliveryRating": 4,
    "reviewCount": "320",
    "price": "$$",
    "costForTwo": "SR 158 for two",
    "logo": "https://images.unsplash.com/photo-1500000000017?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000017?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000017?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000017?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Italian, Healthy",
    "tags": [
      "Italian",
      "Healthy"
    ],
    "dietary": [
      "Halal",
      "Healthy"
    ],
    "promoted": true,
    "offerText": "Buy 1 Get 1"
  },
  {
    "id": 18,
    "name": "Restaurant 18 - Arabic",
    "location": "Jubail",
    "distance": "6.9 km",
    "distanceValue": 6.9,
    "rating": 3.9,
    "diningRating": 4.9,
    "deliveryRating": 4.8,
    "reviewCount": "505",
    "price": "$$",
    "costForTwo": "SR 145 for two",
    "logo": "https://images.unsplash.com/photo-1500000000018?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000018?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000018?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000018?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Arabic, Japanese",
    "tags": [
      "Arabic",
      "Japanese"
    ],
    "dietary": [
      "Keto",
      "Halal"
    ],
    "promoted": false,
    "offerText": "Free Delivery"
  },
  {
    "id": 19,
    "name": "Restaurant 19 - Indian",
    "location": "Al Qatif",
    "distance": "1 km",
    "distanceValue": 1,
    "rating": 4.9,
    "diningRating": 4.6,
    "deliveryRating": 4.1,
    "reviewCount": "1025",
    "price": "$$$",
    "costForTwo": "SR 75 for two",
    "logo": "https://images.unsplash.com/photo-1500000000019?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000019?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000019?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000019?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Indian, Japanese",
    "tags": [
      "Indian",
      "Japanese"
    ],
    "dietary": [
      "Vegetarian",
      "Vegan"
    ],
    "promoted": false,
    "offerText": ""
  },
  {
    "id": 20,
    "name": "Restaurant 20 - Chinese",
    "location": "Najran",
    "distance": "8 km",
    "distanceValue": 8,
    "rating": 4.4,
    "diningRating": 4.9,
    "deliveryRating": 4.1,
    "reviewCount": "1373",
    "price": "$",
    "costForTwo": "SR 156 for two",
    "logo": "https://images.unsplash.com/photo-1500000000020?auto=format&fit=crop&q=80&w=200",
    "headerImage": "https://images.unsplash.com/photo-1510000000020?auto=format&fit=crop&q=80&w=800",
    "images": [
      "https://images.unsplash.com/photo-1510000000020?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520000000020?auto=format&fit=crop&q=80&w=800"
    ],
    "cuisines": "Chinese, Healthy",
    "tags": [
      "Chinese",
      "Healthy"
    ],
    "dietary": [
      "Healthy",
      "Gluten-Free"
    ],
    "promoted": true,
    "offerText": "Free Delivery"
  }
];
const foods = [
  {
    "id": 1,
    "restaurantId": 1,
    "restaurantName": "Restaurant 1 - Indian",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 2,
    "restaurantId": 1,
    "restaurantName": "Restaurant 1 - Indian",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 3,
    "restaurantId": 1,
    "restaurantName": "Restaurant 1 - Indian",
    "name": "Delicious Salads 1",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 57",
    "priceValue": 57,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000004?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 4,
    "restaurantId": 1,
    "restaurantName": "Restaurant 1 - Indian",
    "name": "Delicious Drinks 2",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 20",
    "priceValue": 20,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1550000000005?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 5,
    "restaurantId": 1,
    "restaurantName": "Restaurant 1 - Indian",
    "name": "Delicious Main Course 3",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550000000006?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 6,
    "restaurantId": 1,
    "restaurantName": "Restaurant 1 - Indian",
    "name": "Delicious Burgers 4",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 60",
    "priceValue": 60,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1550000000007?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 7,
    "restaurantId": 1,
    "restaurantName": "Restaurant 1 - Indian",
    "name": "Delicious Appetizers 5",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 64",
    "priceValue": 64,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1550000000008?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 8,
    "restaurantId": 2,
    "restaurantName": "Restaurant 2 - Arabic",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 9,
    "restaurantId": 2,
    "restaurantName": "Restaurant 2 - Arabic",
    "name": "Delicious Drinks 1",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1550000000010?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 10,
    "restaurantId": 2,
    "restaurantName": "Restaurant 2 - Arabic",
    "name": "Delicious Main Course 2",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 86",
    "priceValue": 86,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000011?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 11,
    "restaurantId": 2,
    "restaurantName": "Restaurant 2 - Arabic",
    "name": "Delicious Main Course 3",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 75",
    "priceValue": 75,
    "rating": 3.9,
    "image": "https://images.unsplash.com/photo-1550000000012?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 12,
    "restaurantId": 2,
    "restaurantName": "Restaurant 2 - Arabic",
    "name": "Delicious Salads 4",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 69",
    "priceValue": 69,
    "rating": 3.9,
    "image": "https://images.unsplash.com/photo-1550000000013?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 13,
    "restaurantId": 2,
    "restaurantName": "Restaurant 2 - Arabic",
    "name": "Delicious Burgers 5",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 58",
    "priceValue": 58,
    "rating": 3.6,
    "image": "https://images.unsplash.com/photo-1550000000014?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 14,
    "restaurantId": 3,
    "restaurantName": "Restaurant 3 - Mexican",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 15,
    "restaurantId": 3,
    "restaurantName": "Restaurant 3 - Mexican",
    "name": "Delicious Biriyani 1",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 22",
    "priceValue": 22,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1550000000016?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 16,
    "restaurantId": 3,
    "restaurantName": "Restaurant 3 - Mexican",
    "name": "Delicious Pizza 2",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 19",
    "priceValue": 19,
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1550000000017?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 17,
    "restaurantId": 3,
    "restaurantName": "Restaurant 3 - Mexican",
    "name": "Delicious Salads 3",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 61",
    "priceValue": 61,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1550000000018?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 18,
    "restaurantId": 3,
    "restaurantName": "Restaurant 3 - Mexican",
    "name": "Delicious Biriyani 4",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 50",
    "priceValue": 50,
    "rating": 3.6,
    "image": "https://images.unsplash.com/photo-1550000000019?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 19,
    "restaurantId": 3,
    "restaurantName": "Restaurant 3 - Mexican",
    "name": "Delicious Biriyani 5",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 79",
    "priceValue": 79,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1550000000020?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 20,
    "restaurantId": 4,
    "restaurantName": "Restaurant 4 - Chinese",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 21,
    "restaurantId": 4,
    "restaurantName": "Restaurant 4 - Chinese",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 22,
    "restaurantId": 4,
    "restaurantName": "Restaurant 4 - Chinese",
    "name": "Delicious Biriyani 1",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 92",
    "priceValue": 92,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1550000000023?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 23,
    "restaurantId": 4,
    "restaurantName": "Restaurant 4 - Chinese",
    "name": "Delicious Drinks 2",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 33",
    "priceValue": 33,
    "rating": 3.7,
    "image": "https://images.unsplash.com/photo-1550000000024?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 24,
    "restaurantId": 4,
    "restaurantName": "Restaurant 4 - Chinese",
    "name": "Delicious Drinks 3",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 40",
    "priceValue": 40,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1550000000025?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 25,
    "restaurantId": 4,
    "restaurantName": "Restaurant 4 - Chinese",
    "name": "Delicious Appetizers 4",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 80",
    "priceValue": 80,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550000000026?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 26,
    "restaurantId": 4,
    "restaurantName": "Restaurant 4 - Chinese",
    "name": "Delicious Salads 5",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 45",
    "priceValue": 45,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1550000000027?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 27,
    "restaurantId": 5,
    "restaurantName": "Restaurant 5 - American",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 28,
    "restaurantId": 5,
    "restaurantName": "Restaurant 5 - American",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 29,
    "restaurantId": 5,
    "restaurantName": "Restaurant 5 - American",
    "name": "Delicious Pizza 1",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 23",
    "priceValue": 23,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1550000000030?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 30,
    "restaurantId": 5,
    "restaurantName": "Restaurant 5 - American",
    "name": "Delicious Drinks 2",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 54",
    "priceValue": 54,
    "rating": 3.9,
    "image": "https://images.unsplash.com/photo-1550000000031?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 31,
    "restaurantId": 5,
    "restaurantName": "Restaurant 5 - American",
    "name": "Delicious Desserts 3",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 38",
    "priceValue": 38,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1550000000032?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 32,
    "restaurantId": 5,
    "restaurantName": "Restaurant 5 - American",
    "name": "Delicious Beverages 4",
    "category": "BEVERAGES",
    "desc": "A wonderful beverages made with fresh ingredients.",
    "price": "SR 16",
    "priceValue": 16,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1550000000033?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 33,
    "restaurantId": 5,
    "restaurantName": "Restaurant 5 - American",
    "name": "Delicious Salads 5",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 19",
    "priceValue": 19,
    "rating": 3.7,
    "image": "https://images.unsplash.com/photo-1550000000034?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 34,
    "restaurantId": 6,
    "restaurantName": "Restaurant 6 - Thai",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 35,
    "restaurantId": 6,
    "restaurantName": "Restaurant 6 - Thai",
    "name": "Delicious Desserts 1",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 87",
    "priceValue": 87,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1550000000036?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 36,
    "restaurantId": 6,
    "restaurantName": "Restaurant 6 - Thai",
    "name": "Delicious Drinks 2",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 83",
    "priceValue": 83,
    "rating": 4,
    "image": "https://images.unsplash.com/photo-1550000000037?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 37,
    "restaurantId": 6,
    "restaurantName": "Restaurant 6 - Thai",
    "name": "Delicious Salads 3",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 53",
    "priceValue": 53,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550000000038?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 38,
    "restaurantId": 6,
    "restaurantName": "Restaurant 6 - Thai",
    "name": "Delicious Desserts 4",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 56",
    "priceValue": 56,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1550000000039?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 39,
    "restaurantId": 6,
    "restaurantName": "Restaurant 6 - Thai",
    "name": "Delicious Desserts 5",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 92",
    "priceValue": 92,
    "rating": 3.6,
    "image": "https://images.unsplash.com/photo-1550000000040?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 40,
    "restaurantId": 7,
    "restaurantName": "Restaurant 7 - Arabic",
    "name": "Delicious Desserts 1",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 37",
    "priceValue": 37,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1550000000041?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 41,
    "restaurantId": 7,
    "restaurantName": "Restaurant 7 - Arabic",
    "name": "Delicious Salads 2",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 48",
    "priceValue": 48,
    "rating": 3.8,
    "image": "https://images.unsplash.com/photo-1550000000042?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 42,
    "restaurantId": 7,
    "restaurantName": "Restaurant 7 - Arabic",
    "name": "Delicious Biriyani 3",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 39",
    "priceValue": 39,
    "rating": 3.7,
    "image": "https://images.unsplash.com/photo-1550000000043?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 43,
    "restaurantId": 7,
    "restaurantName": "Restaurant 7 - Arabic",
    "name": "Delicious Desserts 4",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 79",
    "priceValue": 79,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1550000000044?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 44,
    "restaurantId": 7,
    "restaurantName": "Restaurant 7 - Arabic",
    "name": "Delicious Pizza 5",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 21",
    "priceValue": 21,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1550000000045?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 45,
    "restaurantId": 8,
    "restaurantName": "Restaurant 8 - Arabic",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 46,
    "restaurantId": 8,
    "restaurantName": "Restaurant 8 - Arabic",
    "name": "Delicious Appetizers 1",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 45",
    "priceValue": 45,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550000000047?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 47,
    "restaurantId": 8,
    "restaurantName": "Restaurant 8 - Arabic",
    "name": "Delicious Salads 2",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 71",
    "priceValue": 71,
    "rating": 3.6,
    "image": "https://images.unsplash.com/photo-1550000000048?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 48,
    "restaurantId": 8,
    "restaurantName": "Restaurant 8 - Arabic",
    "name": "Delicious Salads 3",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 66",
    "priceValue": 66,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1550000000049?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 49,
    "restaurantId": 8,
    "restaurantName": "Restaurant 8 - Arabic",
    "name": "Delicious Drinks 4",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 77",
    "priceValue": 77,
    "rating": 3.5,
    "image": "https://images.unsplash.com/photo-1550000000050?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 50,
    "restaurantId": 8,
    "restaurantName": "Restaurant 8 - Arabic",
    "name": "Delicious Burgers 5",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 84",
    "priceValue": 84,
    "rating": 3.9,
    "image": "https://images.unsplash.com/photo-1550000000051?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 51,
    "restaurantId": 9,
    "restaurantName": "Restaurant 9 - Chinese",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 52,
    "restaurantId": 9,
    "restaurantName": "Restaurant 9 - Chinese",
    "name": "Delicious Main Course 1",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 87",
    "priceValue": 87,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1550000000053?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 53,
    "restaurantId": 9,
    "restaurantName": "Restaurant 9 - Chinese",
    "name": "Delicious Main Course 2",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 26",
    "priceValue": 26,
    "rating": 4,
    "image": "https://images.unsplash.com/photo-1550000000054?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 54,
    "restaurantId": 9,
    "restaurantName": "Restaurant 9 - Chinese",
    "name": "Delicious Biriyani 3",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 23",
    "priceValue": 23,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000055?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 55,
    "restaurantId": 9,
    "restaurantName": "Restaurant 9 - Chinese",
    "name": "Delicious Appetizers 4",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 92",
    "priceValue": 92,
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1550000000056?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 56,
    "restaurantId": 9,
    "restaurantName": "Restaurant 9 - Chinese",
    "name": "Delicious Salads 5",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 54",
    "priceValue": 54,
    "rating": 3.6,
    "image": "https://images.unsplash.com/photo-1550000000057?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 57,
    "restaurantId": 10,
    "restaurantName": "Restaurant 10 - Healthy",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 58,
    "restaurantId": 10,
    "restaurantName": "Restaurant 10 - Healthy",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 59,
    "restaurantId": 10,
    "restaurantName": "Restaurant 10 - Healthy",
    "name": "Delicious Desserts 1",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 62",
    "priceValue": 62,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000060?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 60,
    "restaurantId": 10,
    "restaurantName": "Restaurant 10 - Healthy",
    "name": "Delicious Beverages 2",
    "category": "BEVERAGES",
    "desc": "A wonderful beverages made with fresh ingredients.",
    "price": "SR 33",
    "priceValue": 33,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1550000000061?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 61,
    "restaurantId": 10,
    "restaurantName": "Restaurant 10 - Healthy",
    "name": "Delicious Main Course 3",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 72",
    "priceValue": 72,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1550000000062?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 62,
    "restaurantId": 10,
    "restaurantName": "Restaurant 10 - Healthy",
    "name": "Delicious Desserts 4",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 42",
    "priceValue": 42,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000063?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 63,
    "restaurantId": 10,
    "restaurantName": "Restaurant 10 - Healthy",
    "name": "Delicious Beverages 5",
    "category": "BEVERAGES",
    "desc": "A wonderful beverages made with fresh ingredients.",
    "price": "SR 36",
    "priceValue": 36,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1550000000064?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 64,
    "restaurantId": 11,
    "restaurantName": "Restaurant 11 - Chinese",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 65,
    "restaurantId": 11,
    "restaurantName": "Restaurant 11 - Chinese",
    "name": "Delicious Beverages 1",
    "category": "BEVERAGES",
    "desc": "A wonderful beverages made with fresh ingredients.",
    "price": "SR 23",
    "priceValue": 23,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1550000000066?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 66,
    "restaurantId": 11,
    "restaurantName": "Restaurant 11 - Chinese",
    "name": "Delicious Biriyani 2",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 74",
    "priceValue": 74,
    "rating": 3.9,
    "image": "https://images.unsplash.com/photo-1550000000067?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 67,
    "restaurantId": 11,
    "restaurantName": "Restaurant 11 - Chinese",
    "name": "Delicious Desserts 3",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 21",
    "priceValue": 21,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1550000000068?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 68,
    "restaurantId": 11,
    "restaurantName": "Restaurant 11 - Chinese",
    "name": "Delicious Appetizers 4",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 65",
    "priceValue": 65,
    "rating": 4,
    "image": "https://images.unsplash.com/photo-1550000000069?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 69,
    "restaurantId": 11,
    "restaurantName": "Restaurant 11 - Chinese",
    "name": "Delicious Appetizers 5",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 94",
    "priceValue": 94,
    "rating": 3.5,
    "image": "https://images.unsplash.com/photo-1550000000070?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 70,
    "restaurantId": 12,
    "restaurantName": "Restaurant 12 - Arabic",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 71,
    "restaurantId": 12,
    "restaurantName": "Restaurant 12 - Arabic",
    "name": "Delicious Drinks 1",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 57",
    "priceValue": 57,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1550000000072?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 72,
    "restaurantId": 12,
    "restaurantName": "Restaurant 12 - Arabic",
    "name": "Delicious Main Course 2",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 16",
    "priceValue": 16,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550000000073?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 73,
    "restaurantId": 12,
    "restaurantName": "Restaurant 12 - Arabic",
    "name": "Delicious Beverages 3",
    "category": "BEVERAGES",
    "desc": "A wonderful beverages made with fresh ingredients.",
    "price": "SR 87",
    "priceValue": 87,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550000000074?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 74,
    "restaurantId": 12,
    "restaurantName": "Restaurant 12 - Arabic",
    "name": "Delicious Drinks 4",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 19",
    "priceValue": 19,
    "rating": 3.6,
    "image": "https://images.unsplash.com/photo-1550000000075?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 75,
    "restaurantId": 12,
    "restaurantName": "Restaurant 12 - Arabic",
    "name": "Delicious Pizza 5",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 91",
    "priceValue": 91,
    "rating": 3.8,
    "image": "https://images.unsplash.com/photo-1550000000076?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 76,
    "restaurantId": 13,
    "restaurantName": "Restaurant 13 - Indian",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 77,
    "restaurantId": 13,
    "restaurantName": "Restaurant 13 - Indian",
    "name": "Delicious Desserts 1",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 50",
    "priceValue": 50,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1550000000078?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 78,
    "restaurantId": 13,
    "restaurantName": "Restaurant 13 - Indian",
    "name": "Delicious Biriyani 2",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 21",
    "priceValue": 21,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1550000000079?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 79,
    "restaurantId": 13,
    "restaurantName": "Restaurant 13 - Indian",
    "name": "Delicious Beverages 3",
    "category": "BEVERAGES",
    "desc": "A wonderful beverages made with fresh ingredients.",
    "price": "SR 87",
    "priceValue": 87,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1550000000080?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 80,
    "restaurantId": 13,
    "restaurantName": "Restaurant 13 - Indian",
    "name": "Delicious Burgers 4",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 58",
    "priceValue": 58,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1550000000081?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 81,
    "restaurantId": 13,
    "restaurantName": "Restaurant 13 - Indian",
    "name": "Delicious Pizza 5",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 62",
    "priceValue": 62,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1550000000082?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 82,
    "restaurantId": 14,
    "restaurantName": "Restaurant 14 - Arabic",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 83,
    "restaurantId": 14,
    "restaurantName": "Restaurant 14 - Arabic",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 84,
    "restaurantId": 14,
    "restaurantName": "Restaurant 14 - Arabic",
    "name": "Delicious Pizza 1",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 65",
    "priceValue": 65,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1550000000085?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 85,
    "restaurantId": 14,
    "restaurantName": "Restaurant 14 - Arabic",
    "name": "Delicious Drinks 2",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 18",
    "priceValue": 18,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1550000000086?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 86,
    "restaurantId": 14,
    "restaurantName": "Restaurant 14 - Arabic",
    "name": "Delicious Pizza 3",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 61",
    "priceValue": 61,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1550000000087?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 87,
    "restaurantId": 14,
    "restaurantName": "Restaurant 14 - Arabic",
    "name": "Delicious Drinks 4",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 68",
    "priceValue": 68,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550000000088?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 88,
    "restaurantId": 14,
    "restaurantName": "Restaurant 14 - Arabic",
    "name": "Delicious Drinks 5",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 82",
    "priceValue": 82,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000089?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 89,
    "restaurantId": 15,
    "restaurantName": "Restaurant 15 - Healthy",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 90,
    "restaurantId": 15,
    "restaurantName": "Restaurant 15 - Healthy",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 91,
    "restaurantId": 15,
    "restaurantName": "Restaurant 15 - Healthy",
    "name": "Delicious Pizza 1",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 33",
    "priceValue": 33,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000092?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 92,
    "restaurantId": 15,
    "restaurantName": "Restaurant 15 - Healthy",
    "name": "Delicious Burgers 2",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 76",
    "priceValue": 76,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1550000000093?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 93,
    "restaurantId": 15,
    "restaurantName": "Restaurant 15 - Healthy",
    "name": "Delicious Main Course 3",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 86",
    "priceValue": 86,
    "rating": 3.8,
    "image": "https://images.unsplash.com/photo-1550000000094?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 94,
    "restaurantId": 15,
    "restaurantName": "Restaurant 15 - Healthy",
    "name": "Delicious Desserts 4",
    "category": "DESSERTS",
    "desc": "A wonderful desserts made with fresh ingredients.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000095?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 95,
    "restaurantId": 15,
    "restaurantName": "Restaurant 15 - Healthy",
    "name": "Delicious Pizza 5",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 56",
    "priceValue": 56,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1550000000096?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 96,
    "restaurantId": 16,
    "restaurantName": "Restaurant 16 - Healthy",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 97,
    "restaurantId": 16,
    "restaurantName": "Restaurant 16 - Healthy",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 98,
    "restaurantId": 16,
    "restaurantName": "Restaurant 16 - Healthy",
    "name": "Delicious Appetizers 1",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 42",
    "priceValue": 42,
    "rating": 3.9,
    "image": "https://images.unsplash.com/photo-1550000000099?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 99,
    "restaurantId": 16,
    "restaurantName": "Restaurant 16 - Healthy",
    "name": "Delicious Burgers 2",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 20",
    "priceValue": 20,
    "rating": 3.7,
    "image": "https://images.unsplash.com/photo-1550000000100?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 100,
    "restaurantId": 16,
    "restaurantName": "Restaurant 16 - Healthy",
    "name": "Delicious Salads 3",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 85",
    "priceValue": 85,
    "rating": 3.6,
    "image": "https://images.unsplash.com/photo-1550000000101?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 101,
    "restaurantId": 16,
    "restaurantName": "Restaurant 16 - Healthy",
    "name": "Delicious Biriyani 4",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 28",
    "priceValue": 28,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1550000000102?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 102,
    "restaurantId": 16,
    "restaurantName": "Restaurant 16 - Healthy",
    "name": "Delicious Biriyani 5",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 64",
    "priceValue": 64,
    "rating": 4,
    "image": "https://images.unsplash.com/photo-1550000000103?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  },
  {
    "id": 103,
    "restaurantId": 17,
    "restaurantName": "Restaurant 17 - Italian",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 104,
    "restaurantId": 17,
    "restaurantName": "Restaurant 17 - Italian",
    "name": "Delicious Biriyani 1",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 67",
    "priceValue": 67,
    "rating": 3.7,
    "image": "https://images.unsplash.com/photo-1550000000105?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 105,
    "restaurantId": 17,
    "restaurantName": "Restaurant 17 - Italian",
    "name": "Delicious Beverages 2",
    "category": "BEVERAGES",
    "desc": "A wonderful beverages made with fresh ingredients.",
    "price": "SR 50",
    "priceValue": 50,
    "rating": 3.5,
    "image": "https://images.unsplash.com/photo-1550000000106?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 106,
    "restaurantId": 17,
    "restaurantName": "Restaurant 17 - Italian",
    "name": "Delicious Pizza 3",
    "category": "PIZZA",
    "desc": "A wonderful pizza made with fresh ingredients.",
    "price": "SR 23",
    "priceValue": 23,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1550000000107?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Gluten-Free",
      "Popular"
    ]
  },
  {
    "id": 107,
    "restaurantId": 17,
    "restaurantName": "Restaurant 17 - Italian",
    "name": "Delicious Drinks 4",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 80",
    "priceValue": 80,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550000000108?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 108,
    "restaurantId": 17,
    "restaurantName": "Restaurant 17 - Italian",
    "name": "Delicious Main Course 5",
    "category": "MAIN COURSE",
    "desc": "A wonderful main course made with fresh ingredients.",
    "price": "SR 78",
    "priceValue": 78,
    "rating": 4,
    "image": "https://images.unsplash.com/photo-1550000000109?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 109,
    "restaurantId": 18,
    "restaurantName": "Restaurant 18 - Arabic",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 110,
    "restaurantId": 18,
    "restaurantName": "Restaurant 18 - Arabic",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 111,
    "restaurantId": 18,
    "restaurantName": "Restaurant 18 - Arabic",
    "name": "Delicious Burgers 1",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 92",
    "priceValue": 92,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1550000000112?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 112,
    "restaurantId": 18,
    "restaurantName": "Restaurant 18 - Arabic",
    "name": "Delicious Appetizers 2",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 56",
    "priceValue": 56,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000113?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 113,
    "restaurantId": 18,
    "restaurantName": "Restaurant 18 - Arabic",
    "name": "Delicious Drinks 3",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 64",
    "priceValue": 64,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1550000000114?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 114,
    "restaurantId": 18,
    "restaurantName": "Restaurant 18 - Arabic",
    "name": "Delicious Appetizers 4",
    "category": "APPETIZERS",
    "desc": "A wonderful appetizers made with fresh ingredients.",
    "price": "SR 23",
    "priceValue": 23,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1550000000115?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 115,
    "restaurantId": 18,
    "restaurantName": "Restaurant 18 - Arabic",
    "name": "Delicious Biriyani 5",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 37",
    "priceValue": 37,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1550000000116?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 116,
    "restaurantId": 19,
    "restaurantName": "Restaurant 19 - Indian",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 117,
    "restaurantId": 19,
    "restaurantName": "Restaurant 19 - Indian",
    "name": "Delicious Drinks 1",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 44",
    "priceValue": 44,
    "rating": 3.6,
    "image": "https://images.unsplash.com/photo-1550000000118?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegan",
      "Popular"
    ]
  },
  {
    "id": 118,
    "restaurantId": 19,
    "restaurantName": "Restaurant 19 - Indian",
    "name": "Delicious Burgers 2",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 64",
    "priceValue": 64,
    "rating": 4,
    "image": "https://images.unsplash.com/photo-1550000000119?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 119,
    "restaurantId": 19,
    "restaurantName": "Restaurant 19 - Indian",
    "name": "Delicious Burgers 3",
    "category": "BURGERS",
    "desc": "A wonderful burgers made with fresh ingredients.",
    "price": "SR 76",
    "priceValue": 76,
    "rating": 3.5,
    "image": "https://images.unsplash.com/photo-1550000000120?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Vegetarian",
      "Popular"
    ]
  },
  {
    "id": 120,
    "restaurantId": 19,
    "restaurantName": "Restaurant 19 - Indian",
    "name": "Delicious Salads 4",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 69",
    "priceValue": 69,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000121?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 121,
    "restaurantId": 19,
    "restaurantName": "Restaurant 19 - Indian",
    "name": "Delicious Beverages 5",
    "category": "BEVERAGES",
    "desc": "A wonderful beverages made with fresh ingredients.",
    "price": "SR 55",
    "priceValue": 55,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1550000000122?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Halal",
      "Popular"
    ]
  },
  {
    "id": 122,
    "restaurantId": 20,
    "restaurantName": "Restaurant 20 - Chinese",
    "name": "Chicken Biriyani",
    "category": "MAIN COURSE",
    "desc": "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    "price": "SR 35",
    "priceValue": 35,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Popular",
      "Spicy",
      "Indian"
    ]
  },
  {
    "id": 123,
    "restaurantId": 20,
    "restaurantName": "Restaurant 20 - Chinese",
    "name": "Mint Lemonade",
    "category": "DRINKS",
    "desc": "Refreshing mint and lemon cold drink.",
    "price": "SR 15",
    "priceValue": 15,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Beverage"
    ]
  },
  {
    "id": 124,
    "restaurantId": 20,
    "restaurantName": "Restaurant 20 - Chinese",
    "name": "Delicious Biriyani 1",
    "category": "BIRIYANI",
    "desc": "A wonderful biriyani made with fresh ingredients.",
    "price": "SR 23",
    "priceValue": 23,
    "rating": 4.1,
    "image": "https://images.unsplash.com/photo-1550000000125?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 125,
    "restaurantId": 20,
    "restaurantName": "Restaurant 20 - Chinese",
    "name": "Delicious Drinks 2",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 91",
    "priceValue": 91,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1550000000126?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Healthy",
      "Popular"
    ]
  },
  {
    "id": 126,
    "restaurantId": 20,
    "restaurantName": "Restaurant 20 - Chinese",
    "name": "Delicious Salads 3",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 42",
    "priceValue": 42,
    "rating": 3.8,
    "image": "https://images.unsplash.com/photo-1550000000127?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 127,
    "restaurantId": 20,
    "restaurantName": "Restaurant 20 - Chinese",
    "name": "Delicious Salads 4",
    "category": "SALADS",
    "desc": "A wonderful salads made with fresh ingredients.",
    "price": "SR 94",
    "priceValue": 94,
    "rating": 3.9,
    "image": "https://images.unsplash.com/photo-1550000000128?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Less spicy",
      "Popular"
    ]
  },
  {
    "id": 128,
    "restaurantId": 20,
    "restaurantName": "Restaurant 20 - Chinese",
    "name": "Delicious Drinks 5",
    "category": "DRINKS",
    "desc": "A wonderful drinks made with fresh ingredients.",
    "price": "SR 71",
    "priceValue": 71,
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1550000000129?auto=format&fit=crop&q=80&w=800",
    "tags": [
      "Keto",
      "Popular"
    ]
  }
];
const offersData = [
  {
    "id": 1,
    "discount": "30% OFF",
    "restaurantId": 1,
    "cta": "VIEW OFFER",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 2,
    "discount": "BUY 1 GET 1",
    "restaurantId": 2,
    "cta": "VIEW DEAL",
    "image": "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800"
  }
];
const userProfile = {
  "name": "Ahmed Ali",
  "phone": "+966 501234567",
  "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
};
const categories = [
  {
    "id": 1,
    "name": "Burger",
    "icon": "🍔"
  },
  {
    "id": 2,
    "name": "Pizza",
    "icon": "🍕"
  },
  {
    "id": 3,
    "name": "Healthy",
    "icon": "🥗"
  },
  {
    "id": 4,
    "name": "Sushi",
    "icon": "🍣"
  },
  {
    "id": 5,
    "name": "Dessert",
    "icon": "🍰"
  },
  {
    "id": 6,
    "name": "Coffee",
    "icon": "☕"
  }
];

module.exports = {
  collections,
  restaurants,
  foods,
  offersData,
  userProfile,
  categories
};
