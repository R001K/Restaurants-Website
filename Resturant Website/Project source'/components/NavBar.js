import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
 import'./style/NavBar.css'



export default function NavBar() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container className="container">
        <i>Dragron </i>
        <i> Bugers</i>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to ='/' href="# ">Home</Link>
            <Link to ='/Menuu.js'>Menu</Link>
            <Link to ='/Ourstory.js'>Our Story</Link>
            <Link to ='/offers.js'>Offers</Link>
            <Link to ='/location.js'>Location</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <button className='button' >
              Order Now</button>
           
  





    </div>
  )
}
