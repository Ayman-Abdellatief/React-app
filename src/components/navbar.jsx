import React, { Component } from 'react';

const NavBar = props => {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <span className="badge badge-primary">
            {props.productsCount}
        </span>
     </nav>
     );
}
 
export default NavBar;