import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControPresupuesto from "./components/ControPresupuesto";

function App() {
  //definir dos states, presupuesto y restante
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  //cuando agreguenos un nuevo gasto

  const agregarNuevoGasto = gasto => {
    guardarGastos([...gastos, gasto]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>

              <div className="one-half column"></div>
              <Listado gastos={gastos} />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
