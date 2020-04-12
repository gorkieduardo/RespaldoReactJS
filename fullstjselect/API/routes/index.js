const express = require("express");
const router = express.Router();
const brevarioController = require("../controllers/breviariosControllers");

module.exports = function() {
  //agreva nuevos brevarios via post
  router.post("/breviarios", brevarioController.nuevoBreviario);
  //obtener todos los registros

  router.get("/breviarios", brevarioController.obtenerBreviarios);

  //obtener un registro específico

  router.get("/breviarios/:id", brevarioController.obtenerBreviario);

  //acutlizar un registro específico
  router.put("/breviarios/:id", brevarioController.acutlizarBreviario);
  //eliiminar un registro por su id
  router.delete("/breviarios/:id", brevarioController.eliminarBreviario);

  return router;
};
