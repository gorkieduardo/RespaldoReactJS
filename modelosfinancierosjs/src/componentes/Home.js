import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";


const Home = () => {
  return (
   
    <MDBContainer>
      <MDBCardBody>
        <h3 className="h2-responsive font-weight-bold text-center my-1">
        
        <MDBIcon icon="line-chart" size="1.5x" className="blue-text"/>
          Matemáticas Financieras 
        </h3>
        <p className="font-weight-bold mb-3 text-center red-text" >Times is money</p>
            <p className="text-center w-responsive mx-auto mb-5">
            Las Matemáticas Financieras son un conjunto de herramientas que se aplican   	
            en muchas área de la vida cotidiana. Su objeto de estudio es el valor del              	
            dinero en el tiempo, el análisis del capital y las tasas  de 	interés. 
            Se pretende con estos procedimiento un rendimiento     	
            óptimo de  las inversiones financieras o reales, a través de métodos de 
            evaluación que permiten tomar decisiones de inversión con administración
            de riesgos.
            </p>

        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="/img/card1.jpg" alt="logo imagen"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                
                Dinero
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>La tasa de interés</strong>
            </h3>
            <p>
            El interés es una cuota que se paga por usar dinero prestado o invertido. Pagamos interés
            sobre las hipotecas por utilizar el dinero del banco. Usamos el dinero del banco para pagar
            a un contratista o a una persona a quien compramos una casa. De modo similar, el banco
            nos paga interés sobre el dinero invertido en cuentas de ahorros o certificados de depósito
            porque tiene acceso temporal a nuestro dinero.
            </p>
           
            <MDBBtn color="success" size="md" className="waves-light ">
              Leer más
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Finanzas
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Tasa de interés y capital</strong>
            </h3>
            <p>
            La cantidad de dinero que se presta o invierte recibe el nombre de capital. Por lo general, 
            se paga el interés en proporción al capital y el tiempo que se usa el dinero. La tasa de interés 
            especifica la tasa con que se acumula el interés. Normalmente, la tasa de interés se expresa como
            un porcentaje del capital por periodo; por ejemplo, 18% por año o 1.5% por mes.
            </p>
           
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="/img/card2.jpg" alt="logo imagen"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="/img/card3.jpg" alt="logo imagen"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Interés
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>El interés compuesto, concepto clave</strong>
            </h3>
            <p>
            Para conseguir un dominio de las Matemáticas Financieras se requiere comprender básicamente 
            el concepto de interés, especialmente el interés compuesto, un concepto asociado a las funciones
            exponenciales.  Un repaso de las funciones exponenciales es necesario para una mayor comprensión del tema.
            Entendido esto, el resto de los conceptos y fórmulas de las Matemáticas Financierasse comprenderá con 
            mucha más facilidad.

            </p>
            
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
          
        </MDBRow>
        
        <MDBRow className="mt-5">
            <h3 className="text-center w-responsive mx-auto mb-3 ">
              <strong>Variables de las funciones financieras</strong>
            </h3>
        
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                El capital o el principal, la tasa de interés y el tiempo, son las tres variables
                fundamentales de las funciones financieras. A partir de estas tres variables,
                se fundamentan las Matemáticas Financieras.
            </p>
        </MDBRow>
        
    <MDBRow className="mt-3">
        <MDBCol md="4">
          <MDBIcon icon="area-chart" size="3x" className="red-text" />
          <h5 className="font-weight-bold my-4">Capital</h5>
          <p className="grey-text mb-md-0 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p>
      </MDBCol>
    <MDBCol md="4">
      <MDBIcon icon="book" size="3x" className="cyan-text" />
      <h5 className="font-weight-bold my-4">Tasa de interés</h5>
      <p className="grey-text mb-md-0 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Reprehenderit maiores aperiam minima assumenda deleniti hic.
      </p>
    </MDBCol>
    <MDBCol md="4">
      <MDBIcon icon="comments-o" size="3x" className="orange-text" />
      <h5 className="font-weight-bold my-4">Tiempo</h5>
      <p className="grey-text mb-md-0 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Reprehenderit maiores aperiam minima assumenda deleniti hic.
      </p>
    </MDBCol>
            

        </MDBRow>
      </MDBCardBody>
    </MDBContainer>

    
  );

 
  


}

export default Home;