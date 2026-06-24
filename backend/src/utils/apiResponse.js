// Standard API envelope used by every controller.
// Shapes:
//   success    → { success: true, data, message }
//   paginated  → { success: true, data, pagination: { total, page, limit, totalPages } }
//   error      → { success: false, message }

function success(res, data, message = "Success", statusCode = 200) {
  return res.status(statusCode).json({ success: true, data, message });
}

function paginated(res, data, total, page, limit) {
  return res.status(200).json({
    success: true,
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages: limit > 0 ? Math.ceil(total / limit) : 0,
    },
  });
}

function error(res, message = "Internal server error", statusCode = 500) {
  return res.status(statusCode).json({ success: false, message });
}

module.exports = { success, paginated, error };
