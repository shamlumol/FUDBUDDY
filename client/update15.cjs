const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Tossed Salad'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Tossed Salad\'$1image: \'/images/tossed_salad.png\'' },
  { match: /name:\s*'Olive Garden Salad'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Olive Garden Salad\'$1image: \'/images/olive_garden_salad.png\'' },
  { match: /name:\s*'Lettuce Green Salad'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Lettuce Green Salad\'$1image: \'/images/lettuce_green_salad.jpg\'' },
  { match: /name:\s*'Dragon Chicken'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Dragon Chicken\'$1image: \'/images/dragon_chicken.jpg\'' },
  { match: /name:\s*'Sizzling Chicken \/ Beef \/ Fish \/ Mutton'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Sizzling Chicken / Beef / Fish / Mutton\'$1image: \'/images/sizzling_platter.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
