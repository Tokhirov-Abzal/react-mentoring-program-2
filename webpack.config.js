const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractPlugin = new MiniCssExtractPlugin({
  filename: "main.css",
});

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpe$g|png|svg)$/i,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      extractPlugin,
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      port: env.port,
      historyApiFallback: true,
    },
    optimization: {
      minimize: true,
    },
  };
};
