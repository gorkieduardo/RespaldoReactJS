import React, { Component } from "react";
import Forms from "./sections/Forms";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { nCalcularTotal } from "./Helpers";
import Resultado from "./Resultado";

class App extends Component {
  state = {
    cantidad: "",
    tasa: "",
    plazo: "",
    modelo: "",
    calTotal: "",
  };

  datosModelo = (cantidad, tasa, plazo, modelo) => {
    const calTotal = nCalcularTotal(cantidad, tasa, plazo, modelo);

    this.setState({
      cantidad,
      tasa,
      plazo,
      modelo,
      calTotal,
    });
  };

  render() {
    const { calTotal } = this.state;
    return (
      <div className="App">
        <Forms datosModelo={this.datosModelo} />
        <Resultado calTotal={calTotal} />
      </div>
    );
  }
}
export default App;
