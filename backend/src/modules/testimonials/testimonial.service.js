// Service layer — the only place that talks to Prisma for testimonials.
const prisma = require("../../config/db");

function findAllActive() {
  return prisma.testimonial.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

function findById(id) {
  return prisma.testimonial.findUniqueOrThrow({ where: { id } });
}

function create(data) {
  return prisma.testimonial.create({ data });
}

function update(id, data) {
  return prisma.testimonial.update({ where: { id }, data });
}

// Soft delete — set isActive: false
function softDelete(id) {
  return prisma.testimonial.update({
    where: { id },
    data: { isActive: false },
  });
}

module.exports = { findAllActive, findById, create, update, softDelete };
