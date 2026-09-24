const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Kids Mini Platter'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Kids Mini Platter\'$1image: \'/images/kids_mini_platter.png\'' },
  { match: /name:\s*'Butter Noodles With Chicken'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Butter Noodles With Chicken\'$1image: \'/images/butter_noodles_chicken.png\'' },
  { match: /name:\s*'Dosa'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Dosa\'$1image: \'/images/dosa.jpg\'' },
  { match: /name:\s*'Idly Set'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Idly Set\'$1image: \'/images/idly_set.jpg\'' },
  { match: /name:\s*'Puttu Pazham'([^]+?)image:\s*'[^']*'/gi, replacement: 'name: \'Puttu Pazham\'$1image: \'/images/puttu_pazham.png\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
