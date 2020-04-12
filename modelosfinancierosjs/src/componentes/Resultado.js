import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Resultado = (props)=>{
    
    return(
    
   <div className="row">
    <div className="col-md-4 mt-5">
        
    </div>

    <div className="col-md-4 mt-5">
     <MDBCol >
      <MDBCard style={{ width: "22rem" }}>
        
        <MDBCardBody>
          <MDBCardTitle>Resultado de cálculos</MDBCardTitle>
          <MDBCardText>
          Capital: {props.cantidad}
          </MDBCardText>
          <MDBCardText>
          Tasa(%): {props.tasa}
          </MDBCardText>
          <MDBCardText>
          Plazo(Años): {props.plazo}
          </MDBCardText>
          <MDBCardText>
          Total US$: {props.calTotal}
          </MDBCardText>
          <MDBBtn>Reset
            
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>

    <div className="col-md-4 mt-5">

    </div>
    </div>

   
    );
}
export default Resultado;