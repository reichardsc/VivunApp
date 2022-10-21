import React from "react";
import { Navbar } from "react-bootstrap";
import LogoutBtn from "./Auth/LogoutBtn";

const Header = ({ logoutHandler}) => (
  <Navbar className="justify-content-between">
    <Navbar.Brand>Vivun App</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
      <div className="userInfoContainer">
        <p>{logoutHandler._user.name}</p>
        <p>{logoutHandler._user.email}</p>
      </div>
      <div>
        <LogoutBtn logoutHandler={logoutHandler._logout} />
      </div> 
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
