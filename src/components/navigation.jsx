import React from "react";
// import script from "./script";

// const navbarSVG = document.querySelector(".navbarsvg");
// const navbarList = document.querySelector(".navbar-list");
// const active = document.querySelector(".active");

// navbarSVG.addEventListener("click", ()=>{
//     navbarSVG.classList.toggle("active")
//     navbarList.classList.toggle("active")
// });

function Navigation(){
    return (
        <nav className="navbar">
                <ul className="navbar-list active">
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

