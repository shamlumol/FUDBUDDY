const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Prawns 65'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Prawns 65\'$1image: \'/images/prawns_65.jpg\'' },
  { match: /name:\s*'Chicken Lollipop'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Chicken Lollipop\'$1image: \'/images/chicken_lollipop.jpg\'' },
  { match: /name:\s*'Murgh Malai Tikka'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Murgh Malai Tikka\'$1image: \'/images/murgh_malai_tikka.png\'' },
  { match: /name:\s*'Chicken Tikka'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Chicken Tikka\'$1image: \'/images/chicken_tikka.jpg\'' },
  { match: /name:\s*'Chicken 65'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Chicken 65\'$1image: \'/images/chicken_65_boneless.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
