const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790276134504.jpg': 'chicken_madghout.jpg',
  'media_1790276167913.jpg': 'hashi_madghout.jpg',
  'media_1790276174585.jpg': 'hashi_for_one_person.jpg',
  'media_1790276196784.jpg': 'half_a_chicken_madghout.jpg',
  'media_1790276214112.jpg': 'moussaka.jpg'
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
  { match: /name:\s*'Chicken Madghout'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Chicken Madghout\'$1image: \'/images/chicken_madghout.jpg\'' },
  { match: /name:\s*'Hashi Madghout'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Hashi Madghout\'$1image: \'/images/hashi_madghout.jpg\'' },
  { match: /name:\s*'Hashi For One Person'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Hashi For One Person\'$1image: \'/images/hashi_for_one_person.jpg\'' },
  { match: /name:\s*'Half A Chicken Madghout'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Half A Chicken Madghout\'$1image: \'/images/half_a_chicken_madghout.jpg\'' },
  { match: /name:\s*'Moussaka'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Moussaka\'$1image: \'/images/moussaka.jpg\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with madghout and moussaka images.');
