import React, { Component } from 'react';


//function Hello (props){
 // return <h2>{props.title}</h2>
//}

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render(){
    return <h2>Multiplicar 5*2 es = {this.props.title}</h2>
  }
}

class Text extends Component{
  render(){
    const {
      arrayOfNumbers,
      ntitle,
      multiply
      }= this.props

    const mapeadNumbers = arrayOfNumbers.map(this.props.multiply)
    return (
    <div>
      {ntitle}
      <p>Los numeros calculados son {mapeadNumbers.join(', ')}</p>
         
    </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
        <Hello title= {5*2}/>
        </div>

          <Text 
          arrayOfNumbers={[2, 3, 10]}
          number={2} 
          multiply={(number)=> number * 2}
          ntitle={<h1>Vamos con todo</h1>}
          />
      </div>
    );
  }
}

export default App;
