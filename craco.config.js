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
              "@primary-color": "#ED1D24",
              "@layout-header-background": "#ED1D24",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
