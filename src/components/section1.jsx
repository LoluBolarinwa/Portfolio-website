import React from "react";
import Icon from "./icons.jsx";

import { MdAccessibilityNew } from 'react-icons/md';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
// import { MdAccessibilityNew } from 'react-icons/md';
// import { MdAccessibilityNew } from 'react-icons/md';
// import { MdAccessibilityNew } from 'react-icons/md';
// import { MdAccessibilityNew } from 'react-icons/md';

function Section1() {
    return (
        <div className="first-div">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contacts">Contacts</a></li>
                    {/* <li><a href="#"></a></li> */}
                </ul>
            </nav>

            {/* <main> */}
            <section className="section-1">



        <div class="header__socials">
            <a rel="noreferrer" href="https://twitter.com/Lolu_Bolarinwa" target="_blank">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            ></path>
            </svg>
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/lolu-bolarinwa-705258240/" target="_blank">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            ></path>
        </svg>
    </a>
    <a rel="noreferrer" href="https://github.com/LoluBolarinwa" target="_blank">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
        </svg>
    </a>
</div>

            <div className="main row">
                <div>
                <p className="name-intro">Hi, I'm</p>
                <h1 className="name">Lolu Bolarinwa</h1>
                {/* <h3>I am a <span>FrontEnd Developer</span></h3> */}
                <h1 className="job-title-intro">I am <span className="job-title">a Frontend Developer</span></h1>
                {/* <p>Blockchain Developer</p> */}

                </div>

                <div className="description">
                <p>
                A (innovative)skillful software engineer well versed in designing, building and deploying 
                modern frontend and blockchain architecture.
                I am looking forward to working for a company that aims to build next generation of 
                decentralized financial products.
                </p>
                </div>
                <div className="cv-btn">
                <button className="cv-button">Cover Letter</button>
                <button className="cv-button">Resume</button>
                </div>
            </div>
<p>write out icons for tool stack</p>
<p>make about section responsive</p>
<p>resize name to fit responsive length</p>
<p>continue web3 project from where you stopped -crypto currency with a website for it</p>
<p>-and take react modules</p>

            </section>    
            
            {/* </main> */}

            <section className="section-2">
            {/* <div className="section-2"> */}

<div>
    <div className="icons">
        {/* <Icon className="icon" /> */}
        <MdAccessibilityNew className=""/>
        <SiHtml5 className=""/>
        <SiCss3 className=""/>
        <SiJavascript className=""/>
        <SiReact className=""/>
        <MdAccessibilityNew className=""/>
        <MdAccessibilityNew className=""/>
        <MdAccessibilityNew className=""/>

        {/* <img src="../svg icons/css BLue-svgrepo-com.jpg"> */}
    </div>
</div>

            <div className="about-me-div">
            <h2 className="about-me">About <span className="me">Me.</span>
                <span className="me-underline"></span>
                <p className="about-text">
                Hi there, welcome to my Portfolio. [my] Journey into web3 
                began when I cluelessly bought bitcoin in early winter
                 of 2017 [and]forgot about it. I[later] remembered in January of 
                 2021 and sold it at an appreciated value.
                 This store of value was completely new to me and made me curious. 
                 So I researched about the type of internet architecture that kept 
                 it running, and found [Blockchain] at its heart.
                This led me down this web3 rabbit hole. 
                about[led me into] 

                about how the architecture which. So I researched it.
                facilitates the which eventually led me down this web3 rabbit hole.

                </p>
            </h2>
            
            {/* <Project />
            <Project />
            <Project /> */}

            </div>   
            {/* </div> */}
            </section>
        </div>
    )
}

export default Section1;