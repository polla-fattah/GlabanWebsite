const Jimp = require('jimp');

const srcImage = 'C:\\Users\\Source Tech Co\\.gemini\\antigravity\\brain\\d84ef16f-5d50-4118-bc4a-4d6136d0aecc\\media__1784391978614.jpg';

async function generateFavicon() {
  const image = await Jimp.read(srcImage);
  
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  
  // Find row bounds for the logo vs the text.
  // We assume there's a block of content (the shield), then a gap of white rows, then the text.
  let rowHasPixels = new Array(h).fill(false);
  
  for (let y = 0; y < h; y++) {
    let hasDark = false;
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      
      // If it's noticeably darker than white
      if (Math.min(r, g, b) < 220) {
        hasDark = true;
        break;
      }
    }
    rowHasPixels[y] = hasDark;
  }
  
  // Find the top edge of the shield
  let topY = 0;
  while (topY < h && !rowHasPixels[topY]) topY++;
  
  // Find the bottom edge of the shield (where the first large gap starts)
  let bottomY = topY;
  let emptyRowCount = 0;
  for (let y = topY; y < h; y++) {
    if (!rowHasPixels[y]) {
      emptyRowCount++;
    } else {
      emptyRowCount = 0;
      bottomY = y;
    }
    
    // If we see more than 10 consecutive empty rows after finding the shield,
    // we assume we hit the gap between the shield and the text!
    if (emptyRowCount > 10) {
      break;
    }
  }
  
  // Find left and right bounds of the shield area only
  let leftX = w;
  let rightX = 0;
  for (let y = topY; y <= bottomY; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (Math.min(image.bitmap.data[idx], image.bitmap.data[idx+1], image.bitmap.data[idx+2]) < 220) {
        if (x < leftX) leftX = x;
        if (x > rightX) rightX = x;
      }
    }
  }
  
  // Add some padding
  const padding = 20;
  topY = Math.max(0, topY - padding);
  bottomY = Math.min(h - 1, bottomY + padding);
  leftX = Math.max(0, leftX - padding);
  rightX = Math.min(w - 1, rightX + padding);
  
  const cropW = rightX - leftX;
  const cropH = bottomY - topY;
  
  // Crop out just the shield
  image.crop(leftX, topY, cropW, cropH);
  
  // Strip white background aggressively
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    if (Math.min(r, g, b) > 160) {
      this.bitmap.data[idx + 3] = 0; 
    }
  });
  
  // Make it square
  const size = Math.max(cropW, cropH);
  
  // Create a new square image that is transparent
  const square = new Jimp(size, size, 0x00000000);
  
  // Center the cropped logo in the square
  const offsetX = Math.floor((size - cropW) / 2);
  const offsetY = Math.floor((size - cropH) / 2);
  square.composite(image, offsetX, offsetY);
  
  // Resize to a standard favicon size with high quality
  square.resize(512, 512, Jimp.RESIZE_BICUBIC);
  
  await square.writeAsync('app/icon.png');
  console.log('Favicon generated successfully from just the G mark!');
}

generateFavicon().catch(console.error);
