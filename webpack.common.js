const Webpack = require("webpack");
module.exports = {
  devtool: "source-map",
  entry: {
    vendor: "./src/vendor.js",
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets",
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};