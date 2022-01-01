const Webpack = require("webpack");
module.exports = {
  devtool: "source-map",
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: "jquery"
    })
  ]
};