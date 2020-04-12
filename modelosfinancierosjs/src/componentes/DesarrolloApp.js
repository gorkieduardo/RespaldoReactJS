import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';

const DesarrolloApp = (props) => {
        const {imagen, nombre, intro, id } = props.informacion;
        return (
   
        <div className="card-columns mt-3">
          <Card style={{ width: "22rem" }}>
          
            <CardImage 
            className="img-fluid" src={`img/${imagen}.jpg`} alt={nombre}>
            </CardImage>
               
                <CardBody>
                    <CardTitle>{nombre}</CardTitle>
                    <CardText>{intro}</CardText>
                    <Link to={`/desarrollo/${id}`}>Ampliación del tema</Link>
                   </CardBody>
                   </Card>
            </div>
       
        )
    }

export default DesarrolloApp;