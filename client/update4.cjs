const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Spicy Beef Mandi',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Spicy Beef Mandi\',$1image: \'/images/spicy_beef_mandi.jpg\'' },
  { match: /name:\s*'Peri-Peri Grilled Sea Bream',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Peri-Peri Grilled Sea Bream\',$1image: \'/images/peri_peri_grilled_sea_bream.jpg\'' },
  { match: /name:\s*'Peri-Peri Charcoal Chicken',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Peri-Peri Charcoal Chicken\',$1image: \'/images/peri_peri_charcoal_chicken.jpg\'' },
  { match: /name:\s*'Premium Kanji',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Premium Kanji\',$1image: \'/images/premium_kanji.jpg\'' }
];

updates.forEach(u => {
  if(u.match.test(content)) {
     content = content.replace(u.match, u.replacement);
     console.log('Replaced', u.match);
  } else {
     console.log('Not found:', u.match);
  }
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
