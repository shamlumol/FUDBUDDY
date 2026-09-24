const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790276700155.jpg': 'moussaka_combo_platter.jpg',
  'media_1790276716492.jpg': 'yogurt_box.jpg',
  'media_1790276740014.png': 'kunafa_cream.png',
  'media_1790277025024.jpg': 'rafif_desserts.jpg',
  'media_1790277043222.png': 'sundos_desserts.png'
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
  { match: /name:\s*'Moussaka'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Moussaka\'$1image: \'/images/moussaka_combo_platter.jpg\'' },
  { match: /name:\s*'Yogurt Box'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Yogurt Box\'$1image: \'/images/yogurt_box.jpg\'' },
  { match: /name:\s*'Kunafa Cream'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Kunafa Cream\'$1image: \'/images/kunafa_cream.png\'' },
  { match: /name:\s*'Rafif Desserts'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Rafif Desserts\'$1image: \'/images/rafif_desserts.jpg\'' },
  { match: /name:\s*'Sundos Desserts'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Sundos Desserts\'$1image: \'/images/sundos_desserts.png\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with desserts and platters.');
