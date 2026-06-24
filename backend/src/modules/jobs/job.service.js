// Service layer — the only place that talks to Prisma for jobs.
const prisma = require("../../config/db");

// Public list: active jobs whose expiry is in the future or unset.
function findAllActive() {
  return prisma.job.findMany({
    where: {
      isActive: true,
      OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
    },
    orderBy: { createdAt: "desc" },
  });
}

function findById(id) {
  return prisma.job.findUniqueOrThrow({ where: { id } });
}

function create(data) {
  return prisma.job.create({ data });
}

function update(id, data) {
  return prisma.job.update({ where: { id }, data });
}

// Soft delete — set isActive: false
function softDelete(id) {
  return prisma.job.update({ where: { id }, data: { isActive: false } });
}

module.exports = { findAllActive, findById, create, update, softDelete };
