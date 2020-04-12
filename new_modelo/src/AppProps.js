import React, { Component} from 'react';


//primer componente Hola

class Hola extends Component {
    render(){
        return <h2>{this.props.titulo}</h2>
    }
}
//Segundo componente Texts
class Texto extends Component {
    render(){
       const { 
           ArrayOfNumber,
            multiply, 
            title
            } = this.props

        const mappedNumbers = ArrayOfNumber.map(multiply)

        return (
            <div>
                {title}
            <p>{mappedNumbers.join (', ')}</p>
            
        </div>
        ) 
    }
}
//Componente principal
class App extends Component {
    render() {
        return (
            <div > 
                
                <Hola titulo="Análisis de las Props"/>
                <Texto 
                ArrayOfNumber={[2, 3, 4,10]} 
                multiply={(number)=> number * 2}
                // number={5}
                 text="Est es un string"  
                 title= {<h1>Adelante</h1>}
                 boolean/>
            </div>
        );
    }
}

export default App;