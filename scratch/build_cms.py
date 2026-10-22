import utils.session
import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1376, 768

font_dir = r'C:\Windows\Fonts'
f_h1 = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 26)
f_title = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 16)
f_card_h = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 14)
f_sub = ImageFont.truetype(os.path.join(font_dir, 'segoeui.ttf'), 13)
f_body = ImageFont.truetype(os.path.join(font_dir, 'segoeui.ttf'), 12)
f_small = ImageFont.truetype(os.path.join(font_dir, 'segoeui.ttf'), 11)
f_mono = ImageFont.truetype(os.path.join(font_dir, 'consola.ttf'), 12)
f_monob = ImageFont.truetype(os.path.join(font_dir, 'consolab.ttf'), 12)
f_badge = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 11)

base = Image.new('RGBA', (W, H), (2, 10, 14, 255))
bdraw = ImageDraw.Draw(base)

for y in range(H):
    for x in range(0, W, 4):
        dx = (x - W * 0.5) / (W * 0.55)
        dy = (y - H * 0.4) / (H * 0.55)
        dist = math.sqrt(dx*dx + dy*dy)
        r = int(max(1, 7 - dist * 6))
        g = int(max(5, 26 - dist * 20))
        b = int(max(8, 34 - dist * 24))
        bdraw.rectangle([x, y, x+4, y+1], fill=(r, g, b, 255))

bloom = Image.new('RGBA', (W, H), (0, 0, 0, 0))
bldraw = ImageDraw.Draw(bloom)
bldraw.ellipse([W*0.15, -H*0.1, W*0.85, H*0.7], fill=(7, 190, 184, 32))
bldraw.ellipse([W*0.35, -H*0.05, W*0.65, H*0.5], fill=(20, 240, 220, 24))
bldraw.ellipse([W*0.05, H*0.6, W*0.45, H*1.1], fill=(4, 120, 120, 28))
bldraw.ellipse([W*0.55, H*0.5, W*0.95, H*1.0], fill=(7, 180, 170, 28))
bloom = bloom.filter(ImageFilter.GaussianBlur(90))
base = Image.alpha_composite(base, bloom)

grid = Image.new('RGBA', (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(grid)
for i in range(-20, 30):
    x_bottom = W * 0.5 + i * 65
    gdraw.line([(W * 0.5 + i * 14, int(H * 0.42)), (x_bottom, H)], fill=(7, 190, 184, 16), width=1)
for y in range(int(H * 0.45), H, 22):
    op = int(10 + (y - H*0.45)/(H*0.55) * 24)
    gdraw.line([(0, y), (W, y)], fill=(7, 190, 184, op), width=1)
base = Image.alpha_composite(base, grid)

def draw_card(img, bbox, r=12, fill=(4, 22, 28, 225), border_color=(7, 190, 184, 90), glow=True):
    x1, y1, x2, y2 = bbox
    if glow:
        glow_layer = Image.new('RGBA', img.size, (0, 0, 0, 0))
        g_draw = ImageDraw.Draw(glow_layer)
        g_draw.rounded_rectangle([x1-3, y1-3, x2+3, y2+3], radius=r+3, fill=(7, 190, 184, 35))
        glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(10))
        img.paste(Image.alpha_composite(img, glow_layer))
    card_layer = Image.new('RGBA', img.size, (0, 0, 0, 0))
    c_draw = ImageDraw.Draw(card_layer)
    c_draw.rounded_rectangle(bbox, radius=r, fill=fill, outline=border_color, width=1)
    c_draw.line([(x1+r, y1), (x2-r, y1)], fill=(25, 245, 235, int(border_color[3]*1.5)), width=1)
    img.paste(Image.alpha_composite(img, card_layer))

hdr_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
hdraw = ImageDraw.Draw(hdr_layer)

title_text = 'HEADLESS CMS & CONTENT MANAGEMENT'
hdraw.text((W*0.5, 42), title_text, fill=(240, 255, 255, 255), font=f_h1, anchor='mt')

badges = [
    ('Headless CMS (Contentful, Sanity)', (7, 190, 184), (5, 45, 45, 180)),
    ('Custom WordPress Architecture', (20, 220, 180), (5, 45, 40, 180)),
    ('Multilingual & Multi-Region (i18n)', (255, 190, 80), (50, 40, 10, 180)),
    ('Omnichannel API & Instant CDN Purge', (7, 190, 184), (5, 45, 45, 180)),
]
bx = 175
by = 82
for text, border_c, bg_c in badges:
    full_text = '● ' + text
    tw = int(hdraw.textlength(full_text, font=f_badge)) + 24
    hdraw.rounded_rectangle([bx, by, bx+tw, by+26], radius=13, fill=bg_c, outline=border_c, width=1)
    hdraw.text((bx+12, by+6), full_text, fill=(225, 245, 245, 240), font=f_badge)
    bx += tw + 14

base = Image.alpha_composite(base, hdr_layer)

# --- LEFT PANEL: Sidebar Navigation ([50, 130, 290, 715]) ---
draw_card(base, [50, 130, 290, 715], r=14, fill=(4, 20, 26, 235), border_color=(7, 190, 184, 100))
side_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
sdraw = ImageDraw.Draw(side_layer)

sdraw.text((70, 150), 'CONTENT STUDIO', fill=(7, 190, 184, 255), font=f_badge)
sdraw.text((70, 170), 'Workspaces', fill=(255, 255, 255, 255), font=f_card_h)

# Search bar
sdraw.rounded_rectangle([70, 198, 270, 228], radius=6, fill=(2, 14, 18, 200), outline=(7, 190, 184, 60), width=1)
sdraw.text((82, 206), 'Search entries & assets...', fill=(120, 160, 165, 255), font=f_small)

# Collections
sdraw.text((70, 245), 'COLLECTIONS', fill=(130, 170, 175, 255), font=f_badge)

colls = [
    ('● Articles & News', True, '24'),
    ('○ Case Studies', False, '12'),
    ('○ Product Catalog', False, '58'),
    ('○ Team Members', False, '16'),
    ('○ Landing Pages', False, '7'),
    ('○ Global Menus', False, '4'),
]
cy = 265
for c_name, is_active, c_count in colls:
    if is_active:
        sdraw.rounded_rectangle([68, cy, 272, cy+32], radius=6, fill=(7, 190, 184, 40), outline=(7, 190, 184, 120), width=1)
        sdraw.text((80, cy+8), c_name, fill=(240, 255, 255, 255), font=f_card_h)
        sdraw.text((245, cy+8), c_count, fill=(7, 190, 184, 255), font=f_badge)
    else:
        sdraw.text((80, cy+8), c_name, fill=(160, 190, 195, 255), font=f_sub)
        sdraw.text((245, cy+8), c_count, fill=(110, 140, 145, 255), font=f_small)
    cy += 38

sdraw.line([(70, 505), (270, 505)], fill=(7, 190, 184, 40), width=1)

# Locales section
sdraw.text((70, 520), 'LOCALES & I18N', fill=(130, 170, 175, 255), font=f_badge)
locales = [
    ('EN', 'English (US)', True),
    ('AR', 'Arabic (RTL)', False),
    ('ES', 'Spanish (ES)', False),
    ('FR', 'French (FR)', False),
]
ly = 540
for l_code, l_name, l_act in locales:
    sdraw.rounded_rectangle([70, ly, 100, ly+24], radius=4, fill=(7, 190, 184, 30) if l_act else (2, 14, 18, 180), outline=(7, 190, 184, 100) if l_act else (7, 190, 184, 40), width=1)
    sdraw.text((75, ly+5), l_code, fill=(255, 255, 255, 255) if l_act else (140, 170, 175, 255), font=f_badge)
    sdraw.text((110, ly+5), l_name, fill=(230, 245, 245, 255) if l_act else (130, 160, 165, 255), font=f_sub)
    ly += 32

# Asset sync status
sdraw.rounded_rectangle([70, 672, 270, 702], radius=6, fill=(16, 185, 129, 20), outline=(16, 185, 129, 90), width=1)
sdraw.text((78, 680), '● CDN Invalidation Synced', fill=(16, 185, 129, 255), font=f_badge)

base = Image.alpha_composite(base, side_layer)

# --- CENTER PANEL: Editorial Studio & Schema Editor ([310, 130, 860, 715]) ---
draw_card(base, [310, 130, 860, 715], r=14, fill=(4, 20, 26, 230), border_color=(7, 190, 184, 110))
cnt_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
cdraw = ImageDraw.Draw(cnt_layer)

cdraw.text((335, 150), 'CONTENT MODEL & EDITORIAL STUDIO', fill=(7, 190, 184, 255), font=f_badge)
cdraw.text((335, 170), 'Architecting Modern Headless Web Platforms', fill=(255, 255, 255, 255), font=f_title)

# Header metadata bar
cdraw.rounded_rectangle([335, 200, 835, 232], radius=6, fill=(2, 14, 18, 200), outline=(7, 190, 184, 50), width=1)
# Status pill
cdraw.rounded_rectangle([342, 205, 420, 227], radius=4, fill=(16, 185, 129, 30), outline=(16, 185, 129, 120), width=1)
cdraw.text((350, 209), '● Published', fill=(16, 185, 129, 255), font=f_badge)
cdraw.text((435, 208), 'Slug: /insights/headless-modern-web', fill=(150, 180, 185, 255), font=f_small)
cdraw.text((680, 208), 'v3.2 • Saved 2m ago', fill=(120, 160, 165, 255), font=f_small)

# Title field
cdraw.text((335, 245), 'DOCUMENT TITLE', fill=(130, 170, 175, 255), font=f_small)
cdraw.rounded_rectangle([335, 263, 835, 297], radius=6, fill=(3, 26, 34, 180), outline=(7, 190, 184, 70), width=1)
cdraw.text((345, 271), 'Architecting Modern Headless Web Platforms at Enterprise Scale', fill=(255, 255, 255, 255), font=f_sub)

# Excerpt field
cdraw.text((335, 310), 'SUMMARY & SEO META DESCRIPTION', fill=(130, 170, 175, 255), font=f_small)
cdraw.rounded_rectangle([335, 328, 835, 375], radius=6, fill=(3, 26, 34, 180), outline=(7, 190, 184, 70), width=1)
cdraw.text((345, 336), 'How decoupled frontend architecture, edge caching, and headless CMS', fill=(180, 210, 215, 255), font=f_body)
cdraw.text((345, 353), 'deliver sub-second page loads and seamless editorial workflows globally.', fill=(180, 210, 215, 255), font=f_body)

# Media asset field
cdraw.text((335, 390), 'HERO MEDIA ASSET & CDN BINDING', fill=(130, 170, 175, 255), font=f_small)
cdraw.rounded_rectangle([335, 408, 835, 495], radius=6, fill=(2, 16, 22, 220), outline=(7, 190, 184, 60), width=1)

# Visual mock inside asset box
cdraw.rounded_rectangle([345, 416, 445, 487], radius=4, fill=(4, 38, 48, 240), outline=(7, 190, 184, 110), width=1)
cdraw.ellipse([375, 435, 415, 475], fill=(7, 190, 184, 40), outline=(7, 190, 184, 180), width=1)
cdraw.line([(385, 455), (405, 455)], fill=(7, 190, 184, 255), width=2)
cdraw.line([(395, 445), (395, 465)], fill=(7, 190, 184, 255), width=2)

cdraw.text((460, 422), 'hero-headless-architecture.webp', fill=(240, 255, 255, 255), font=f_card_h)
cdraw.text((460, 442), 'Dimensions: 1920 × 1080  •  Format: WebP  •  Size: 142 KB', fill=(150, 185, 190, 255), font=f_small)
cdraw.text((460, 462), 'CDN Source: Cloudflare Edge Storage (Optimised with responsive srcSets)', fill=(7, 190, 184, 255), font=f_small)

# Rich text content blocks
cdraw.text((335, 510), 'RICH TEXT & COMPONENT BLOCKS', fill=(130, 170, 175, 255), font=f_small)
cdraw.rounded_rectangle([335, 528, 835, 640], radius=6, fill=(3, 26, 34, 180), outline=(7, 190, 184, 70), width=1)

# Block 1: Paragraph
cdraw.text((345, 538), '## 1. Decoupled Content Delivery', fill=(255, 255, 255, 255), font=f_card_h)
cdraw.text((345, 558), 'By decoupling the presentation layer from content management, marketing', fill=(180, 210, 215, 255), font=f_body)
cdraw.text((345, 574), 'teams gain independence while engineers maintain strict design systems.', fill=(180, 210, 215, 255), font=f_body)

# Block 2: Component snippet
cdraw.rounded_rectangle([345, 596, 825, 630], radius=4, fill=(2, 14, 18, 220), outline=(7, 190, 184, 40), width=1)
cdraw.text((355, 604), '<DynamicShowcase layout="grid" animation="fade" locale="en-US" />', fill=(7, 190, 184, 255), font=f_mono)

# Taxonomy tags
cdraw.text((335, 655), 'TAXONOMY:', fill=(130, 170, 175, 255), font=f_badge)
tags = ['Next.js 14', 'Headless CMS', 'GraphQL API', 'i18n Localization', 'Edge CDN']
tx = 410
for t in tags:
    tw = int(cdraw.textlength(t, font=f_small)) + 16
    cdraw.rounded_rectangle([tx, 652, tx+tw, 674], radius=4, fill=(7, 190, 184, 20), outline=(7, 190, 184, 80), width=1)
    cdraw.text((tx+8, 656), t, fill=(220, 245, 245, 255), font=f_small)
    tx += tw + 8

base = Image.alpha_composite(base, cnt_layer)

# --- RIGHT TOP: GraphQL Headless API Output ([880, 130, 1325, 410]) ---
draw_card(base, [880, 130, 1325, 410], r=14, fill=(2, 14, 18, 245), border_color=(7, 190, 184, 100))
rt_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
rtdraw = ImageDraw.Draw(rt_layer)

rtdraw.ellipse([900, 147, 912, 159], fill=(239, 68, 68, 255))
rtdraw.ellipse([920, 147, 932, 159], fill=(245, 158, 11, 255))
rtdraw.ellipse([940, 147, 952, 159], fill=(16, 185, 129, 255))
rtdraw.text((968, 146), 'GraphQL API ~ query GetArticleBySlug', fill=(130, 170, 175, 255), font=f_small)

rtdraw.line([(880, 170), (1325, 170)], fill=(7, 190, 184, 40), width=1)

gql_lines = [
    ('query GetArticle($slug: "headless-modern-web") {', (245, 200, 90), f_monob),
    ('  article(slug: $slug) {', (180, 220, 225), f_mono),
    ('    id: "art_98412"', (150, 185, 190), f_mono),
    ('    title: "Architecting Modern Headless Web..."', (7, 190, 184), f_mono),
    ('    locale: "en-US"', (16, 185, 129), f_mono),
    ('    publishedAt: "2026-10-14T08:00:00Z"', (150, 185, 190), f_mono),
    ('    availableLocales: ["en", "ar", "es", "fr"]', (220, 240, 245), f_mono),
    ('    readingTime: "5 min read"', (150, 185, 190), f_mono),
    ('    status: PUBLISHED', (16, 185, 129), f_monob),
    ('  }', (180, 220, 225), f_mono),
    ('}', (245, 200, 90), f_monob),
]

gy = 185
for text, col, fnt in gql_lines:
    rtdraw.text((905, gy), text, fill=col, font=fnt)
    gy += 18

# Bottom API status pill
rtdraw.rounded_rectangle([905, gy+6, 1300, gy+30], radius=5, fill=(16, 185, 129, 25), outline=(16, 185, 129, 90), width=1)
rtdraw.text((915, gy+11), '● HTTP/2 200 OK  •  12ms Response  •  Edge Cache HIT', fill=(16, 185, 129, 255), font=f_badge)

base = Image.alpha_composite(base, rt_layer)

# --- RIGHT BOTTOM: Live Multi-Device Preview ([880, 425, 1325, 715]) ---
draw_card(base, [880, 425, 1325, 715], r=14, fill=(4, 20, 26, 230), border_color=(7, 190, 184, 110))
rb_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
rbdraw = ImageDraw.Draw(rb_layer)

rbdraw.text((905, 445), 'OMNICHANNEL LIVE PREVIEW', fill=(7, 190, 184, 255), font=f_badge)
rbdraw.text((905, 465), 'Instant Synchronised Render Across Devices', fill=(255, 255, 255, 255), font=f_card_h)

# Device preview container
rbdraw.rounded_rectangle([905, 495, 1300, 695], radius=10, fill=(2, 14, 18, 230), outline=(7, 190, 184, 60), width=1)

# Mini web window mockup inside
rbdraw.rounded_rectangle([920, 510, 1285, 680], radius=8, fill=(3, 24, 32, 240), outline=(7, 190, 184, 80), width=1)
# Top window bar
rbdraw.rounded_rectangle([920, 510, 1285, 532], radius=6, fill=(2, 16, 22, 255))
rbdraw.ellipse([930, 518, 938, 526], fill=(239, 68, 68, 220))
rbdraw.ellipse([943, 518, 951, 526], fill=(245, 158, 11, 220))
rbdraw.ellipse([956, 518, 964, 526], fill=(16, 185, 129, 220))
rbdraw.rounded_rectangle([975, 514, 1230, 528], radius=3, fill=(1, 10, 14, 200))
rbdraw.text((985, 516), 'https://corehives.com/insights/headless-modern-web', fill=(120, 160, 165, 255), font=f_small)

# Preview content mockup
rbdraw.text((935, 545), 'COREHIVES INSIGHTS', fill=(7, 190, 184, 255), font=f_badge)
rbdraw.text((935, 565), 'Architecting Modern Headless Web Platforms', fill=(255, 255, 255, 255), font=f_card_h)
rbdraw.text((935, 588), 'By CoreHives Engineering • 5 min read • Published Today', fill=(140, 175, 180, 255), font=f_small)

# Miniature content layout
rbdraw.rounded_rectangle([935, 610, 1070, 665], radius=4, fill=(4, 38, 48, 200), outline=(7, 190, 184, 60), width=1)
rbdraw.text((945, 622), 'Next.js Frontend', fill=(7, 190, 184, 255), font=f_small)
rbdraw.text((945, 642), 'SSR / ISR Cached', fill=(160, 195, 200, 255), font=f_small)

rbdraw.rounded_rectangle([1080, 610, 1215, 665], radius=4, fill=(4, 38, 48, 200), outline=(7, 190, 184, 60), width=1)
rbdraw.text((1090, 622), 'Headless Schema', fill=(7, 190, 184, 255), font=f_small)
rbdraw.text((1090, 642), 'Clean JSON Payloads', fill=(160, 195, 200, 255), font=f_small)

# Live tag
rbdraw.rounded_rectangle([1225, 625, 1275, 650], radius=4, fill=(16, 185, 129, 30), outline=(16, 185, 129, 120), width=1)
rbdraw.text((1233, 630), '● LIVE', fill=(16, 185, 129, 255), font=f_badge)

base = Image.alpha_composite(base, rb_layer)

os.makedirs('scratch', exist_ok=True)
out_png = 'scratch/cms_showcase.png'
out_webp = 'src/assets/cms-showcase.webp'
base.convert('RGB').save(out_png, 'PNG', quality=95)
base.convert('RGB').save(out_webp, 'WEBP', quality=92, method=6)
print('CMS showcase saved to src/assets/cms-showcase.webp!')
