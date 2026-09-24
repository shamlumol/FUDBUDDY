const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Malbriz Rice Bowls',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Malbriz Rice Bowls\',$1image: \'/images/malbriz_rice_bowls.jpg\'' },
  { match: /name:\s*'Evening Snacks',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Evening Snacks\',$1image: \'/images/evening_snacks.jpg\'' }
];

updates.forEach(u => {
  if(u.match.test(content)) {
     content = content.replace(u.match, u.replacement);
     console.log('Replaced', u.match);
  } else {
     console.log('Not found:', u.match);
  }
});

// Remove placeholder images
content = content.replace(/image:\s*'https:\/\/[^']+'/g, 'image: \'\'');

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
