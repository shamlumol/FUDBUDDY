const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Vada Set'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Vada Set\'$1image: \'/images/vada_set.png\'' },
  { match: /name:\s*'Puttu Chappathi Porotta Combo'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Puttu Chappathi Porotta Combo\'$1image: \'/images/puttu_chappathi_porotta_combo.jpg\'' },
  { match: /name:\s*'Poori Baji'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Poori Baji\'$1image: \'/images/poori_baji.jpg\'' },
  { match: /name:\s*'Aval Banana'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Aval Banana\'$1image: \'/images/aval_banana.jpg\'' },
  { match: /name:\s*'Steamed Banana'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Steamed Banana\'$1image: \'/images/steamed_banana.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
