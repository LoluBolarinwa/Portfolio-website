import React from "react";
import Navigation from "./navigation.jsx"
import /*Icon,*/ {ReactIcon, Solidity, Css, Git, Html, Javascript, Npm} from "./icons.jsx";
import Socials from "./socials.jsx"
import Section2 from "./section2.jsx"


function Section1() {
    return (
    <div className="first-div">
            <Navigation />
            
        <section className="section-1">
            <Socials /> 

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

        </section>    
            

        <section className="section-2">
   
            <div className="skill-tools">
                <div className="icons">
    
        {/* <Icon className="icon" /> */}
                    <Html />
                    <Css />
                    <Javascript />
                    <ReactIcon />
                    <Git />
                    <Solidity />
                    <Npm />
                </div>
            </div>

            <Section2 />

            {/* </div> */}
            </section>
    </div>
    )
}

export default Section1;