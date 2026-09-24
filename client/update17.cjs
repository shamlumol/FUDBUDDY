const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Curd Rice'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Curd Rice\'$1image: \'/images/curd_rice.png\'' },
  { match: /name:\s*'Bread Basket'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Bread Basket\'$1image: \'/images/bread_basket.jpg\'' },
  { match: /name:\s*'Garlic Naan'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Garlic Naan\'$1image: \'/images/garlic_naan.jpg\'' },
  { match: /name:\s*'Butter Naan'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Butter Naan\'$1image: \'/images/butter_naan.jpg\'' },
  { match: /name:\s*'Plain Naan'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Plain Naan\'$1image: \'/images/butter_naan.jpg\'' },
  { match: /name:\s*'Tandoori Roti'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Tandoori Roti\'$1image: \'/images/tandoori_roti.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
