const https = require('https');

function searchWiki(term) {
  return new Promise(resolve => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(term) + '&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|mime|size&format=json';
    https.get(url, { headers: { 'User-Agent': 'PatnaSignage/1.0' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? json.query.pages : {};
          const results = [];
          for (let k in pages) {
            const p = pages[k];
            if (p.imageinfo && p.imageinfo[0]) {
              results.push({ title: p.title, url: p.imageinfo[0].url });
            }
          }
          resolve(results);
        } catch(e) { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const list = [
    'Indian Railways logo',
    'Apollo Hospitals',
    'Reliance Industries logo',
    'TVS Motor logo',
    'Mufti logo',
    'Neuberg Diagnostics',
    'Lupin logo'
  ];
  for (const item of list) {
    const res = await searchWiki(item);
    console.log('=== ' + item + ' ===');
    res.forEach(r => console.log('  ', r.title, ':', r.url));
  }
}
run();
