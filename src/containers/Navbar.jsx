import React from "react";
import {Link} from "react-router-dom";
import "./nav.css"

function Navbar(){
    return(
        <nav>
        <div id="nav">
            <Link to="/" >
                <h1 id="logo">VisionStreams</h1>
            </Link>
        </div>
        </nav>
    )
}

export default Navbar;