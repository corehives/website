const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./modules/auth/auth.routes");
const testimonialRoutes = require("./modules/testimonials/testimonial.routes");
const blogRoutes = require("./modules/blogs/blog.routes");
const jobRoutes = require("./modules/jobs/job.routes");
const contactRoutes = require("./modules/contact/contact.routes");
const { getSitemap } = require("./modules/sitemap/sitemap.controller");
const { errorHandler, notFoundHandler } = require("./middlewares/error.middleware");

const app = express();

// ─── CORS configuration ───────────────────────────────────────────────────────
const defaultAllowedOrigins = [
  "https://corehives.com",
  "https://www.corehives.com",
  "https://api.corehives.com",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:4173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:4173",
  "http://127.0.0.1:5174",
];

// Append any custom origins from FRONTEND_URL (supports comma-separated list)
const envOrigins = (process.env.FRONTEND_URL || "")
  .split(",")
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);

const allowedOriginsSet = new Set([...defaultAllowedOrigins, ...envOrigins]);

function isAllowedOrigin(origin) {
  // Allow requests without Origin (e.g. mobile apps, curl, server-to-server)
  if (!origin) return true;

  const normalized = origin.replace(/\/$/, "");

  if (allowedOriginsSet.has(normalized)) return true;

  // Allow all corehives.com domains and subdomains
  if (/^https?:\/\/([a-zA-Z0-9-]+\.)*corehives\.com(?::\d+)?$/i.test(normalized)) {
    return true;
  }

  // Allow any localhost / 127.0.0.1 port for development and preview
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(normalized)) {
    return true;
  }

  // Allow Vercel preview / deployment URLs
  if (/^https:\/\/[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.vercel\.app$/i.test(normalized)) {
    return true;
  }

  return false;
}

const corsOptionsDelegate = (req, callback) => {
  const origin = req.header("Origin");

  // If origin is in the allowed list, allow credentials & all standard methods
  if (isAllowedOrigin(origin)) {
    callback(null, {
      origin: true,
      credentials: true,
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "Authorization",
      ],
      exposedHeaders: ["Content-Length", "X-Request-Id"],
      optionsSuccessStatus: 200,
      maxAge: 86400,
    });
  } else if (req.method === "GET" || req.method === "HEAD" || req.method === "OPTIONS") {
    // Public read-only requests (e.g. testimonials, blogs, jobs) and preflights allowed from any origin
    callback(null, {
      origin: true,
      credentials: false,
      methods: ["GET", "HEAD", "OPTIONS"],
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
      ],
      optionsSuccessStatus: 200,
      maxAge: 86400,
    });
  } else {
    // Disallowed origin for write operations
    callback(null, { origin: false });
  }
};

app.use(cors(corsOptionsDelegate));
app.options("*", cors(corsOptionsDelegate));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ─── Root route ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CoreHives API is running",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      api: "/api/v1",
      contact: "/api/contact",
      sitemap: "/sitemap.xml",
    },
  });
});

// ─── Health check ───────────────────────────────────────────────────────────
app.get("/health", (req, res) => {
  res.json({ success: true, message: "CoreHives API is running" });
});

// ─── Sitemap route ───────────────────────────────────────────────────────────
app.get("/sitemap.xml", getSitemap);

// ─── Contact route ───────────────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);

// ─── API routes (v1) ──────────────────────────────────────────────────────────
const v1 = express.Router();
v1.use("/auth", authRoutes);
v1.use("/testimonials", testimonialRoutes);
v1.use("/blogs", blogRoutes);
v1.use("/jobs", jobRoutes);
app.use("/api/v1", v1);

// ─── Error handling ───────────────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
