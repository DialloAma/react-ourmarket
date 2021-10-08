import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = ({click}) => {
    return (
        <nav className="nav_bar">
            <div className="logo">
                <Link to="/"/>
                <h2>OUR-MARKET</h2>
                
            </div>
            <ul className="nav_links">
                <li>
                  <a className="fas fa-shopping-cart"> </a>
                  <span className="cart_number">0</span>
                </li>
            </ul>
            <div className="menu" onClick={click}>
              <div></div>
              <div></div>
              <div></div>
            </div>
        </nav>
    );
}

export default Navbar;
