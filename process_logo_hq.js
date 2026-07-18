const Jimp = require('jimp');

const srcImage = 'C:\\Users\\Source Tech Co\\.gemini\\antigravity\\brain\\d84ef16f-5d50-4118-bc4a-4d6136d0aecc\\media__1784391978614.jpg';

async function processLogo() {
  const image = await Jimp.read(srcImage);
  
  // Step 1: Remove only pure white background BEFORE resizing to avoid halos
  // We only target actual background pixels (very close to white)
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Target only the bright white background
    if (r > 230 && g > 230 && b > 230) {
      this.bitmap.data[idx + 0] = 0;
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
      this.bitmap.data[idx + 3] = 0;
    }
  });
  
  // Step 2: Resize to high quality using bicubic. 
  image.resize(800, Jimp.AUTO, Jimp.RESIZE_BICUBIC);
  
  // Step 3: Clean up any slightly transparent gray pixels on the very outer edge that might remain
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const a = this.bitmap.data[idx + 3];
    if (a > 0 && a < 255) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        // If it's a very light semi-transparent edge pixel, delete it to prevent halos
        if (r > 200 && g > 200 && b > 200 && a < 150) {
            this.bitmap.data[idx + 3] = 0;
        }
    }
  });
  
  await image.writeAsync('public/logo.png');
  await image.writeAsync('public/logo-light.png');
  console.log('Logos restored with correct colors and no halos!');
}

processLogo().catch(console.error);
