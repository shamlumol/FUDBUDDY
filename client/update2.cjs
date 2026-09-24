const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Beef Biriyani \(Malabar Poth Biryani\)',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Beef Biriyani (Malabar Poth Biryani)\',$1image: \'/images/beef_biriyani.jpg\'' },
  { match: /name:\s*'Leghorn Chicken Biryani',([\s\S]*?)image:\s*''/i, replacement: 'name: \'Leghorn Chicken Biryani\',$1image: \'/images/leghorn_chicken_biryani.jpg\'' },
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
