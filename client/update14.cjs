const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Sweet Corn Chicken Soup'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Sweet Corn Chicken Soup\'$1image: \'/images/sweet_corn_chicken_soup2.png\'' },
  { match: /name:\s*'Sweet Corn Vegetable Soup'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Sweet Corn Vegetable Soup\'$1image: \'/images/sweet_corn_veg_soup.png\'' },
  { match: /name:\s*'Sweet Corn Veg Soup'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Sweet Corn Veg Soup\'$1image: \'/images/sweet_corn_veg_soup.png\'' },
  { match: /name:\s*'Chicken Manchow Soup'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Chicken Manchow Soup\'$1image: \'/images/chicken_manchow_soup.jpg\'' },
  { match: /name:\s*'Sweet Corn Prawn Soup'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Sweet Corn Prawn Soup\'$1image: \'/images/prawns_manchow_soup.jpg\'' },
  { match: /name:\s*'Prawns Manchow Soup'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Prawns Manchow Soup\'$1image: \'/images/prawns_manchow_soup.jpg\'' },
  { match: /name:\s*'Prawn Manchow Soup'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Prawn Manchow Soup\'$1image: \'/images/prawns_manchow_soup.jpg\'' },
  { match: /name:\s*'Caesar Salad'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Caesar Salad\'$1image: \'/images/caesar_salad.png\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
