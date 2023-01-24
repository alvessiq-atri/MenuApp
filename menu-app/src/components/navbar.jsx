import React from "react";
import { Navbar, NavbarBrand, CardImg, Button, NavbarText } from "reactstrap";
import vovoheader from "../imgs/vovokitchen.png";

function NavBar(args) {
  return (
    <div>
      <Navbar className="navbar fixed-top bg-light">
        <NavbarBrand href="/">Vovó's Kitchen</NavbarBrand>
        <NavbarText>
          <Button href="/add-plate" color="warning">
            Add New Plate
          </Button>
        </NavbarText>
      </Navbar>
      <CardImg
        alt="Vovo image"
        src={vovoheader}
        //   style={{ height: 500 }}
        top
        width="100%"
      ></CardImg>
      {/* <Header /> */}
    </div>
  );
}

export default NavBar;
