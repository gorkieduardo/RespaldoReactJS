import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink,
   NavbarToggler, Collapse, Fa } from "mdbreact";


class Navegacion extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar color="default-color" dark expand="md" style={{marginTop: "1px"}}>
          <NavbarBrand>
            <strong className="white-text">CEED</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink activeClassName="activeClass" to={'/'}>Home </NavLink>
              </NavItem>
              <NavItem >
                <NavLink activeClassName="activeClass"  to={'/gallery'}>Slides</NavLink>
              </NavItem>
              <NavItem >
                <NavLink activeClassName="activeClass" to={'/desarrollo'}>Contenido</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink activeClassName="activeClass" to={'/modelo'}>Calcular</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="activeClass" to={'/ayuda'}>Ayuda</NavLink>
              </NavItem>
              <NavItem>
                
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink className="waves-effect waves-light" to={'/profile'}><Fa icon="user" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="waves-effect waves-light" to={'/profile'}><Fa icon="twitter" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa icon="facebook" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa icon="youtube" /></NavLink>
              </NavItem>
              
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default Navegacion;