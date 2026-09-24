const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790277691824.jpg': 'pepsi_small.jpg',
  'media_1790277710621.png': 'laban_small.png',
  'media_1790277728709.png': 'water_bottle_small.png'
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
  { match: /name:\s*'Pepsi \(Small\)'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Pepsi (Small)\'$1image: \'/images/pepsi_small.jpg\'' },
  { match: /name:\s*'Laban \(Small\)'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Laban (Small)\'$1image: \'/images/laban_small.png\'' },
  { match: /name:\s*'Water'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Water\'$1image: \'/images/water_bottle_small.png\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with beverages.');
