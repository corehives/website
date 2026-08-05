const fs = require("fs");
const path = require("path");
const prisma = require("../../config/db");

async function generateAndSaveSitemap() {
  try {
    // 1. Fetch published blogs from DB
    const blogs = await prisma.blog.findMany({
      where: { isPublished: true },
      select: { slug: true, updatedAt: true },
    });

    const baseUrl = process.env.FRONTEND_URL || "https://corehives.com";

    // 2. Define static routes
    const staticRoutes = [
      "",
      "/web-development",
      "/our-portfolio",
      "/mobile-app-development",
      "/contact",
      "/about",
      "/services/branding",
      "/services/illustration-animation",
      "/services/tech-staff-outsourcing",
      "/services/ai-market-optimization",
      "/services/blockchain",
      "/products/corehive-crm",
      "/products/corehive-analytics",
      "/products/corehive-automation",
      "/portfolio/mobile-app-development",
      "/portfolio/web-development",
      "/portfolio/ui-ux-design",
      "/portfolio/custom-software",
      "/portfolio/digital-marketing",
      "/portfolio/branding",
      "/careers",
      "/privacy",
      "/cookie-policy",
      "/blogs"
    ];

    // 3. Build XML structure
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static pages
    staticRoutes.forEach((route) => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}${route}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${route === "" ? "1.0" : "0.8"}</priority>\n`;
      xml += `  </url>\n`;
    });

    // Dynamic blog pages
    blogs.forEach((blog) => {
      const lastMod = blog.updatedAt 
        ? new Date(blog.updatedAt).toISOString().split('T')[0] 
        : new Date().toISOString().split('T')[0];
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/blogs/${blog.slug}</loc>\n`;
      xml += `    <lastmod>${lastMod}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    // Define target files where the sitemap should be written.
    const repoRoot = path.resolve(__dirname, "../../../..");
    const targets = [
      path.join(repoRoot, "../public_html/sitemap.xml"), // production public_html
      path.join(repoRoot, "static/sitemap.xml"),         // development static folder
      path.join(repoRoot, "public/sitemap.xml"),         // development public/dist folder
    ];

    for (const target of targets) {
      const dir = path.dirname(target);
      if (fs.existsSync(dir)) {
        try {
          fs.writeFileSync(target, xml, "utf8");
          console.log(`[Sitemap] Successfully wrote static sitemap to ${target}`);
        } catch (writeErr) {
          console.error(`[Sitemap] Failed to write sitemap to ${target}:`, writeErr);
        }
      }
    }

    return { success: true, xml };
  } catch (error) {
    console.error("Error generating sitemap:", error);
    throw error;
  }
}

async function getSitemap(req, res) {
  try {
    const { xml } = await generateAndSaveSitemap();
    res.header("Content-Type", "application/xml");
    res.status(200).send(xml);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Error generating sitemap");
  }
}

module.exports = { getSitemap, generateAndSaveSitemap };
