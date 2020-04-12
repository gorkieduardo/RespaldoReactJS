const Breviario = require("../models/Breviarios");

//cuando se crea un nuevo breviario
exports.nuevoBreviario = async (req, res, next) => {
  //insertar en la base de datos
  // console.log(req.body);
  //crear objeto
  const breviario = new Breviario(req.body);

  try {
    await breviario.save();
    res.json({ mensaje: "El mensaje se agregó correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};
//obtenr breviairos
exports.obtenerBreviarios = async (req, res, next) => {
  try {
    const brevarios = await Breviario.find({});
    res.json(brevarios);
  } catch (error) {
    console.log(error);
    next();
  }
};
//obtener breviario id
exports.obtenerBreviario = async (req, res, next) => {
  try {
    const breviario = await Breviario.findById(req.params.id);
    res.json(breviario);
  } catch (error) {
    console.log(error);
    next();
  }
};
//actualizar brevario

exports.acutlizarBreviario = async (req, res, next) => {
  try {
    const breviario = await Breviario.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true
      }
    );
    res.json(breviario);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarBreviario = async (req, res, next) => {
  try {
    await Breviario.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: "El registro fue eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
