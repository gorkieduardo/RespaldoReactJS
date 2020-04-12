const mongooese = require("mongoose");
const Schema = mongooese.Schema;

const breviarioSchema = new Schema({
  titulo: {
    type: String,
    trim: true,
  },
  frase: {
    type: String,
    trim: true,
  },
  afirmacion: {
    type: String,
    trim: true,
  },
  reflexiones: {
    type: String,
    trim: true,
  },
  autor: {
    type: String,
    trim: true,
  },
  fecha: {
    type: String,
    trim: true,
  },
});
module.exports = mongooese.model("Breviarios", breviarioSchema);
