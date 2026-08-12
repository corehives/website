const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../../.env"),
});

const app = require("./app");
const prisma = require("./config/db");
const {
  generateAndSaveSitemap,
} = require("./modules/sitemap/sitemap.controller");

const PORT = Number(process.env.PORT) || 5000;

let server;
let shuttingDown = false;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");

    server = app.listen(PORT, "0.0.0.0", () => {
      console.log(`CoreHives API listening on port ${PORT}`);
      console.log(
        `Environment: ${process.env.NODE_ENV || "development"}`
      );

      generateAndSaveSitemap().catch((error) => {
        console.error("Sitemap generation failed:", error);
      });
    });
  } catch (error) {
    console.error("API startup failed:", error);
    await prisma.$disconnect().catch(() => {});
    process.exit(1);
  }
}

async function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;

  console.log(`${signal} received. Shutting down...`);

  const forceShutdownTimer = setTimeout(() => {
    console.error("Graceful shutdown timed out");
    process.exit(1);
  }, 10000);

  forceShutdownTimer.unref();

  try {
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) reject(error);
          else resolve();
        });
      });
    }

    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Shutdown failed:", error);
    process.exit(1);
  }
}

process.once("SIGINT", () => shutdown("SIGINT"));
process.once("SIGTERM", () => shutdown("SIGTERM"));

startServer();