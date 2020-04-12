import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

class Forms extends Component {
  //tengo el state
  state = {
    cantidad: "",
    tasa: "",
    plazo: "",
    modelo: "",
    calTotal: "",
  };

  //calcularModelo es del form

  calcularModelo = (e) => {
    e.preventDefault();

    const { cantidad, tasa, plazo, modelo } = this.state;
    this.props.datosModelo(cantidad, tasa, plazo, modelo);
  };

  actualizarState = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({
      [name]: Number(value),
    });
  };

  habilitarSubmit = () => {
    const { cantidad, tasa, plazo, modelo } = this.state;

    const noValido = !cantidad || !tasa || !plazo || !modelo;

    //console.log(noValido);
    return noValido;
  };

  render() {
    // const {cantidad, tasa, plazo, modelo, calTotal} =this.state;
    return (
      <contanier>
        <h3 className="h2-responsive font-weight-bold text-center my-2">
          <MDBIcon icon="calculator" size="1.2x" className="blue-text mt-4" />
          Modelos financieros
        </h3>
        <div className="row">
          <div className="col-md-4 mt-2" />

          <div className="col-md-4 mt-3">
            <form onSubmit={this.calcularModelo}>
              <label className="font-weight-bold mb-2 p-0">
                Seleccoar modelo y calcular
              </label>

              <div>
                <select
                  onChange={this.actualizarState}
                  name="modelo"
                  className="custom-select mr-sm-2"
                >
                  <option selected>Seleccionar...</option>
                  <option value="1">Interés simple</option>
                  <option value="2">Interés compuesto</option>
                  <option value="3">Valor presente</option>
                  <option value="4">Tasa efectiva</option>
                </select>
              </div>

              <div>
                <label className="font-weight-bold mb-2 p-0">Principal</label>
                <input
                  onChange={this.actualizarState}
                  type="text"
                  name="cantidad"
                  className="form-control"
                  placeholder="00"
                />
              </div>

              <div>
                <label className="font-weight-bold mb-2 p-0">
                  Tasa de interés
                </label>
                <input
                  onChange={this.actualizarState}
                  type="text"
                  name="tasa"
                  className="form-control"
                  placeholder="00"
                />
              </div>

              <div>
                <label className="font-weight-bold mb-2 p-0">
                  Plazo a pagar
                </label>
                <div>
                  <select
                    onChange={this.actualizarState}
                    name="plazo"
                    className="custom-select mr-sm-2"
                  >
                    <option selected>Seleccionar...</option>
                    <option value="1">1 año</option>
                    <option value="2">2 años</option>
                    <option value="3">3 años</option>
                    <option value="4">4 años</option>
                  </select>
                </div>
                <div>
                  <input
                    disabled={this.habilitarSubmit()}
                    type="submit"
                    value="Calcular"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>

            <div />
          </div>
          <div className="col-md-4 mt-2" />
        </div>
      </contanier>
    );
  }
}
export default Forms;
