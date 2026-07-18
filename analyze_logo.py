import sys
from PIL import Image
from collections import Counter

def analyze_colors(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    colors = []
    for item in datas:
        # Ignore white background
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            continue
        # Ignore near-white antialiasing
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            continue
        
        # Quantize colors to reduce noise
        r = round(item[0] / 10) * 10
        g = round(item[1] / 10) * 10
        b = round(item[2] / 10) * 10
        colors.append((r,g,b))
        
    counts = Counter(colors)
    print("Most common colors (RGB):")
    for color, count in counts.most_common(10):
        print(f"RGB{color}: {count} pixels")

analyze_colors(r"C:\Users\Source Tech Co\.gemini\antigravity\brain\d84ef16f-5d50-4118-bc4a-4d6136d0aecc\media__1784391978614.jpg")
