import React from "react"
import WorldLogo from "../images/world-logo.png"
import "../index.css"

function Navbar() {
    return (
        <nav className="navbar">
            <img src={WorldLogo} />
            <p>my travel journal.</p>
        </nav>
    );
}

export default Navbar;