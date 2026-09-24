const fs = require('fs');
let content = fs.readFileSync('./src/data/mockDatabase.js', 'utf-8');

content = content.replace(/desc:\s*'[^']+'/g, (match, offset, string) => {
  const substr = string.substring(Math.max(0, offset - 400), offset);
  const nameMatch = substr.match(/name:\s*'([^']+)'/g);
  let name = 'this dish';
  if (nameMatch) {
    const lastMatch = nameMatch[nameMatch.length - 1];
    name = lastMatch.replace(/name:\s*'/, '').replace(/'$/, '');
  }
  
  const restMatch = substr.match(/restaurantName:\s*'([^']+)'/g);
  let rest = 'our restaurant';
  if (restMatch) {
    const lastMatch = restMatch[restMatch.length - 1];
    rest = lastMatch.replace(/restaurantName:\s*'/, '').replace(/'$/, '');
  }
  
  return `desc: 'A delicious serving of ${name} available at ${rest}.'`;
});

fs.writeFileSync('./src/data/mockDatabase.js', content);
console.log('Done');
