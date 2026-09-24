const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790273040375.png': 'fruit_salad.png',
  'media_1790273058897.png': 'gad_bad.png',
  'media_1790273093952.jpg': 'chappathi_porotta_beef_curry.jpg',
  'media_1790273112277.jpg': 'rawa_upmave.jpg'
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
  { match: /name:\s*'Fruit Salad'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Fruit Salad\'$1image: \'/images/fruit_salad.png\'' },
  { match: /name:\s*'Gad Bad'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Gad Bad\'$1image: \'/images/gad_bad.png\'' },
  { match: /name:\s*'Chappathi - Porotta with Beef Curry'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Chappathi - Porotta with Beef Curry\'$1image: \'/images/chappathi_porotta_beef_curry.jpg\'' },
  { match: /name:\s*'Rawa Upmave'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Rawa Upmave\'$1image: \'/images/rawa_upmave.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with new images.');
