const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
      "background": "./src/background.js",
      "content": "./src/index.tsx"
  },
  // entry: "./src/index.tsx",
  mode: "none",
  module: {
    rules: [
        {
            include: path.resolve(__dirname, "src"),
            loader: "ts-loader",
            options: { transpileOnly: true },
            test: /\.tsx?$/
          }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.join(__dirname, "/dist")
  },
  plugins: [
      new webpack.EnvironmentPlugin({
          "NODE_ENV": "dev"
      }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
        chunks: ["content"]
    }),
    new CopyPlugin({patterns: ["./src/manifest.json"]}),
    new CleanWebpackPlugin()
  ]
};
