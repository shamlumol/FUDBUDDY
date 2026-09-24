const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\57496255-3911-4ba8-b421-18ac75fb6478\\.user_uploaded';
const destDir = 'c:\\Users\\HP\\Desktop\\my file\\real-pro\\fudbuddy\\client\\public\\images';

const mappings = {
  'media_1790271340562.png': 'saudi_champagne.png',
  'media_1790271407182.png': 'gulab_jamun_ice_cream.png',
  'media_1790271430324.jpg': 'gulab_jamun.jpg',
  'media_1790271447680.png': 'falloda.png',
  'media_1790271464327.png': 'ice_cream.png',
  'media_1790271481058.png': 'fruit_salad_ice_cream.png'
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
