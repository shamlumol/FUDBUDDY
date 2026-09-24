const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790273723645.jpg': 'hot_n_sour_prawn_soup.jpg',
  'media_1790273731926.png': 'hot_n_sour_chicken_soup.png',
  'media_1790273738297.jpg': 'hot_n_sour_vegetable_soup.jpg'
};

for (const [srcFile, destFile] of Object.entries(mappings)) {
  const srcPath = path.join(srcDir, srcFile);
  const destPath = path.join(destDir, destFile);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcFile} to ${destFile}`);
  } else {
    console.log(`Could not find ${srcFile}`);
  }
}

// Update DB
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Hot \\'N Sour Prawn Soup'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Hot \\\'N Sour Prawn Soup\'$1image: \'/images/hot_n_sour_prawn_soup.jpg\'' },
  { match: /name:\s*'Hot \\'N Sour Chicken Soup'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Hot \\\'N Sour Chicken Soup\'$1image: \'/images/hot_n_sour_chicken_soup.png\'' },
  { match: /name:\s*'Hot \\'N Sour Vegetable Soup'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Hot \\\'N Sour Vegetable Soup\'$1image: \'/images/hot_n_sour_vegetable_soup.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with soup images.');
