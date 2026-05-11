const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const twitterSpace = /[ \t]*<a href="[^"]*"(?: aria-label="[^"]*")?><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-\.7 2\.1-2 3\.4c1\.6 10-9\.4 17\.3-18 11\.6 2\.2\.1 4\.4-\.6 6-2C3 15\.5\.5 9\.6 3 5c2\.2 2\.6 5\.6 4\.1 9 4-\.9-4\.2 4-6\.6 7-3\.8 1\.1 0 3-1\.2 3-1\.2z"><\/path><\/svg><\/a>\n?/g;
  const fbSpace = /[ \t]*<a href="[^"]*"(?: aria-label="[^"]*")?><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"><\/path><\/svg><\/a>\n?/g;

  if (twitterSpace.test(content)) {
    content = content.replace(twitterSpace, '');
    changed = true;
  }
  if (fbSpace.test(content)) {
    content = content.replace(fbSpace, '');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
