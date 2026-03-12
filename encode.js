const fs = require('fs');
const files = [
    'rose-Binryhht.webp',
    'lotus-DDF3I5iL.webp',
    'chrysanthemum-nmdROtFj.webp',
    'tulip-DkVON6MI.webp',
    'lily-Bn_fQTOU.webp',
    'orchid-DO40kC-2.webp',
    'camellia-Doo1wvpa.webp',
    'carnation-DoiHabBz.webp',
    'daisy-CELBRpZ7.webp',
    'peony-BCw4kTvM.webp'
];
let out = '';
files.forEach((f, i) => {
    const buf = fs.readFileSync(f);
    const b64 = buf.toString('base64');
    out += 'const tex' + (i + 1) + '_b64 = "data:image/webp;base64,' + b64 + '";\n';
});
fs.writeFileSync('textures.js', out);
console.log('Done, textures.js size text: ' + out.length);
