import React from "react";
import { Navbar, NavbarBrand, Button, NavbarText } from "reactstrap";
import vovoheader from "../imgs/vovokitchen.png";

function NavBar(args) {
  return (
    <div>
      <Navbar className="navbar bg-light">
        <NavbarBrand href="/">Vovó's Kitchen</NavbarBrand>
        <NavbarText>
          <Button href="/add-plate" color="warning">
            Add New Plate
          </Button>
        </NavbarText>
      </Navbar>
      <img src={vovoheader} className="img-fluid shadow-4" alt="Homepage" />
    </div>
  );
}

export default NavBar;
