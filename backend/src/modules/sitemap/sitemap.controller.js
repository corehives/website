const prisma = require("../../config/db");

async function getSitemap(req, res) {
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

    // 4. Return XML with correct header
    res.header("Content-Type", "application/xml");
    res.status(200).send(xml);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Error generating sitemap");
  }
}

module.exports = { getSitemap };
