import express from "express";
import path from "path";
import open from "open";
// Importamos webpack y la configuración
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

var port = 3000;
var app = express();
// Instancia para compilar
const compiler = webpack(config);

//Utilizamos el compilador en el directorio que hemos configurado en el fichero de configuración
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
