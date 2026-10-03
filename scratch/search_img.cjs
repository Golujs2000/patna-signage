const https = require('https');
const fs = require('fs');
const path = require('path');

function searchWiki(term) {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(term) + '&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|mime|size&format=json';
    https.get(url, { headers: { 'User-Agent': 'PatnaSignageApp/1.0 (contact@patnasignage.com)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const results = [];
          const pages = json.query ? json.query.pages : {};
          for (let k in pages) {
            const p = pages[k];
            if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].mime && p.imageinfo[0].mime.startsWith('image/') && !p.imageinfo[0].url.endsWith('.gif') && !p.imageinfo[0].url.endsWith('.svg')) {
              results.push({ title: p.title, url: p.imageinfo[0].url, width: p.imageinfo[0].width, height: p.imageinfo[0].height });
            }
          }
          resolve({ term, results });
        } catch(e) {
          resolve({ term, error: e.message });
        }
      });
    }).on('error', e => resolve({ term, error: e.message }));
  });
}

async function run() {
  const terms = [
    'CNC router',
    'CNC milling machine',
    'laser cutting metal',
    'fiber laser',
    'large format printer',
    'plotter cutter'
  ];
  for (const t of terms) {
    const res = await searchWiki(t);
    console.log('=== ' + res.term + ' ===');
    (res.results || []).slice(0, 5).forEach(r => console.log('  ', r.title, ':', r.url));
  }
}
run();
