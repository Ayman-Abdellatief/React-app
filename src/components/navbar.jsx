import React, { Component } from 'react';
import {Link ,NavLink} from 'react-router-dom';

const NavBar = props => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
  
      <li className="nav-item">
        <NavLink className="nav-link" to="/menu">Menu</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link " to="/cart">Shopping Cart</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link " to="/login">Login</NavLink>
      </li>
      

    </ul>
  </div>
        <span className="badge badge-primary">
            {props.productsCount}
        </span>
     </nav>
     );
}
 
export default NavBar;