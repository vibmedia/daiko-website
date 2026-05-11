const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // 1. Fix meta descriptions — remove "a DPIIT Recognized Startup" phrase
  content = content.replace(
    /a DPIIT Recognized Startup transforming/g,
    'a leading firm transforming'
  );

  // 2. Fix meta keywords — remove "DPIIT startup"
  content = content.replace(/, DPIIT startup/g, ', industrial technology');

  // 3. Remove visible DPIIT text in contact/about
  content = content.replace(
    /<p style="font-size: 0.9rem;">DPIIT Recognized Startup<\/p>/g,
    '<p style="font-size: 0.9rem;">Govt. Recognized Company</p>'
  );

  // 4. Remove the DPIIT Recognition heading and paragraph in about.html
  content = content.replace(
    /<h4 style="margin-bottom: 8px;">DPIIT Recognition<\/h4>/g,
    '<h4 style="margin-bottom: 8px;">Industry Recognition</h4>'
  );
  content = content.replace(
    /Our DPIIT recognition as a startup\s*/g,
    'Our government recognition '
  );

  // 5. Remove the DPIIT Reg line with DIPP number in about.html
  content = content.replace(
    /<p><span style="color: var\(--text-muted\); font-weight: 500; font-family: 'Inter';">DPIIT Reg:<\/span> <strong style="color: var\(--primary\);">DIPP221855<\/strong><\/p>/g,
    '<p><span style="color: var(--text-muted); font-weight: 500; font-family: \'Inter\';">Est:</span> <strong style="color: var(--primary);">2020</strong></p>'
  );

  // 6. Remove any remaining footer DPIIT lines
  content = content.replace(
    /<li style="margin-top: 16px; color: var\(--accent\); font-weight: 600;">DPIIT Recognized Startup<\/li>/g,
    ''
  );

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Cleaned: ${file}`);
  }
}

console.log('Done — all DPIIT references removed or neutralized.');
