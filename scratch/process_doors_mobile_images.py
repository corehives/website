import os
from PIL import Image

cover_src = r"C:\Users\Hp\.gemini\antigravity-ide\brain\0dc67795-856a-4142-bc18-4594b0986c71\doors_mobile_cover_1792439484191.jpg"
screens_src = r"C:\Users\Hp\.gemini\antigravity-ide\brain\0dc67795-856a-4142-bc18-4594b0986c71\doors_mobile_screens_1792439510942.jpg"

target_dir = r"c:\laragon\www\CoreHives\src\assets\doors-mobile"
os.makedirs(target_dir, exist_ok=True)

target_showcase = r"c:\laragon\www\CoreHives\src\assets\doors-mobile-showcase.webp"
target_cover = os.path.join(target_dir, "doors-mobile-cover.webp")
target_screens = os.path.join(target_dir, "doors-mobile-screens.webp")

if os.path.exists(cover_src):
    img = Image.open(cover_src)
    # Save optimized WebP for showcase and cover
    img.save(target_showcase, "WEBP", quality=90, method=6)
    img.save(target_cover, "WEBP", quality=90, method=6)
    print("Saved showcase and cover to:", target_showcase, target_cover)

if os.path.exists(screens_src):
    img2 = Image.open(screens_src)
    img2.save(target_screens, "WEBP", quality=90, method=6)
    print("Saved screens to:", target_screens)

print("Images processed successfully!")
