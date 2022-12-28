const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
          `
      }
    }
  },
  transpileDependencies: true,
   publicPath: process.env.NODE_ENV === 'production'
    ? '/marvel/'
    : '/'
})
