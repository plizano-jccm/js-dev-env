import path from "path";
const HtmlWebpackPlugin = require('html-webpack-plugin');
import MiniCssExtractPlugin from "mini-css-extract-plugin";
//const MiniCssExtractPlugin = require ("mini-css-extract-plugin");

export default {
  mode: "production", // Indicamos que es para producción.
  devtool: "source-map", // Herramienta a utilizar. Puedes ver documentación en webpack
  // Pto de entrada para hacer el bundle. Lo hará con todas sus dependencias.
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor"),
  },
  output: { // No es realmente necesario en desarrollo, porque el bundle estará en memoria. Solo simulamos que existe
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
    })

  ], // No necesario por ahora
  module: { // Cómo manejar diferentes tipos de ficheros
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};

