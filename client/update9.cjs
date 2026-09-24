const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

// Replace all variations of Beef Biriyani
content = content.replace(/name:\s*'Beef Biriyani'([^]+?)image:\s*''/gi, 'name: \'Beef Biriyani\'$1image: \'/images/beef_biriyani.jpg\'');

// Replace all variations of Mutton Biriyani
content = content.replace(/name:\s*'Mutton Biriyani'([^]+?)image:\s*''/gi, 'name: \'Mutton Biriyani\'$1image: \'/images/mutton_dum_biryani.jpg\'');

// Replace Leghon Chicken Biriyani (spelling variation)
content = content.replace(/name:\s*'Leghon Chicken Biriyani'([^]+?)image:\s*''/gi, 'name: \'Leghon Chicken Biriyani\'$1image: \'/images/leghorn_chicken_biryani.jpg\'');

// Replace Casa Spcl Mutton Biriyani just in case
content = content.replace(/name:\s*'Casa Spcl Mutton Biriyani'([^]+?)image:\s*''/gi, 'name: \'Casa Spcl Mutton Biriyani\'$1image: \'/images/mutton_dum_biryani.jpg\'');

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
