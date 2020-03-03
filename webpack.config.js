import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";

module.exports = {
  // Where to start
  entry: path.join(__dirname, "src", "index.js"),
  // Where to store bundle
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js"
  },
  // Mode of running
  mode: process.env.NODE_ENV || "development",
  // Import stuff without absolute path
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  // Server, what we want to be served
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  // JS injects automatically
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  }
};
