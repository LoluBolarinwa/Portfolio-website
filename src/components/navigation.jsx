import React from "react";

function Navigation(){
    return (
        <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contacts">Contacts</a></li>
                    {/* <li><a href="#"></a></li> */}
                </ul>
            </nav>

    )
}

export default Navigation;

