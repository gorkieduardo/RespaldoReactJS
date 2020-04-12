import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-5">
      
        <h3 className="h1-responsive font-weight-bold text-center my-2">
        <MDBIcon icon="area-chart" size="1.5x" className="blue-text" />
          Acerca del autor
        </h3>
        <MDBCol>
            <img src="/img/eduweb.jpg" className="rounded mx-auto d-block" alt="aligment" 
            style={{width: "200px"}}/>
            />
          </MDBCol>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Eduaro Estrada Montenegro es escritor y desarrolldor de aplicaciones
          educativas. Es un investigador e innovador de procesos dee esneñanza 
          aprendizaje. La lectura, la redacción, el cálculo matemático y el diseño, 
          son parte esencial en el proceso de enseñanza y el uso de las nuevs 
          tecnologías.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
          <MDBRow>
          
      </MDBRow>
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
              
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Leer en la era digital</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Redactar & Calcular</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="mail-forward" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Técnicas para procesar información</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
              
            </MDBRow>
          </MDBCol>
        </MDBRow>

        
      </section>
  );

  
}

export default FeaturesPage;