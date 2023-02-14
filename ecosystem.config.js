module.exports = {
  apps: [
    {
      name: "Pomo",
      exec_mode: "cluster",
      instances: "max",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "dev",
      watch: true,
      autorestart: true,
    },
  ],
};
