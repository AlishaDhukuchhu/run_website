const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, 'src', 'screens');
const files = fs.readdirSync(screensDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(screensDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, '');
  
  // Fix viewbox
  content = content.replace(/viewbox=/gi, 'viewBox=');
  // Fix svg attributes
  content = content.replace(/stroke-width=/gi, 'strokeWidth=');
  content = content.replace(/stroke-linecap=/gi, 'strokeLinecap=');
  content = content.replace(/stroke-linejoin=/gi, 'strokeLinejoin=');
  content = content.replace(/fill-rule=/gi, 'fillRule=');
  content = content.replace(/clip-rule=/gi, 'clipRule=');
  content = content.replace(/stroke-miterlimit=/gi, 'strokeMiterlimit=');
  content = content.replace(/stop-color=/gi, 'stopColor=');
  
  // Replace unclosed hr or br tags that might have slipped (although handled in generation)
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});
