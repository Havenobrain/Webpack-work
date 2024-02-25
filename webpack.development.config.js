const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        hot: true,
        watchFiles: ["src/**/*"],
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src/index.html") })],
};
