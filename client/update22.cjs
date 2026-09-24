const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /image: '\/images\/saudi_champagne\.jpg'/g, replacement: 'image: \'/images/saudi_champagne.png\'' },
  { match: /image: '\/images\/gulab_jamun_ice_cream\.jpg'/g, replacement: 'image: \'/images/gulab_jamun_ice_cream.png\'' },
  { match: /image: '\/images\/falloda\.jpg'/g, replacement: 'image: \'/images/falloda.png\'' },
  { match: /image: '\/images\/ice_cream\.jpg'/g, replacement: 'image: \'/images/ice_cream.png\'' },
  { match: /image: '\/images\/fruit_salad_ice_cream\.jpg'/g, replacement: 'image: \'/images/fruit_salad_ice_cream.png\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with .png extensions.');
