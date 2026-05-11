const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const footerLi = `<li style="margin-top: 16px; color: var(--accent); font-weight: 600;">DPIIT Recognized Startup</li>`;
  if (content.includes(footerLi)) {
    content = content.replace(footerLi, '');
    changed = true;
  }
  
  const indexLi = `<li style="margin-bottom: 12px; display: flex; align-items: center; gap: 12px;"><svg width="20" height="20" fill="var(--accent)" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> DPIIT Recognized Startup</li>`;
  if (content.includes(indexLi)) {
    content = content.replace(indexLi, '');
    changed = true;
  }

  if (changed) {
    // Also remove empty lines that might be left over
    content = content.replace(/\n\s*\n/g, '\n\n');
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
