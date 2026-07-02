const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const authRoutes = require("./modules/auth/auth.routes");
const testimonialRoutes = require("./modules/testimonials/testimonial.routes");
const blogRoutes = require("./modules/blogs/blog.routes");
const jobRoutes = require("./modules/jobs/job.routes");
const contactRoutes = require("./modules/contact/contact.routes");
const { errorHandler, notFoundHandler } = require("./middlewares/error.middleware");

const app = express();

// ─── Core middleware ──────────────────────────────────────────────────────────
const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ─── Health check ───────────────────────────────────────────────────────────
app.get("/health", (req, res) => {
  res.json({ success: true, message: "CoreHives API is running" });
});

// ─── Contact route ───────────────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);

// ─── API routes (v1) ──────────────────────────────────────────────────────────
const v1 = express.Router();
v1.use("/auth", authRoutes);
v1.use("/testimonials", testimonialRoutes);
v1.use("/blogs", blogRoutes);
v1.use("/jobs", jobRoutes);
app.use("/api/v1", v1);

// ─── Static files & SPA routing ──────────────────────────────────────────────
app.use(express.static(path.join(__dirname, "../../public")));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api") || req.path.startsWith("/health")) {
    return next();
  }
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// ─── Error handling ───────────────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
