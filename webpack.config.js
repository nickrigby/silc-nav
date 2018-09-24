const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const extractSass = new MiniCSSExtractPlugin({
  filename: "index.css"
});

const config = {
  entry: "./src/js/demo.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build'),
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json"
  },
  resolve: {
    extensions: ['.js', '.json', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1000
        }
      }
    ]
  },
  plugins: [
    extractSass
  ]
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devServer = {
      hot: true,
      publicPath: "/build"
    };
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(argv)
    })
  );

  return config;

};
