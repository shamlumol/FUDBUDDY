const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790280171588.jpg': 'mandi_meat.jpg',
  'media_1790280181666.jpg': 'madhbi_chicken.jpg',
  'media_1790280210822.jpg': 'meat_kebab.jpg',
  'media_1790280275011.jpg': 'mandi_goat.jpg',
  'media_1790280294378.jpg': 'mandi_chicken_saudi_rice.jpg'
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

let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

const updates = [
  { match: /name:\s*'Mandi Meat'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Mandi Meat\'$1image: \'/images/mandi_meat.jpg\'' },
  { match: /name:\s*'Madhbi Chicken'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Madhbi Chicken\'$1image: \'/images/madhbi_chicken.jpg\'' },
  { match: /name:\s*'Meat Kebab'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Meat Kebab\'$1image: \'/images/meat_kebab.jpg\'' },
  { match: /name:\s*'Mandi Goat'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Mandi Goat\'$1image: \'/images/mandi_goat.jpg\'' },
  { match: /name:\s*'Mandi Chicken with Saudi Rice'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Mandi Chicken with Saudi Rice\'$1image: \'/images/mandi_chicken_saudi_rice.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with Mandi items.');
