const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, 'src', 'screens');
const files = fs.readdirSync(screensDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(screensDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex replacement helper
  // It looks for <a ... href="#" ...>Text</a> and replaces href="#" with href="/path"
  const replaceLink = (text, path) => {
    const regex = new RegExp(`(<a[^>]*href=")#[^"]*("[^>]*>\\s*${text}\\s*<\\/a>)`, 'gi');
    content = content.replace(regex, `$1${path}$2`);
  };

  replaceLink('Explore', '/route-discovery');
  replaceLink('Live Map', '/dashboard');
  replaceLink('Events', '/events-groups');
  replaceLink('Routes', '/route-discovery');
  replaceLink('Community', '/community-feed');
  replaceLink('Analytics', '/analytics');

  // Replace the "Get Started" button with an anchor if possible, or just replace the innerHTML string.
  // E.g., <button ...>Get Started</button> -> <a href="/create-account" class="...">Get Started</a>
  content = content.replace(/<button([^>]*)>\s*Get Started\s*<\/button>/gi, '<a href="/create-account"$1 style="display:inline-block;text-align:center;">Get Started</a>');

  // Make RunRadar logo clickable
  content = content.replace(/<div class="([^"]*text-primary[^"]*)"([^>]*)>\s*RunRadar\s*<\/div>/gi, '<a href="/" class="$1" style="text-decoration:none;"$2>RunRadar</a>');

  // For the Create Account / Sign In toggle
  // E.g. "Already have an account? Sign In"
  content = content.replace(/href="#"([^>]*)>\s*Sign In\s*<\/a>/gi, 'href="/sign-in"$1>Sign In</a>');
  content = content.replace(/href="#"([^>]*)>\s*Sign Up\s*<\/a>/gi, 'href="/create-account"$1>Sign Up</a>');

  fs.writeFileSync(filePath, content);
  console.log(`Updated links in ${file}`);
});
