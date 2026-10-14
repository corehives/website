import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1376, 768

font_dir = r'C:\Windows\Fonts'
f_h1 = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 26)
f_title = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 17)
f_sub = ImageFont.truetype(os.path.join(font_dir, 'segoeui.ttf'), 13)
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

title_text = 'DEVOPS & CLOUD INFRASTRUCTURE'
hdraw.text((W*0.5, 42), title_text, fill=(240, 255, 255, 255), font=f_h1, anchor='mt')

badges = [
    ('99.99% Uptime SLA Target', (7, 190, 184), (5, 45, 45, 180)),
    ('Multi-Region AWS / GCP', (20, 220, 180), (5, 45, 40, 180)),
    ('Automated Zero-Downtime CI/CD', (255, 190, 80), (50, 40, 10, 180)),
    ('Global Edge CDN < 20ms Delivery', (7, 190, 184), (5, 45, 45, 180)),
]
bx = 180
by = 82
for text, border_c, bg_c in badges:
    full_text = '● ' + text
    tw = int(hdraw.textlength(full_text, font=f_badge)) + 24
    hdraw.rounded_rectangle([bx, by, bx+tw, by+26], radius=13, fill=bg_c, outline=border_c, width=1)
    hdraw.text((bx+12, by+6), full_text, fill=(225, 245, 245, 240), font=f_badge)
    bx += tw + 14

base = Image.alpha_composite(base, hdr_layer)

# --- LEFT PANEL: CI/CD Pipeline (bbox: [50, 130, 660, 715]) ---
draw_card(base, [50, 130, 660, 715], r=14, fill=(4, 20, 26, 230), border_color=(7, 190, 184, 110))
left_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
ldraw = ImageDraw.Draw(left_layer)

ldraw.text((75, 150), 'AUTOMATED CI/CD PIPELINE', fill=(7, 190, 184, 255), font=f_badge)
ldraw.text((75, 170), 'Production Deployment Workflow', fill=(255, 255, 255, 255), font=f_title)
ldraw.text((75, 195), 'Trigger: git push origin/main  •  Commit: #7e4b92  •  Env: Production', fill=(140, 170, 175, 255), font=f_small)

ldraw.line([(75, 220), (635, 220)], fill=(7, 190, 184, 40), width=1)

stages = [
    ('1. Source Control', 'GitHub Actions', 'Commit #7e4b92 verified & signed', 'Passed • 4s', (16, 185, 129)),
    ('2. Multi-Stage Build', 'Docker Engine', 'Optimised dist container (42MB)', 'Passed • 38s', (16, 185, 129)),
    ('3. Automated Testing', 'Jest & Cypress', '186 unit/e2e tests (100% pass)', 'Passed • 52s', (16, 185, 129)),
    ('4. Security & Audit', 'Trivy & OWASP', '0 Critical, 0 High vulnerabilities', 'Passed • 18s', (16, 185, 129)),
    ('5. Cloud Orchestration', 'AWS EKS / K8s', 'Zero-downtime rolling update', 'Active • 99.9% SLA', (7, 190, 184)),
]

sy = 238
for idx, (s_title, s_engine, s_desc, s_stat, color) in enumerate(stages):
    ldraw.rounded_rectangle([75, sy, 635, sy+68], radius=8, fill=(3, 28, 36, 170), outline=(7, 190, 184, 70), width=1)
    
    ldraw.ellipse([92, sy+19, 122, sy+49], fill=(color[0], color[1], color[2], 40), outline=color, width=1)
    if 'Passed' in s_stat:
        ldraw.line([(101, sy+34), (106, sy+40)], fill=color, width=2)
        ldraw.line([(106, sy+40), (114, sy+28)], fill=color, width=2)
    else:
        ldraw.ellipse([102, sy+29, 112, sy+39], fill=color)

    ldraw.text((135, sy+15), s_title, fill=(255, 255, 255, 255), font=f_title)
    title_w = int(ldraw.textlength(s_title, font=f_title))
    ldraw.text((142 + title_w, sy+17), f'•  {s_engine}', fill=(7, 190, 184, 255), font=f_small)
    ldraw.text((135, sy+39), s_desc, fill=(150, 180, 185, 255), font=f_sub)
    
    tw = int(ldraw.textlength(s_stat, font=f_badge)) + 18
    ldraw.rounded_rectangle([620-tw, sy+21, 620, sy+45], radius=6, fill=(color[0], color[1], color[2], 25), outline=color, width=1)
    ldraw.text((620-tw+9, sy+26), s_stat, fill=color, font=f_badge)
    
    if idx < len(stages) - 1:
        ldraw.line([(107, sy+68), (107, sy+87)], fill=(7, 190, 184, 160), width=2)
        ldraw.ellipse([105, sy+75, 109, sy+79], fill=(20, 245, 235, 255))
        
    sy += 87

base = Image.alpha_composite(base, left_layer)

# --- RIGHT TOP: Cluster Health & Cloud Metrics ([685, 130, 1325, 385]) ---
draw_card(base, [685, 130, 1325, 385], r=14, fill=(4, 20, 26, 230), border_color=(7, 190, 184, 110))
rt_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
rtdraw = ImageDraw.Draw(rt_layer)

rtdraw.text((710, 150), 'GLOBAL CLOUD INFRASTRUCTURE', fill=(7, 190, 184, 255), font=f_badge)
rtdraw.text((710, 170), 'Kubernetes Cluster Status & Edge Performance', fill=(255, 255, 255, 255), font=f_title)

metrics = [
    ('UPTIME SLA', '99.99%', '365 Days Continuous', (16, 185, 129)),
    ('GLOBAL P95 LATENCY', '18.4 ms', 'Edge CDN PoPs (Global)', (7, 190, 184)),
    ('ACTIVE PODS', '24 / 24', 'Healthy (Auto-Scaling)', (20, 220, 190)),
]
mx = 710
for m_lbl, m_val, m_sub, m_col in metrics:
    rtdraw.rounded_rectangle([mx, 202, mx+185, 277], radius=8, fill=(3, 28, 36, 160), outline=(7, 190, 184, 60), width=1)
    rtdraw.text((mx+14, 212), m_lbl, fill=(130, 165, 170, 255), font=f_small)
    rtdraw.text((mx+14, 229), m_val, fill=m_col, font=f_title)
    rtdraw.text((mx+14, 255), m_sub, fill=(150, 180, 185, 255), font=f_small)
    mx += 200

rtdraw.text((710, 292), 'Real-Time Edge Traffic & Request Throughput (Req/Sec)', fill=(160, 195, 200, 255), font=f_small)

chart_pts = [
    (710, 355), (745, 345), (780, 350), (815, 335), (850, 340), 
    (885, 320), (920, 330), (955, 315), (990, 325), (1025, 305), 
    (1060, 320), (1095, 310), (1130, 318), (1165, 300), (1200, 310), 
    (1235, 295), (1270, 305), (1300, 290)
]
for p_idx in range(len(chart_pts)-1):
    rtdraw.line([chart_pts[p_idx], chart_pts[p_idx+1]], fill=(7, 190, 184, 220), width=2)
poly_pts = list(chart_pts) + [(1300, 365), (710, 365)]
rtdraw.polygon(poly_pts, fill=(7, 190, 184, 30))

base = Image.alpha_composite(base, rt_layer)

# --- RIGHT BOTTOM: Live Cloud Terminal ([685, 405, 1325, 715]) ---
draw_card(base, [685, 405, 1325, 715], r=14, fill=(2, 14, 18, 245), border_color=(7, 190, 184, 100))
term_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
tdraw = ImageDraw.Draw(term_layer)

tdraw.ellipse([705, 422, 717, 434], fill=(239, 68, 68, 255))
tdraw.ellipse([725, 422, 737, 434], fill=(245, 158, 11, 255))
tdraw.ellipse([745, 422, 757, 434], fill=(16, 185, 129, 255))
tdraw.text((775, 421), 'corehives-cloud-infrastructure ~ production-console (AWS us-east-1)', fill=(130, 170, 175, 255), font=f_small)

tdraw.line([(685, 445), (1325, 445)], fill=(7, 190, 184, 40), width=1)

term_lines = [
    ('$ kubectl get pods -n production --selector=tier=enterprise', (180, 220, 225), f_monob),
    ('NAME                            READY   STATUS    RESTARTS   AGE    REGION', (7, 190, 184), f_mono),
    ('web-frontend-prod-8f921-a4b2    3/3     Running   0          14d    us-east-1a', (220, 240, 245), f_mono),
    ('api-backend-core-7d310-k82p    4/4     Running   0          14d    us-east-1b', (220, 240, 245), f_mono),
    ('redis-cache-cluster-primary     1/1     Running   0          42d    us-east-1c', (220, 240, 245), f_mono),
    ('db-postgres-read-replica-01     1/1     Running   0          68d    us-east-1a', (220, 240, 245), f_mono),
    ('', (0, 0, 0), f_mono),
    ('$ aws cloudfront create-invalidation --distribution-id E38291CORE --paths "/*"', (180, 220, 225), f_monob),
    ('[OK] Invalidation request created: ID I39281KLMS (Status: Completed in 12s)', (16, 185, 129), f_mono),
    ('', (0, 0, 0), f_mono),
    ('$ terraform plan -var-file=prod.tfvars -out=tfplan', (180, 220, 225), f_monob),
    ('Plan: 0 to add, 1 to change, 0 to destroy. Zero-downtime rolling update applied.', (245, 200, 90), f_mono),
    ('[OK] Infrastructure health check passed: 100% services operational (99.99% SLA verified)', (16, 185, 129), f_monob),
]

ty = 460
for text, color, font in term_lines:
    if text:
        tdraw.text((708, ty), text, fill=color, font=font)
    ty += 18

base = Image.alpha_composite(base, term_layer)

os.makedirs('scratch', exist_ok=True)
out_png = 'scratch/devops_showcase.png'
out_webp = 'src/assets/devops-showcase.webp'
base.convert('RGB').save(out_png, 'PNG', quality=95)
base.convert('RGB').save(out_webp, 'WEBP', quality=92, method=6)
print('Devops showcase saved to src/assets/devops-showcase.webp!')
