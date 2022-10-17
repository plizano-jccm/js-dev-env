import path from "path";
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  mode: "development", // Indicamos que es para desarrollo.
  devtool: "eval-source-map", // Herramienta a utilizar. Puedes ver documentación en webpack
  entry: "./src/index.js", // Pto de entrada para hacer el bundle. Lo hará con todas sus dependencias.
  output: { // No es realmente necesario en desarrollo, porque el bundle estará en memoria. Solo simulamos que existe
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
    })

  ], // No necesario por ahora
  module: { // Cómo manejar diferentes tipos de ficheros
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }, // Podemos intetrar CSS en el bundle
    ],
  },
};
