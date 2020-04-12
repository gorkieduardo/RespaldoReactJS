import React, { Component } from 'react';



class LoginButton extends Component {
    render() {
        return <button>Iniciar sesión</button>
        }
    }

class LogoutButton extends Component {
    render() {
        return (
     <div>
        <p>Bienvenido, usuario</p>
        <button>Cerrar sesión</button>
    </div>
        )
    }
}
    

 class CondicionalSection extends Component {
    constructor(){
        super();
        this.state = { isUserLogedd:false }
    }

    render() {
        return (
            <div>
                <h4>Condicional Rendering</h4>
               { this.state.isUserLogedd 
                ? <LogoutButton /> 
                : <LoginButton />}
            </div>
        )
    }
}

export default CondicionalSection;