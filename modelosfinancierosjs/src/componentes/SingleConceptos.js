import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import { MDBContainer } from "mdbreact";
import { MDBListGroup, MDBListGroupItem,  } from "mdbreact";

const SingleConceptos = (props) => {

     if(!props) return null;

     const {imagen, nombre, intro, descripcion} = props.desarrollo;
     
     return (
     <div className="row">
        <div className="col-md-4 mt-0">
        <MDBContainer>
               <MDBListGroup style={{ width: "19.4rem" }}>
               <MDBListGroupItem href="#" active>Cras justo odio</MDBListGroupItem>
               <MDBListGroupItem href="#" hover>Dapibus ac facilisis in</MDBListGroupItem>
               <MDBListGroupItem href="#" hover>Morbi leo risus</MDBListGroupItem>
               <MDBListGroupItem href="#" hover>Porta ac consectetur ac</MDBListGroupItem>
               <MDBListGroupItem href="#" disabled>Vestibulum at eros</MDBListGroupItem>
               </MDBListGroup>
        </MDBContainer>
       

            </div>
     <div className="col-md-8">
          
          <Col className="my-1 px-1 pb-1">
          <Card style={{ width: "22rem" }}>
          <CardImage
            className="img-fluid"
                     src={`/img/${imagen}.jpg`} alt={nombre} 
                   
               />

               <CardBody>
                    <CardTitle>{nombre}</CardTitle>
                    <CardText className="pr-2">{intro}</CardText>
                    <br></br>
                    <CardText>{descripcion}</CardText>
                    <Button color="success" >
                    <Link to={`/desarrollo`} size="md" className="white-text">Regresar</Link>
                    </Button>
              </CardBody>
               </Card>
               </Col>
          </div>
          <div className="col-md-0 mt-4">
              
          </div>
          </div>
     )
}
 
export default SingleConceptos;