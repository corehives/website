// Protects write routes. Reads `Authorization: Bearer <jwt>` and verifies it
// with the JWT secret. On success the decoded payload is attached to req.user.
const { verifyToken } = require("../utils/jwt");
const { error } = require("../utils/apiResponse");

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const [scheme, token] = header.split(" ");

  if (scheme !== "Bearer" || !token) {
    return error(res, "Unauthorized", 401);
  }

  try {
    req.user = verifyToken(token);
    return next();
  } catch {
    return error(res, "Unauthorized", 401);
  }
}

module.exports = auth;
