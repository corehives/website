import os
import shutil
from PIL import Image

brain_dir = r"C:\Users\Hp\.gemini\antigravity-ide\brain\0dc67795-856a-4142-bc18-4594b0986c71"
target_dir = r"c:\laragon\www\CoreHives\src\assets\betacompass"
os.makedirs(target_dir, exist_ok=True)

hero_src = os.path.join(brain_dir, "betacompass_homepage_1792423511527.png")
scrolled_src = os.path.join(brain_dir, "betacompass_homepage_scrolled_1792423530722.png")
bottom_src = os.path.join(brain_dir, "betacompass_homepage_bottom_1792423552704.png")
footer_src = os.path.join(brain_dir, "betacompass_homepage_footer_1792423593480.png")

print("Files exist:", os.path.exists(hero_src), os.path.exists(scrolled_src), os.path.exists(bottom_src))

if os.path.exists(hero_src):
    img = Image.open(hero_src)
    # Save hero
    hero_out = os.path.join(target_dir, "betacompass-hero.webp")
    img.save(hero_out, "WEBP", quality=88)
    print("Saved hero to", hero_out)

    # Create showcase card image 800x500 for the portfolio card
    # Crop or resize beautifully
    w, h = img.size
    # crop top portion (hero + search)
    crop_h = int(w * 0.625)
    if crop_h > h:
        crop_h = h
    cropped = img.crop((0, 0, w, crop_h))
    showcase_card = cropped.resize((800, 500), Image.Resampling.LANCZOS)
    showcase_out = r"c:\laragon\www\CoreHives\src\assets\betacompass-showcase.webp"
    showcase_card.save(showcase_out, "WEBP", quality=90)
    print("Saved showcase card to", showcase_out)

if os.path.exists(scrolled_src):
    img2 = Image.open(scrolled_src)
    out2 = os.path.join(target_dir, "betacompass-features.webp")
    img2.save(out2, "WEBP", quality=88)
    print("Saved features to", out2)

if os.path.exists(bottom_src):
    img3 = Image.open(bottom_src)
    out3 = os.path.join(target_dir, "betacompass-reports.webp")
    img3.save(out3, "WEBP", quality=88)
    print("Saved reports to", out3)

if os.path.exists(footer_src):
    img4 = Image.open(footer_src)
    out4 = os.path.join(target_dir, "betacompass-footer.webp")
    img4.save(out4, "WEBP", quality=88)
    print("Saved footer to", out4)

print("Done processing images!")
