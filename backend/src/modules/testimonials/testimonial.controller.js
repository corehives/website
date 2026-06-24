// Controllers only call the service + apiResponse. No Prisma here.
const service = require("./testimonial.service");
const { success } = require("../../utils/apiResponse");

async function getAll(req, res, next) {
  try {
    const data = await service.findAllActive();
    return success(res, data, "Testimonials fetched");
  } catch (err) {
    return next(err);
  }
}

async function getOne(req, res, next) {
  try {
    const data = await service.findById(Number(req.params.id));
    return success(res, data, "Testimonial fetched");
  } catch (err) {
    return next(err);
  }
}

async function create(req, res, next) {
  try {
    const data = await service.create(req.body);
    return success(res, data, "Testimonial created", 201);
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const data = await service.update(Number(req.params.id), req.body);
    return success(res, data, "Testimonial updated");
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const data = await service.softDelete(Number(req.params.id));
    return success(res, data, "Testimonial deleted");
  } catch (err) {
    return next(err);
  }
}

module.exports = { getAll, getOne, create, update, remove };
