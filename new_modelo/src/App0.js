import React, { Component } from 'react';

//nuevo componente
class Contador extends Component{
    //creamo el constructor
       constructor (){
           super()
           this.state = { contador: 1}
           setInterval(()=>{
            this.setState( { contador: this.state.contador + 1})
           }, 1000)
       }

    render(){
        return <ContadorNumero numero={this.state.contador} />
    }
}

class ContadorNumero extends Component {
    render(){
        return <span>{this.props.numero}</span>
    }
}


class App extends Component{
    render(){
        return(
            <div className= "App">
            <h3>Primer State</h3>
            <Contador />
            </div>
        );
    }
}
export default App;
