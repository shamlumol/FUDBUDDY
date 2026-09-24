const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790280445049.png': 'asfani_juice.png',
  'media_1790280465473.jpg': 'umm_ali_nuts.jpg',
  'media_1790280487585.jpg': 'pistachio_kunafa.jpg',
  'media_1790280514483.jpg': 'hummus.jpg'
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
  { match: /name:\s*'Asfani Juice'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Asfani Juice\'$1image: \'/images/asfani_juice.png\'' },
  { match: /name:\s*'Umm Ali with Nuts'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Umm Ali with Nuts\'$1image: \'/images/umm_ali_nuts.jpg\'' },
  { match: /name:\s*'Pistachio Kunafa'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Pistachio Kunafa\'$1image: \'/images/pistachio_kunafa.jpg\'' },
  { match: /name:\s*'Hummus'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Hummus\'$1image: \'/images/hummus.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with extra items.');
