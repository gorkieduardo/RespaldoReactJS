import React, { Component } from 'react';
import DesarrolloApp  from './DesarrolloApp';
import { MDBIcon } from "mdbreact";

class Desarrollo extends Component {
    render() {
        return (
            <div className="container ">
              <h2 className="h2-responsive font-weight-bold text-center mt-5">
              <MDBIcon icon="area-chart" size="1.5x" className="green-text" />
                Los Fundamentos 
              </h2>
              <p className="text-center w-responsive mx-auto mb-5">
                    Las Matemáticas Financieras son  herramientas de gran utilidad    	
                    en la vida cotidiana. Su objeto de estudio es el valor del              	
                    dinero en el tiempo, el análisis del capital y las tasas de interés. 
                    Se pretende con estos procedimiento un rendimiento     	
                    óptimo de  las inversiones financieras o reales, a través de métodos de 
                    evaluación que permiten tomar decisiones de inversión óptimas.

              </p>
               <div className="card-columns mt-4">
               {Object.keys(this.props.conceptos)
               .map(concepto => (
                   <DesarrolloApp 
                    informacion={this.props.conceptos[concepto]}
                    key={concepto}
                   />
               )) }
               </div>
            </div>
        );
    }
}

export default Desarrollo;