from PIL import Image, ImageDraw
import os

# Path to the favicon
favicon_path = r"c:\Users\ABHAY\Desktop\abhaygzb15.github.io\public\assets\favicon.png"

# Open the image
img = Image.open(favicon_path)

# Ensure the image is RGB or RGBA
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Get the size of the image (use the smaller dimension to create a perfect circle)
size = min(img.size)

# Create a new image with transparent background
circular_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))

# Paste the image centered
offset = ((size - img.width) // 2, (size - img.height) // 2)
circular_img.paste(img, offset, img if img.mode == 'RGBA' else None)

# Create a circular mask
mask = Image.new('L', (size, size), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse([0, 0, size - 1, size - 1], fill=255)

# Apply the mask to make it circular
circular_img.putalpha(mask)

# Save the circular favicon
circular_img.save(favicon_path, 'PNG')
print(f"✓ Circular favicon created successfully!")
print(f"✓ Image size: {size}x{size} pixels")
print(f"✓ Saved to: {favicon_path}")
