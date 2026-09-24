const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790279221348.jpg': 'cucumber_with_yogurt.jpg',
  'media_1790279229286.jpg': 'spicy_salad_daqoos.jpg',
  'media_1790279254401.jpg': 'tahini.jpg'
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
  { match: /name:\s*'Cucumber with Yogurt'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Cucumber with Yogurt\'$1image: \'/images/cucumber_with_yogurt.jpg\'' },
  { match: /name:\s*'Spicy Salad \(Daqoos\)'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Spicy Salad (Daqoos)\'$1image: \'/images/spicy_salad_daqoos.jpg\'' },
  { match: /name:\s*'Tahini'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Tahini\'$1image: \'/images/tahini.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with sides.');
