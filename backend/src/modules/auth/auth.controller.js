// Controllers only call the service + apiResponse. No Prisma here.
const service = require("./auth.service");
const { success, error } = require("../../utils/apiResponse");

async function login(req, res, next) {
  try {
    const result = await service.login(req.body.username, req.body.password);
    if (!result) {
      return error(res, "Invalid username or password", 401);
    }
    return success(res, result, "Logged in");
  } catch (err) {
    return next(err);
  }
}

module.exports = { login };
