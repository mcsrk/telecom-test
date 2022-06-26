const CracoLessPlugin = require("craco-less");
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#e62429",
              "@layout-header-background": "#202020",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
