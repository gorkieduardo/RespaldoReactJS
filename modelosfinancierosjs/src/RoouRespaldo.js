import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Navegacion from './componentes/Navegacion';
import Desarrollo from './componentes/Desarrollo';
import Ayuda from './componentes/Ayuda';
import Error from './componentes/Error';
import SingleConceptos from './componentes/SingleConceptos';
import infoConceptos from './datos/datos.json';
import Profile from './componentes/Porfile';
import Footer from './componentes/Footer';
import Gallery from './componentes/Gallery';
import Simbolos from './componentes/Simbolos';
import Modelo from './componentes/Modelo';
import { nCalcularTotal } from './componentes/Helpers';
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensaje';
import Spinner from './componentes/Spinner';



class Router extends Component {

    state = {
        conceptos : [],
        cantidad:'',
        tasa: '',
        plazo:'',
        modelo:'',
        calTotal: '',
        cargando: false 
    }

    
    componentWillMount(){
        this.setState({
            conceptos : infoConceptos,
           
        })
    }

    datosModelo = (cantidad, tasa, plazo, modelo)=>{
       
    const calTotal=  nCalcularTotal(cantidad, tasa, plazo, modelo);
    //nuevo setState para datos
   this.setState({
       cargando: true
   }, ()=>{
       setTimeout(()=>{
        this.setState({
            cantidad,
            tasa,
            plazo,
            modelo,
            calTotal,
            cargando:false
        })
        },1500);
       })
   }
   
   

    render() {
        const {cantidad, tasa, plazo, modelo, calTotal, cargando} =this.state;
        
        let componente;

        if(calTotal === '' && !cargando) {
            componente = <Mensaje />
        }else if(cargando){
            componente=   <Spinner/>
      
        } else {
            componente= <Resultado  
            cantidad= {cantidad}
            tasa= {tasa}
            plazo= {plazo}
            modelo= {modelo}
            calTotal= {calTotal}
            />
            }

        return (
            <BrowserRouter>
            <div className="contenedor">
            
            <Navegacion />
            <Header />

                <Switch>
                <Route exact path="/" render ={()=>(
                        <Home
                        /> 
                    )}/>

                    
                    <Route exact path="/desarrollo" render ={()=>(
                        <Desarrollo
                        conceptos ={this.state.conceptos}
                        
                        /> 
                    )}/>

                    <Route exact path="/navegacion" component={Navegacion} />
                    
                    <Route exact path="/ayuda" component={Ayuda} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/simbolos" component={Simbolos} />
                   
                    
                    <Route exact path="/desarrollo/:desarrolloId" render={(props) => {
                      
                      let idDesarrollo = props.location.pathname.replace('/desarrollo/', '');
                      return (
                        <SingleConceptos
                             desarrollo={this.state.conceptos[idDesarrollo]}
                            key={idDesarrollo}
                        />
                   )
                     } }/>

                    <Modelo 
                        datosModelo={this.datosModelo}
                    /> 
                    <Route component={Error} />    
                </Switch>
               
                  <div>
                      {componente}
                  </div>
                
                <Footer />
            </div>
            </BrowserRouter>
        );
    }
}

export default Router;