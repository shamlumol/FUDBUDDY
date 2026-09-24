const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

// Replace all variations of Beef Palli Curry
content = content.replace(/name:\s*'Beef Palli Curry'([^]+?)image:\s*''/gi, 'name: \'Beef Palli Curry\'$1image: \'/images/beef_palli_curry.jpg\'');

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
