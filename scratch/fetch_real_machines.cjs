const https = require('https');
const fs = require('fs');
const path = require('path');

function searchWiki(term) {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(term) + '&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url|mime|size&format=json';
    https.get(url, { headers: { 'User-Agent': 'PatnaSignage/1.0 (test@patnasignage.com)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const results = [];
          const pages = json.query ? json.query.pages : {};
          for (let k in pages) {
            const p = pages[k];
            if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].mime && (p.imageinfo[0].mime === 'image/jpeg' || p.imageinfo[0].mime === 'image/png' || p.imageinfo[0].mime === 'image/webp')) {
              results.push({
                title: p.title,
                url: p.imageinfo[0].url,
                width: p.imageinfo[0].width,
                height: p.imageinfo[0].height,
                size: p.imageinfo[0].size
              });
            }
          }
          resolve(results);
        } catch(e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function main() {
  const queries = [
    { key: 'fiber_laser', query: 'laser cutting metal' },
    { key: 'cnc_router', query: 'CNC router workshop' },
    { key: 'letter_bender', query: 'bending machine metal' },
    { key: 'uv_printer', query: 'flatbed printer' },
    { key: 'large_format', query: 'large format printer' },
    { key: 'laser_welding', query: 'laser welding' }
  ];

  for (const q of queries) {
    const res = await searchWiki(q.query);
    console.log(`\n=== ${q.key} (${q.query}) ===`);
    res.slice(0, 5).forEach((r, i) => {
      console.log(`[${i}] ${r.title} (${r.width}x${r.height}) -> ${r.url}`);
    });
  }
}

main();
