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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { currentUser, checkValidAdmin } from '../../APIFunctions/user';
=======
>>>>>>> 838d2b4... Refactor code to categorize images better (#48)
=======
import { currentUser, checkValidAdmin } from '../../APIFunctions/user';
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
=======
import { currentUser, checkValidAdmin } from '../../APIFunctions/user';
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943

function NavBar({ component: Component }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let handleLogOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("jwt-expire");
    window.location.reload(false);
  };

  let checkAdmin = () => {
    let user = currentUser();
    checkValidAdmin(user, result => {
      if (result.length) {
        setAdmin(true);
      }
    })
  }

  checkAdmin();

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
                {isAdmin ? <DropdownItem href="/admin">Admin</DropdownItem> : <></>}
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
