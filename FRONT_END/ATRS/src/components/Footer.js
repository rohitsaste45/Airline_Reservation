import React from 'react';
import {Navbar,Container} from "react-bootstrap"

/**
 *
 * This component renders Footer 
 */
function Footer() {
    return (
        <div style={footerStyle.pos}>
           



            <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand className="m-auto">
        
       Copyright © All rights reserved Airline Ticket Reservations, 2021.
      </Navbar.Brand>
    </Container>
  </Navbar>
        </div>
    );
};

let footerStyle = {
    pos : {
        position : "relative"
    },
    bg : {
        background : "midnightBlue"
    }
}

export default Footer;