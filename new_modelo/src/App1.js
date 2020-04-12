import React, { Component } from 'react';


class Text extends Component{
    render(){
      const {
       monto,
       tasa,
       ntitle,
       //resultado
        }= this.props
  

      return (
            <div>

            {ntitle}
            
            <p>Primero tenemos un array, cuyos números son:  {monto}</p>
                
             <p>Luego multiplicamos este array por {tasa} y obtenemos  {monto*tasa}</p>
               
            
               
            </div>
      )
    }
  }

class App extends Component {
    render() {
        return (
        <div>
                <Text 
                ntitle={<h2>Esto es un arreglo</h2>}
                monto={5000}
                tasa= {3}
                resultado
                
                />
        </div>
        );
    }
}

export default App;