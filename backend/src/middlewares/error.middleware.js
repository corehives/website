// Global error handler — catches anything passed to next(err).
// Maps known Prisma error codes to friendly HTTP statuses.
const { error } = require("../utils/apiResponse");

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";

  // Prisma known request errors
  if (err.code === "P2025") {
    statusCode = 404;
    message = "Resource not found";
  } else if (err.code === "P2002") {
    statusCode = 409;
    const target = err.meta && err.meta.target ? ` (${err.meta.target})` : "";
    message = `Resource already exists${target}`;
  }

  if (statusCode === 500 && process.env.NODE_ENV !== "development") {
    message = "Internal server error";
  }

  const payload = { success: false, message };
  if (process.env.NODE_ENV === "development" && err.stack) {
    payload.stack = err.stack;
  }

  return res.status(statusCode).json(payload);
}

// 404 fallback for unmatched routes
function notFoundHandler(req, res) {
  return error(res, `Route not found: ${req.method} ${req.originalUrl}`, 404);
}

module.exports = { errorHandler, notFoundHandler };
