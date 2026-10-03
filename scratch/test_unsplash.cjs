const https = require('https');

function getUnsplashPhotos(slug) {
  return new Promise((resolve) => {
    const url = 'https://unsplash.com/s/photos/' + slug;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let html = '';
      res.on('data', d => html += d);
      res.on('end', () => {
        const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+\?([^"'\s>]+)/g;
        const matches = new Set();
        let m;
        while ((m = regex.exec(html)) !== null) {
          const base = m[0].split('?')[0];
          matches.add(base);
        }
        resolve({ slug, images: Array.from(matches) });
      });
    }).on('error', e => resolve({ slug, error: e.message, images: [] }));
  });
}

async function run() {
  const slugs = ['laser-cutting', 'cnc-router', 'sheet-metal-laser', 'printing-press', 'factory-machine'];
  for (const s of slugs) {
    const res = await getUnsplashPhotos(s);
    console.log(`=== ${res.slug} (${res.images.length} images) ===`);
    res.images.slice(0, 6).forEach(img => console.log('  ' + img));
  }
}

run();
