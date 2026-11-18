const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, 'raw_screens');
const outDir = path.join(__dirname, 'src', 'screens');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(screensDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(screensDir, file), 'utf8');
  
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return;
  
  let bodyInner = bodyMatch[1];
  
  bodyInner = bodyInner.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  const escapedHtml = bodyInner.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  const name = file.replace('.html', '');
  
  const componentCode = `export default function ${name}() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`${escapedHtml}\` }} />
  );
}
`;
  
  fs.writeFileSync(path.join(outDir, `${name}.tsx`), componentCode);
  console.log(`Generated ${name}.tsx with dangerouslySetInnerHTML`);
});

const appPath = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(/import React from 'react';\n/g, '');
fs.writeFileSync(appPath, appContent);
