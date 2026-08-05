// Service layer — the only place that talks to Prisma for blogs.
const prisma = require("../../config/db");
const { generateAndSaveSitemap } = require("../sitemap/sitemap.controller");

// Public list: only published, optional category filter, paginated.
async function findPublished({ category, page = 1, limit = 10 }) {
  const where = { isPublished: true };
  if (category) where.category = category;

  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    prisma.blog.findMany({
      where,
      orderBy: [{ featured: "desc" }, { publishedAt: "desc" }, { createdAt: "desc" }],
      skip,
      take: limit,
    }),
    prisma.blog.count({ where }),
  ]);

  return { data, total };
}

function findBySlug(slug) {
  return prisma.blog.findUniqueOrThrow({ where: { slug } });
}

async function create(data) {
  const payload = { ...data };
  if (payload.isPublished && !payload.publishedAt) {
    payload.publishedAt = new Date();
  }
  const result = await prisma.blog.create({ data: payload });
  // Update sitemap asynchronously
  generateAndSaveSitemap().catch((err) => console.error("[Sitemap] Update failed on create:", err));
  return result;
}

async function update(id, data) {
  const payload = { ...data };
  // If publishing for the first time, stamp publishedAt.
  if (payload.isPublished === true) {
    const existing = await prisma.blog.findUniqueOrThrow({ where: { id } });
    if (!existing.publishedAt) payload.publishedAt = new Date();
  }
  const result = await prisma.blog.update({ where: { id }, data: payload });
  // Update sitemap asynchronously
  generateAndSaveSitemap().catch((err) => console.error("[Sitemap] Update failed on update:", err));
  return result;
}

// Hard delete
async function remove(id) {
  const result = await prisma.blog.delete({ where: { id } });
  // Update sitemap asynchronously
  generateAndSaveSitemap().catch((err) => console.error("[Sitemap] Update failed on delete:", err));
  return result;
}

module.exports = { findPublished, findBySlug, create, update, remove };
