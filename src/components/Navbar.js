import React from "react";
import { NavLink } from 'react-router-dom'
import "../style/Navbar.css"

const Navbar = () => {
    return (
    <div> 
        <nav>
        <ul>
         <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        </ul>
        </nav>

    </div>
    );
}

export default Navbar;