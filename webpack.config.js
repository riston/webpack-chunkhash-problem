
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./index.js",
    vendors: ["./C"],
  },
  output: {
  	path: "./build",
    filename: "[name].[hash].js",
    chunkFilename: "[name][chunkhash].js",
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendors",
        minChunks: Infinity,
    }),
  ],
};
