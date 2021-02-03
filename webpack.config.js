const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  // to tell webpack what to do TS files
  module: {
    rules: [
      {
        // this tells ts that any file which
        // ends with .ts should be handled by this rule
        test: /\.ts$/,
        // what webpack should do with this files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // there  we tell webpack which file extension it adds to imports it finds[by default - .js]
  resolve: {
    extension: [".ts", ".js"],
  },
};
