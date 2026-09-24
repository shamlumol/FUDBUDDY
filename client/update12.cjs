const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

// Replace all variations of Payyoli Chicken Fry
content = content.replace(/name:\s*'Payyoli Chicken Fry'([^]+?)image:\s*''/gi, 'name: \'Payyoli Chicken Fry\'$1image: \'/images/payyoli_chicken_fry.jpg\'');

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
