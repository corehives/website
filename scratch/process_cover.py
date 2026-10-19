import os
from PIL import Image

uploaded_img_path = r"C:\Users\Hp\.gemini\antigravity-ide\brain\0dc67795-856a-4142-bc18-4594b0986c71\.user_uploaded\media_1792424881950.jpg"
target_showcase = r"c:\laragon\www\CoreHives\src\assets\betacompass-showcase.webp"
target_dir = r"c:\laragon\www\CoreHives\src\assets\betacompass"
os.makedirs(target_dir, exist_ok=True)
target_cover = os.path.join(target_dir, "betacompass-cover.webp")
target_showcase_dir = os.path.join(target_dir, "betacompass-showcase.webp")

if os.path.exists(uploaded_img_path):
    img = Image.open(uploaded_img_path)
    print("Source image format & size:", img.format, img.size)
    
    # Save high-quality webp
    img.save(target_showcase, "WEBP", quality=92, method=6)
    img.save(target_cover, "WEBP", quality=92, method=6)
    img.save(target_showcase_dir, "WEBP", quality=92, method=6)
    print("Successfully saved to:")
    print(" -", target_showcase)
    print(" -", target_cover)
    print(" -", target_showcase_dir)
else:
    print("Uploaded image not found at", uploaded_img_path)
