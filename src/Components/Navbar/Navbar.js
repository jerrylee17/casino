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
  DropdownToggle
} from "reactstrap";

function NavBar({ component: Component }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="navbar">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Casino</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Games">Games</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My settings
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/settings">User Settings</DropdownItem>
                <DropdownItem href="/profile">Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Log out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Component />
    </div>
  );
}

export default NavBar;
