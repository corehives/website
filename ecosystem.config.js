module.exports = {
  apps: [
    {
      name: "corehives-api",
      script: "backend/src/server.js",
      cwd: "./",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "120M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
