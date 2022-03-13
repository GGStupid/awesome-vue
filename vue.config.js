const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variable.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3004",
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
