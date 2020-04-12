
import React, { Component } from 'react'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';


import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
        <li>Valor presente:  <InlineMath> VP = S/(1+i)^n</InlineMath></li>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}





export default class Simbolos extends Component {
  render() {
    return (
      <div>
      <ModalPage />
       <h4>
         Las fórmulas más importantes de las funciones financieras son:
         <li>Interés simple:  <InlineMath> I = Pin</InlineMath></li>
         Aquí I representa el interés ganado, P el principal, i la tasa y n el tiempo.
         <li>Monto compuesto:  <InlineMath> S = P(1+i)^n</InlineMath></li>
         <li>Valor presente:  <InlineMath> VP = S/(1+i)^n</InlineMath></li>
         <li>Tasa efectiva:  <InlineMath> r = (1+(i/m))^n</InlineMath></li>
         <li>Tasa efectiva:  <InlineMath> \sqrt[5](1.5)^n  </InlineMath></li>
         <BlockMath>\int_0^\infty x^2 dx</BlockMath>
         <BlockMath>{"VP=\\frac{\\text{S}}{\\text{(1+i)}^n}"}</BlockMath>
         <BlockMath>{`\\frac{\\text{m}} {\\text{s}^2}`}</BlockMath>
        <BlockMath>{String.raw`\frac{\text{m}}{\text{s}^2}`}</BlockMath>
         </h4>

      </div>
    )
  }
}
