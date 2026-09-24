const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Fruit Salad with Ice Cream'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Fruit Salad with Ice Cream\'$1image: \'/images/fruit_salad_ice_cream.jpg\'' },
  { match: /name:\s*'Ice Cream'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Ice Cream\'$1image: \'/images/ice_cream.jpg\'' },
  { match: /name:\s*'Falloda'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Falloda\'$1image: \'/images/falloda.jpg\'' },
  { match: /name:\s*'Gulab Jamun'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Gulab Jamun\'$1image: \'/images/gulab_jamun.jpg\'' },
  { match: /name:\s*'Gulab Jamun with Ice Cream'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Gulab Jamun with Ice Cream\'$1image: \'/images/gulab_jamun_ice_cream.jpg\'' },
  { match: /name:\s*'Saudi Champagne'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Saudi Champagne\'$1image: \'/images/saudi_champagne.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with dessert images.');
