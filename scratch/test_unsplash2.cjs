const https = require('https');
https.get('https://unsplash.com/s/photos/laser-cutting', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
  let html = '';
  res.on('data', d => html += d);
  res.on('end', () => {
    const m = html.match(/https:\/\/images\.unsplash\.com\/photo-[^"'\s\?]+/g);
    console.log('Matches:', m ? m.slice(0, 10) : 'none');
  });
});
