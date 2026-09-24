const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Nool Porotta'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Nool Porotta\'$1image: \'/images/nool_porotta.jpg\'' },
  { match: /name:\s*'Appam'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Appam\'$1image: \'/images/appam.jpg\'' },
  { match: /name:\s*'Tender Chicken Bites'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Tender Chicken Bites\'$1image: \'/images/tender_chicken_bites.jpg\'' },
  { match: /name:\s*'Chicken Nuggets'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Chicken Nuggets\'$1image: \'/images/chicken_nuggets.png\'' },
  { match: /name:\s*'Popcorn Chicken'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Popcorn Chicken\'$1image: \'/images/popcorn_chicken.png\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
