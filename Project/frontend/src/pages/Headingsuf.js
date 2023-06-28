import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Headingsuf = () => {
  return (
    <Navbar className="mt-4" color="dark" dark>
      <Container>
        <NavbarBrand ><h1>Safari Bookings</h1></NavbarBrand>
        <Nav>
        
        </Nav>

      </Container>
    </Navbar>
  )
}