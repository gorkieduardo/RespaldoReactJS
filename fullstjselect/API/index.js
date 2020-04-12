const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

//crear el servidor
const app = express();

//habilitar cors
app.use(cors());

//conectar a mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/misbreviarios", {
  useNewUrlParser: false,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//habilitar el bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//habilitar routing
app.use("/", routes());

//puerto y arrancar el servidor

app.listen(4000, () => {
  console.log("Servidor funcionando");
});
