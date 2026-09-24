const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Avoli pollichathu',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Avoli pollichathu\',$1image: \'/images/avoli_pollichathu.jpg\'' },
  { match: /name:\s*'Fish Pollichathu with Choices',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Fish Pollichathu with Choices\',$1image: \'/images/avoli_pollichathu.jpg\'' },
  { match: /name:\s*'Chicken Peshwari Biriyani',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Chicken Peshwari Biriyani\',$1image: \'/images/chicken_peshwari_biriyani.jpg\'' },
  { match: /name:\s*'Pothum Kal',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Pothum Kal\',$1image: \'/images/pothum_kal.jpg\'' },
  { match: /name:\s*'Kunji Kozhi Fry',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Kunji Kozhi Fry\',$1image: \'/images/kunji_kozhi_fry.jpg\'' },
  { match: /name:\s*'Paal Kappa Beef',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Paal Kappa Beef\',$1image: \'/images/paal_kappa_beef.jpg\'' }
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
