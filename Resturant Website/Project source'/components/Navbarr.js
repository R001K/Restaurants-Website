import React,{useState,useEffect,useparams} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import'./style/NavBar.css'



export default function Navbarr()
 {
  

  // const {Menu}=useparams();
  //  const navigate=useNavigate();


    
  //   navigate('/menu');}
   
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
     <img src="images/Res.png"  width="210px" height="180px"  />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="menu">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="offers">
              Offers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page"  href="about">
              AboutUs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page"  href="order">
              OrderNow
            </a>
          </li>
          
          
          
        </ul>
      </div>
    </div>
  </nav>
  
  )
}
