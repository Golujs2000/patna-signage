const fs = require('fs');
const path = require('path');

const dir = 'public/assets/clients';
fs.mkdirSync(dir, { recursive: true });

// Apollo Diagnostics SVG
const apolloSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="apg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00529b"/>
      <stop offset="100%" stop-color="#002b5c"/>
    </linearGradient>
  </defs>
  <!-- Apollo Torch / Shield Symbol -->
  <path d="M 28 14 C 28 14 36 26 36 34 C 36 42 30 46 28 46 C 26 46 20 42 20 34 C 20 26 28 14 28 14 Z" fill="#f7931e"/>
  <path d="M 28 22 C 28 22 32 30 32 35 C 32 39 29 42 28 42 C 27 42 24 39 24 35 C 24 30 28 22 28 22 Z" fill="#ffd200"/>
  <path d="M 22 47 L 34 47 L 31 66 L 25 66 Z" fill="#00529b"/>
  <!-- Text -->
  <text x="56" y="38" font-family="'Inter', sans-serif" font-weight="900" font-size="24" fill="#00529b" letter-spacing="1">Apollo</text>
  <text x="58" y="55" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#f7931e" letter-spacing="2">DIAGNOSTICS</text>
</svg>`;

// SRL / Agilus Diagnostics SVG
const srlSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- Cross + Helix mark -->
  <rect x="18" y="24" width="24" height="24" rx="4" fill="#008080"/>
  <rect x="26" y="16" width="8" height="40" rx="3" fill="#00a896"/>
  <rect x="10" y="32" width="40" height="8" rx="3" fill="#00a896"/>
  <circle cx="30" cy="36" r="3" fill="#ffffff"/>
  <!-- Text -->
  <text x="60" y="38" font-family="'Inter', sans-serif" font-weight="900" font-size="25" fill="#024b4b" letter-spacing="1">SRL</text>
  <text x="61" y="55" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#00a896" letter-spacing="2">DIAGNOSTICS</text>
</svg>`;

// Neuberg Diagnostics SVG
const neubergSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- Ribbon N emblem -->
  <path d="M 16 54 L 16 22 L 26 22 L 36 40 L 36 22 L 44 22 L 44 54 L 34 54 L 24 36 L 24 54 Z" fill="#800020"/>
  <circle cx="48" cy="22" r="3.5" fill="#e63946"/>
  <!-- Text -->
  <text x="56" y="38" font-family="'Inter', sans-serif" font-weight="800" font-size="22" fill="#800020" letter-spacing="0.5">Neuberg</text>
  <text x="58" y="54" font-family="'Inter', sans-serif" font-weight="600" font-size="10.5" fill="#4a5568" letter-spacing="1.5">DIAGNOSTICS</text>
</svg>`;

// Lupin Diagnostics SVG
const lupinSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- Lupin Hexagon Molecule Cross -->
  <polygon points="26,16 38,23 38,37 26,44 14,37 14,23" fill="#0066b2"/>
  <polygon points="26,20 34,25 34,35 26,40 18,35 18,25" fill="#ffffff"/>
  <circle cx="26" cy="30" r="4" fill="#ed1c24"/>
  <!-- Text -->
  <text x="48" y="38" font-family="'Inter', sans-serif" font-weight="900" font-size="24" fill="#0066b2" letter-spacing="0.5">LUPIN</text>
  <text x="50" y="55" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#ed1c24" letter-spacing="2">DIAGNOSTICS</text>
</svg>`;

// Pantaloons (Aditya Birla) SVG
const pantaloonsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- Aditya Birla Sunburst / Petals -->
  <g transform="translate(24, 38)">
    <circle cx="0" cy="0" r="5" fill="#f37023"/>
    <ellipse cx="0" cy="-11" rx="3.5" ry="6" fill="#ed1c24"/>
    <ellipse cx="10" cy="-6" rx="3.5" ry="6" fill="#f7941d" transform="rotate(45, 10, -6)"/>
    <ellipse cx="11" cy="4" rx="3.5" ry="6" fill="#ffde17" transform="rotate(90, 11, 4)"/>
    <ellipse cx="5" cy="11" rx="3.5" ry="6" fill="#8dc63f" transform="rotate(135, 5, 11)"/>
    <ellipse cx="-6" cy="11" rx="3.5" ry="6" fill="#00a896" transform="rotate(225, -6, 11)"/>
    <ellipse cx="-11" cy="4" rx="3.5" ry="6" fill="#0072bc" transform="rotate(270, -11, 4)"/>
    <ellipse cx="-9" cy="-6" rx="3.5" ry="6" fill="#92278f" transform="rotate(315, -9, -6)"/>
  </g>
  <!-- Text -->
  <text x="48" y="42" font-family="'Outfit', sans-serif" font-weight="800" font-size="21" fill="#1e293b" letter-spacing="-0.5">pantaloons</text>
  <text x="50" y="56" font-family="'Inter', sans-serif" font-weight="600" font-size="8.5" fill="#64748b" letter-spacing="1.5">ADITYA BIRLA GROUP</text>
</svg>`;

// Mufti SVG
const muftiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- Mufti Crest / Shield -->
  <rect x="16" y="24" width="28" height="28" rx="6" fill="#111827"/>
  <text x="24" y="44" font-family="'Inter', sans-serif" font-weight="900" font-size="20" fill="#dc2626">M</text>
  <!-- Text -->
  <text x="54" y="45" font-family="'Montserrat', sans-serif" font-weight="900" font-size="26" fill="#111827" letter-spacing="4">MUFTI</text>
  <text x="56" y="58" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#dc2626" letter-spacing="3">GENUINE JEANS &amp; CO.</text>
</svg>`;

// Reliance Cement SVG
const relianceSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- Reliance Diamond / Flame -->
  <polygon points="28,15 42,38 28,61 14,38" fill="#003399"/>
  <polygon points="28,24 36,38 28,52 20,38" fill="#e31e24"/>
  <!-- Text -->
  <text x="52" y="38" font-family="'Inter', sans-serif" font-weight="900" font-size="22" fill="#003399" letter-spacing="1">Reliance</text>
  <text x="54" y="54" font-family="'Inter', sans-serif" font-weight="700" font-size="10.5" fill="#e31e24" letter-spacing="2">CEMENT</text>
</svg>`;

// Swaraj Tractors SVG
const swarajSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- Swaraj bold emblem -->
  <circle cx="28" cy="38" r="18" fill="#d90429"/>
  <polygon points="28,25 36,44 20,44" fill="#ffffff"/>
  <line x1="28" y1="28" x2="28" y2="44" stroke="#d90429" stroke-width="2"/>
  <!-- Text -->
  <text x="54" y="42" font-family="'Inter', sans-serif" font-weight="900" font-size="24" fill="#d90429" letter-spacing="1.5">SWARAJ</text>
  <text x="56" y="56" font-family="'Inter', sans-serif" font-weight="600" font-size="9" fill="#1e293b" letter-spacing="2">MAHINDRA GROUP</text>
</svg>`;

// TVS Motor SVG
const tvsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- TVS Leaping Horse mark -->
  <circle cx="26" cy="38" r="16" fill="#0f4c81"/>
  <path d="M 20 44 C 20 44 22 36 28 32 C 32 30 33 26 31 25 C 33 26 35 29 33 33 C 31 37 28 39 26 44 Z" fill="#ffffff"/>
  <!-- Text -->
  <text x="50" y="42" font-family="'Inter', sans-serif" font-style="italic" font-weight="900" font-size="28" fill="#0f4c81" letter-spacing="1">TVS</text>
  <text x="52" y="56" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#d90429" letter-spacing="2">MOTOR COMPANY</text>
</svg>`;

// Finaq Aqua SVG
const finaqSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <!-- Droplet wave -->
  <path d="M 28 16 C 28 16 38 30 38 38 C 38 46 32 52 24 52 C 16 52 10 46 10 38 C 10 30 20 16 20 16 Z" fill="#0ea5e9"/>
  <path d="M 22 28 C 22 28 32 36 32 42 C 32 47 28 50 24 50 C 20 50 16 47 16 42 C 16 36 22 28 22 28 Z" fill="#38bdf8"/>
  <circle cx="26" cy="34" r="3" fill="#ffffff"/>
  <!-- Text -->
  <text x="48" y="39" font-family="'Inter', sans-serif" font-weight="800" font-size="22" fill="#0369a1" letter-spacing="1">FINAQ</text>
  <text x="50" y="54" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#0284c7" letter-spacing="2">PACKAGED WATER</text>
</svg>`;

fs.writeFileSync(path.join(dir, 'apollo.svg'), apolloSvg);
fs.writeFileSync(path.join(dir, 'srl.svg'), srlSvg);
fs.writeFileSync(path.join(dir, 'neuberg.svg'), neubergSvg);
fs.writeFileSync(path.join(dir, 'lupin.svg'), lupinSvg);
fs.writeFileSync(path.join(dir, 'pantaloons.svg'), pantaloonsSvg);
fs.writeFileSync(path.join(dir, 'mufti.svg'), muftiSvg);
fs.writeFileSync(path.join(dir, 'reliance.svg'), relianceSvg);
fs.writeFileSync(path.join(dir, 'swaraj.svg'), swarajSvg);
fs.writeFileSync(path.join(dir, 'tvs.svg'), tvsSvg);
fs.writeFileSync(path.join(dir, 'finaq.svg'), finaqSvg);

console.log('Client logo SVGs generated in ' + dir);
console.log(fs.readdirSync(dir));
