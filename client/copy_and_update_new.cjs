const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790274752750.jpg': 'duck_kurumulak.jpg',
  'media_1790274759990.jpg': 'porotta_beef_kizhi.jpg',
  'media_1790274766486.jpg': 'poricha_kozhi.jpg',
  'media_1790274775175.jpg': 'tawa_grilled_fish.jpg',
  'media_1790274782974.jpg': 'beef_palli_palayam.jpg'
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
  { match: /name:\s*'Duck Kurumulak'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Duck Kurumulak\'$1image: \'/images/duck_kurumulak.jpg\'' },
  { match: /name:\s*'Porotta Beef Kizhi'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Porotta Beef Kizhi\'$1image: \'/images/porotta_beef_kizhi.jpg\'' },
  { match: /name:\s*'Poricha Kozhi'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Poricha Kozhi\'$1image: \'/images/poricha_kozhi.jpg\'' },
  { match: /name:\s*'Tawa Grilled Fish'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Tawa Grilled Fish\'$1image: \'/images/tawa_grilled_fish.jpg\'' },
  { match: /name:\s*'Beef Palli Palayam'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Beef Palli Palayam\'$1image: \'/images/beef_palli_palayam.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with new dish images.');
