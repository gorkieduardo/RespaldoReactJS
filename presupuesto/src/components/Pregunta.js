import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta
}) => {
  // 1. Definios el state de cantidad o presupuesto a gastar que iniciamos en 0
  //5. Creeamos el segundo state de error

  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // 2. Función que lee el presupuesto.
  const definirPresupuesto = e => [
    guardarCantidad(parseInt(e.target.value, 10))
  ];

  // 3. Definir el submit para el presupuesto, ubidado en el form
  const agregarPrespuesto = e => {
    e.preventDefault();

    // 4. Aqui vamos a dalidar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //5. Que pasa si pasa si se pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);

    //Usamos un ternario para la validación
    //Como vamos a usarr el error en varios componetnes, vamos a crear un componente error
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPrespuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
