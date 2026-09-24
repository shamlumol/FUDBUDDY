const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Chicken Tikka Masala',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Chicken Tikka Masala\',$1image: \'/images/chicken_tikka_masala.jpg\'' },
  { match: /name:\s*'Mutton Kadai',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Mutton Kadai\',$1image: \'/images/mutton_kadai.jpg\'' },
  { match: /name:\s*'Beef Varattu',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Beef Varattu\',$1image: \'/images/kerala_beef_varattu.jpg\'' },
  { match: /name:\s*'Kerala Beef Varattu \(Beef Varattiyathu\)',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Kerala Beef Varattu (Beef Varattiyathu)\',$1image: \'/images/kerala_beef_varattu.jpg\'' },
  { match: /name:\s*'Arusha Fish Grilled \(Hamour Grilled\)',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Arusha Fish Grilled (Hamour Grilled)\',$1image: \'/images/arusha_fish_grilled.png\'' },
  { match: /name:\s*'Fish Tawa Fry',([\s\S]*?)image:\s*'[^']*'/i, replacement: 'name: \'Fish Tawa Fry\',$1image: \'/images/fish_tawa_fry.jpg\'' }
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
