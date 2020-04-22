import React, { useState } from "react";
import "./navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import BlitsIcon from '../../Images/Landing/icon-white.png';

function NavBar({ component: Component }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let handleLogOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("jwt-expire");
    window.location.reload(false);
  };

  return (
    <div id="navbar">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src={BlitsIcon} alt="" height="50" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/games">Games</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">Shop</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Settings
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/settings">User Settings</DropdownItem>
                <DropdownItem href="/profile">Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogOut}>Log out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Component />
    </div >
  );
}

export default NavBar;
