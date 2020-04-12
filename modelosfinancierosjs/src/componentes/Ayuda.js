import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBadge } from "mdbreact";

const FeaturesPage = () => {

  const newsStyle = {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "1.5rem"
  };

  return (
    
    <MDBCard
      className="my-2 px-5 mx-auto"
      style={{ fontWeight: 300, maxWidth: "90%" }}
    >
      <MDBCardBody style={{ paddingTop: 0 }}>
        <h2 className="h1-responsive font-weight-bold my-5 text-center">
        <MDBIcon icon="area-chart" size="1.5x" className="red-text" />
          Temas Financieros
          </h2>
        <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
         Esta sección de Temas Financieros tiene como objetivo facilitar
         el aprendizaje de las Matemáticas Financieras. Hemos selecionado
         divrsos temas del mundo real para que el estudiante haga uso de 
         las herramientas aprendidas y los aplique a los temas aquí tratados.
          </p>
        <MDBRow>
          <MDBCol md="12" lg="6" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
            <MDBRow className="mb-3">
              <MDBCol size="12">
                <a href="#!">
                  <MDBBadge color="pink">
                    <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                    Adventure
                    </MDBBadge>
                </a>
              </MDBCol>
            </MDBRow>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="font-weight-bold">
                  This is title of the news
                  </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">24 Food Swaps That Slash Calories.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">How to Make a Beet Cocktail?</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">8 Sneaky Reasons You're Always Hungry.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">5 Pressure Cooker Recipes You Need to Try.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
          </MDBCol>

         
          <MDBCol md="12" lg="6" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
            <MDBRow className="mb-3">
              <MDBCol size="12">
                <a href="#!">
                  <MDBBadge color="success">
                    <MDBIcon icon="leaf" className="pr-2" aria-hidden="true" />
                    Nature
                    </MDBBadge>
                </a>
              </MDBCol>
            </MDBRow>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="font-weight-bold">
                  This is title of the news
                  </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">
                  How to recognize the footsteps of wild animals?
                  </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">National Parks in Poland.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">Traveling without littering the planet.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">How to protect rainforests?</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default FeaturesPage;