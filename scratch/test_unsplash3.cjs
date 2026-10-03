const https = require('https');

const pages = [
  'industrial-laser-cutter-working-on-metal-sheet-66ff86abaf87',
  'industrial-laser-cutting-machine-working-on-metal-74de69e6851f',
  'laser-cutting-machine-with-orange-sparks-caf65eca7c9d',
  'close-up-of-cnc-engraving-machine-cutting-wood-in-automated-production-workshop-with-sawdust-flakes-in-air-copy-space-10d8209fe077'
];

pages.forEach(p => {
  https.get('https://unsplash.com/photos/' + p, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
    let html = '';
    res.on('data', d => html += d);
    res.on('end', () => {
      const match = html.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+/);
      if (match) {
        console.log(p.slice(0, 30), '->', match[0]);
      } else {
        console.log(p.slice(0, 30), '-> not found (status ' + res.statusCode + ')');
      }
    });
  });
});
