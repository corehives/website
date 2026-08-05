const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
const app = require("./app");
const prisma = require("./config/db");
const { generateAndSaveSitemap } = require("./modules/sitemap/sitemap.controller");

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`CoreHives API listening on http://localhost:${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
  
  // Generate sitemap on startup
  generateAndSaveSitemap().catch((err) => {
    console.error("Failed to generate sitemap on startup:", err);
  });
});

// Graceful shutdown
async function shutdown(signal) {
  console.log(`\n${signal} received — shutting down...`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
