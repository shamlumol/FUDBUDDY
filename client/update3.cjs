const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Prawns Fry',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Prawns Fry\',$1image: \'/images/prawns_fry.jpg\'' },
  { match: /name:\s*'Beef Dry Fry \(BDF\)',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Beef Dry Fry (BDF)\',$1image: \'/images/beef_dry_fry_bdf.jpg\'' },
  { match: /name:\s*'Extra Side Dish Pack',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Extra Side Dish Pack\',$1image: \'/images/extra_side_dish_pack.jpg\'' },
  { match: /name:\s*'Peri-Peri Chicken Mandi',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Peri-Peri Chicken Mandi\',$1image: \'/images/peri_peri_chicken_mandi.jpg\'' },
  { match: /name:\s*'Creamy Chicken Mandi',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Creamy Chicken Mandi\',$1image: \'/images/creamy_chicken_mandi.jpg\'' }
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
