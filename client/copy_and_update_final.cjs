const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790274852033.jpg': 'beef_dry_fry_bdf_new.jpg',
  'media_1790274859612.jpg': 'porotta_chicken_special.jpg',
  'media_1790274867056.jpg': 'idiyappam_duck_special.jpg',
  'media_1790274873683.png': 'thattu_dosa_beef_masala.png'
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
  { match: /name:\s*'Beef Dry Fry \( Bdf\)'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Beef Dry Fry ( Bdf)\'$1image: \'/images/beef_dry_fry_bdf_new.jpg\'' },
  { match: /name:\s*'Porotta with Chicken Special Curry'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Porotta with Chicken Special Curry\'$1image: \'/images/porotta_chicken_special.jpg\'' },
  { match: /name:\s*'Idiyappam with Duck Special'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Idiyappam with Duck Special\'$1image: \'/images/idiyappam_duck_special.jpg\'' },
  { match: /name:\s*'Thattu Dosa with Beef Masala'([^]+?)image:\s*'[^']*'/g, replacement: 'name: \'Thattu Dosa with Beef Masala\'$1image: \'/images/thattu_dosa_beef_masala.png\'' }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replacement);
});

fs.writeFileSync('./src/data/mockDatabase.js', content, 'utf-8');
console.log('Database updated successfully with final dish images.');
