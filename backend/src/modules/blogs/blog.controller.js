// Controllers only call the service + apiResponse. No Prisma here.
const service = require("./blog.service");
const { success, paginated } = require("../../utils/apiResponse");

async function getAll(req, res, next) {
  try {
    const category = req.query.category || undefined;
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 10));

    const { data, total } = await service.findPublished({ category, page, limit });
    return paginated(res, data, total, page, limit);
  } catch (err) {
    return next(err);
  }
}

async function getOne(req, res, next) {
  try {
    const data = await service.findBySlug(req.params.slug);
    return success(res, data, "Blog fetched");
  } catch (err) {
    return next(err);
  }
}

async function create(req, res, next) {
  try {
    const data = await service.create(req.body);
    return success(res, data, "Blog created", 201);
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const data = await service.update(Number(req.params.id), req.body);
    return success(res, data, "Blog updated");
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    await service.remove(Number(req.params.id));
    return success(res, null, "Blog deleted");
  } catch (err) {
    return next(err);
  }
}

module.exports = { getAll, getOne, create, update, remove };
