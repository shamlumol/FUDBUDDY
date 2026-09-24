const fs = require('fs');

let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Chicken Kadai',\s*desc:\s*'A delicious serving of Chicken Kadai available at Redtable Restaurant.',([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Chicken Kadai\',\n    desc: \'A delicious serving of Chicken Kadai available at Redtable Restaurant.\',$1image: \'/images/chicken_kadai.jpg\'' },
  { match: /name:\s*'Chicken Tikka Masala',\s*desc:\s*'A delicious serving of Chicken Tikka Masala available at Redtable Restaurant.',([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Chicken Tikka Masala\',\n    desc: \'A delicious serving of Chicken Tikka Masala available at Redtable Restaurant.\',$1image: \'/images/chicken_tikka_masala.jpg\'' },
  { match: /name:\s*'BUTTER CHICKEN'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'BUTTER CHICKEN\'$1image: \'/images/butter_chicken.jpg\'' },
  { match: /name:\s*'Butter Chicken',\s*desc:\s*'A delicious serving of Butter Chicken available at Redtable Restaurant.',([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Butter Chicken\',\n    desc: \'A delicious serving of Butter Chicken available at Redtable Restaurant.\',$1image: \'/images/butter_chicken.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully for Redtable Restaurant items.');
