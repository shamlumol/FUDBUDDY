const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'DUM CHICKEN BIRIYANI',([\s\S]*?)image:\s*''/i, replacement: 'name: \'DUM CHICKEN BIRIYANI\',$1image: \'/images/dum_chicken_biryani.jpg\'' },
  { match: /name:\s*'BEEF BIRIYANI \(MALABAR POTH BIRIYANI\)',([\s\S]*?)image:\s*''/i, replacement: 'name: \'BEEF BIRIYANI (MALABAR POTH BIRIYANI)\',$1image: \'/images/beef_biriyani.jpg\'' },
  { match: /name:\s*'MUTTON DUM BIRIYANI',([\s\S]*?)image:\s*''/i, replacement: 'name: \'MUTTON DUM BIRIYANI\',$1image: \'/images/mutton_dum_biryani.jpg\'' },
  { match: /name:\s*'LEGHORN CHICKEN BIRIYANI',([\s\S]*?)image:\s*''/i, replacement: 'name: \'LEGHORN CHICKEN BIRIYANI\',$1image: \'/images/leghorn_chicken_biryani.jpg\'' },
  { match: /name:\s*'KAADA PORICHATHU \(QUAIL FRY\)',([\s\S]*?)image:\s*''/i, replacement: 'name: \'KAADA PORICHATHU (QUAIL FRY)\',$1image: \'/images/kaada_porichathu.jpg\'' },
  { match: /name:\s*'DUM CHICKEN BIRYANI',([\s\S]*?)image:\s*''/i, replacement: 'name: \'DUM CHICKEN BIRIYANI\',$1image: \'/images/dum_chicken_biryani.jpg\'' },
  { match: /name:\s*'MUTTON DUM BIRYANI',([\s\S]*?)image:\s*''/i, replacement: 'name: \'MUTTON DUM BIRIYANI\',$1image: \'/images/mutton_dum_biryani.jpg\'' }
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
