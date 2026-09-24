const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

// Replace all variations of Kerala Samawar Tea
content = content.replace(/name:\s*'Kerala samawar tea'([^]+?)image:\s*''/gi, 'name: \'Kerala samawar tea\'$1image: \'/images/kerala_samawar_tea.jpg\'');
// Also search for "Kerala Samovar Tea" just in case of spelling variations
content = content.replace(/name:\s*'Kerala Samovar Tea'([^]+?)image:\s*''/gi, 'name: \'Kerala Samovar Tea\'$1image: \'/images/kerala_samawar_tea.jpg\'');

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully.');
