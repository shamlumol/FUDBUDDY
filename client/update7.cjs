const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Beef Varattiyathu',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Beef Varattiyathu\',$1image: \'/images/kerala_beef_varattu.jpg\'' },
  { match: /name:\s*'ARUSHA FISH GRILLED',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'ARUSHA FISH GRILLED\',$1image: \'/images/arusha_fish_grilled.png\'' },
  { match: /name:\s*'HAMOUR FISH GRILLED',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'HAMOUR FISH GRILLED\',$1image: \'/images/arusha_fish_grilled.png\'' }
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
