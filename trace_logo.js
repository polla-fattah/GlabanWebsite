const potrace = require('potrace');
const fs = require('fs');

const srcImage = 'C:\\Users\\Source Tech Co\\.gemini\\antigravity\\brain\\d84ef16f-5d50-4118-bc4a-4d6136d0aecc\\media__1784391978614.jpg';

potrace.trace(srcImage, {
  color: '#ffffff',
  threshold: 200, 
  optCurve: true,
  optTolerance: 0.2,
  turdSize: 100,
}, function(err, svgWhite) {
  if (err) throw err;
  fs.writeFileSync('public/logo.svg', svgWhite);
  console.log("SVG saved to public/logo.svg");
});

potrace.trace(srcImage, {
  color: '#f26522',
  threshold: 200,
  optCurve: true,
  optTolerance: 0.2,
  turdSize: 100,
}, function(err, svgOrange) {
  if (err) throw err;
  fs.writeFileSync('public/logo-light.svg', svgOrange);
  console.log("SVG saved to public/logo-light.svg");
});
