const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

module.exports = {
  devServer: {
    /**
     * 127.0.0.1 / localhost : 192.168.11.x hotreload 가 안되는 경우가 발생한다. */
    host: '0.0.0.0',
    disableHostCheck: true
  },
  // baseUrl: '/dynamic-network',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  // The source of CKEditor is encapsulated in ES6 modules. By default, the code
  // from the node_modules directory is not transpiled, so you must explicitly tell
  // the CLI tools to transpile JavaScript files in all ckeditor5-* modules.
  transpileDependencies: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],

  configureWebpack: {
    plugins: [
      // CKEditor needs its own plugin to be built using webpack.
      new CKEditorWebpackPlugin({
        // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        language: 'en'
      })
    ],
    performance: { hints: false }
  },

  css: {
    loaderOptions: {
      // Various modules in the CKEditor source code import .css files.
      // These files must be transpiled using PostCSS in order to load properly.
      postcss: styles.getPostCssConfig({
        themeImporter: {
          themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
        },
        minify: true
      })
    }
  },

  chainWebpack: config => {
    // Vue CLI would normally use its own loader to load .svg files. The icons used by
    // CKEditor should be loaded using raw-loader instead.
    config.module
      .rule('svg')
      .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
      .use('file-loader')
      .loader('raw-loader');
  }
};
