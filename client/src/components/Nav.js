import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
    <nav>
        <Link to="/">Home</Link>
        <ul>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
    </nav>
);

export default Nav;