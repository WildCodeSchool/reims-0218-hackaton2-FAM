import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavbarSw extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Sous les étoiles</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/love">Ambiance</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/random">
                  Blind Love
                </NavLink>
                <NavLink href="/love-calculator">
                  Qui est l'amour de ta vie?
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Mots-clés
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><NavLink href="/genre">Genre</NavLink></DropdownItem>
                  <DropdownItem><NavLink href="/espece">Espèce</NavLink></DropdownItem>
                  <DropdownItem><NavLink href="/planete">Planète</NavLink></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarSw