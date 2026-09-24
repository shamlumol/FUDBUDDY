const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

// Replace all variations of Sweet Corn Chicken Soup
content = content.replace(/name:\s*'Sweet Corn Chicken Soup'([^]+?)image:\s*''/gi, 'name: \'Sweet Corn Chicken Soup\'$1image: \'/images/sweet_corn_soup.jpg\'');

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
