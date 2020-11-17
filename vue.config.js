process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/main.scss";'
      }
    }
  },

  pluginOptions: {},
};
