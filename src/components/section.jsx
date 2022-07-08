import React from "react";

function Section() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contacts">Contacts</a></li>
                    {/* <li><a href="#"></a></li> */}
                </ul>
            </nav>
            <main>
            <section className="section-1">

            <div className="main">
                <div>
                <p className="name-intro">Hi, I'm</p>
                <h1 className="name">Lolu Bolarinwa</h1>
                {/* <h3>I am a <span>FrontEnd Developer</span></h3> */}
                <h1>I am <span className="job-title">a Frontend Developer</span></h1>
                {/* <p>Blockchain Developer</p> */}

                </div>

                <div className="description">
                <p>
                A skillful software engineer well versed in designing, building and deploying 
                modern frontend and blockchain architecture.
                I have critical interest in working for a company that aims to build next generation of 
                decentralized financial products.
                </p>

                </div>
            </div>

            </section>    
            <div className="section-2">
                {/* <h1>Lolu Bolarinwa</h1> */}
            </div>    
            </main>
        </div>
    )
}

export default Section;