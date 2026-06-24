// Service layer — the only place that talks to Prisma for blogs.
const prisma = require("../../config/db");

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

function create(data) {
  const payload = { ...data };
  if (payload.isPublished && !payload.publishedAt) {
    payload.publishedAt = new Date();
  }
  return prisma.blog.create({ data: payload });
}

async function update(id, data) {
  const payload = { ...data };
  // If publishing for the first time, stamp publishedAt.
  if (payload.isPublished === true) {
    const existing = await prisma.blog.findUniqueOrThrow({ where: { id } });
    if (!existing.publishedAt) payload.publishedAt = new Date();
  }
  return prisma.blog.update({ where: { id }, data: payload });
}

// Hard delete
function remove(id) {
  return prisma.blog.delete({ where: { id } });
}

module.exports = { findPublished, findBySlug, create, update, remove };
