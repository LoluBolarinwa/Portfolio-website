import React from "react";
// import Project from "./project-tile";


function Section2(){
    return(
        <div className="about"><a id="About"></a>

            <div className="about-me-div">
                <h2 className="about-me">About <span className="me">Me.</span>
                    <span className="me-underline"></span>
                </h2>
                
                    <p className="about-text">
                        <p>
                        Hi, my name is Lolu. Welcome to my Portfolio! <br></br>
                        I build frontend applications using HTML, CSS, JAVASCRIPT and REACT.<br></br>
                        While the underlaying blockchain architecture is built using SOLDITY, ETHERS.js and HARDHAT. 
                        With an emphasis on migrating smart contracts to the Zero-Knowledge EVM.
                        </p>
                        <p>
                        My journey into web3 began early winter of 2017 when I cluelessly bought bitcoin
                        and forgot about it. I later on remembered in 2021 and converted it to fiat. This opened my eyes to a store of value that could transform the financial sector. It made me curious.
                        So I researched about the type of internet architecture that kept it secure and running, and found Blockchain in the middle of it all.
                        This led me down the web3 rabbit hole.
                        </p>
                        <p>
                        Over the past year, I have taken the traditional route of learning web2 technology stack intensively before diving into web3, so as to lay a solid foundation for the 
                        structure of knowledge I will subsequently acquire about this evergrowing space.
                        </p>
                       

                    </p>


                    {/* <svg class="amanda-svg" viewBox="0 0 989.89995 295.5"> */}
    {/* <path */}
        {/* id="amandabraga" */}
        {/* d="M42.75,132.75v-6.4c-14.4,0-15.8-4-11-15.8l14.8-36.8h47.2l14.8,36.8c4.8,11.8,3.4,15.8-11,15.8v6.4h60.6v-6.4c-7.8,0-15-4-19.8-15.8L94.35.75h-49v6.4c13.4,0,15,3.8,10.6,14.8l5.2-13,.2-.2-40.8,101.8c-4.8,11.8-12,15.8-19.8,15.8v6.4Zm46.8-69.4H50.75l19.4-48.4Zm112.2,69.4v-6.4c-7.2,0-10-4.8-10-17.6v-82l47.8,106h30.2l46.4-106v82c0,12.8-2.8,17.6-10,17.6v6.4h47.6v-6.4c-7.2,0-10-4.8-10-17.6v-84c0-12.8,2.8-17.6,10-17.6V.75h-13.2c-14,.2-25,1.6-33.19995,20l-43.4,99.6-44.6-99.6c-8.6-19-16-20-36-20h-13.2v6.4c7.2,0,10,4.8,10,17.6v84c0,12.8-2.8,17.6-10,17.6v6.4Zm206,0v-6.4c-14.4,0-15.8-4-11-15.8l14.8-36.8h47.2l14.8,36.8c4.8,11.8,3.4,15.8-11,15.8v6.4h60.6v-6.4c-7.8,0-15-4-19.8-15.8L459.35.75h-49v6.4c13.4,0,15,3.8,10.6,14.8l5.2-13,.2-.2-40.8,101.8c-4.8,11.8-12,15.8-19.8,15.8v6.4Zm46.8-69.4h-38.8l19.4-48.4Zm111,69.4v-6.4c-7.2,0-10-4.8-10-17.6v-83l70.8,91c10.2,13,18.4,16,38.2,16v-108c0-12.8,2.8-17.6,10-17.6V.75h-30.4v6.4c7.2,0,10,4.8,10,17.6v83l-70.8-91c-9.6-12.2-17.4-15.6-35-16h-13.2v6.4c7.2,0,10,4.8,10,17.6v84c0,12.8-2.8,17.6-10,17.6v6.4Zm187.8,0c22.4,0,66.4-7.8,66.4-66,0-58-44.00007-66-66.4-66h-62.8v6.4c7.2,0,10,4.8,10,17.6v84c0,12.8-2.8,17.6-10,17.6v6.4Zm-5.2-10.4h-20V11.15h20c28.8,0,43.99994,15.2,43.99994,55.6S776.95,122.35,748.15,122.35Zm125.6,10.4v-6.4c-14.4,0-15.8-4-11-15.8L877.55,73.75h47.20008L939.55,110.55c4.8,11.8,3.4,15.8-11,15.8v6.4h60.6v-6.4c-7.79993,0-15-4-19.79993-15.8L925.35.75h-49v6.4c13.4,0,15,3.8,10.6,14.8l5.19995-13,.20007-.2-40.8,101.8c-4.79992,11.8-12,15.8-19.79992,15.8v6.4ZM920.55,63.35H881.75005L901.15,14.95Zm-679.8,193.6c0-20.2-10.8-30.2-24.2-35,11.2-4.8,19-13.4,19-29.2,0-32-28.2-32-56-32h-58v6.4c7.2,0,10,4.8,10,17.6v84c0,12.8-2.8,17.6-10,17.6v6.4h62C208.55,292.75,240.75,292.95,240.75,256.95Zm-63.36734-39.80087L159.15,217.15v-46h17.6c21.2,0,31.2,2.8,31.2,23,0,19.998-9.801,22.94226-30.56736,22.99915ZM181.95,282.35h-22.8v-54.8h22.8c21.2,0,31.2,7.2,31.2,27.4S203.15,282.35,181.95,282.35Zm122.4,10.4v-6.4c-7.2,0-10-4.8-10-17.6v-44.4h2.6c27.4,0,29.6,5.6,35.8,35.6,6.4,30.8,26,32.8,55.6,32.8v-6.4c-10.6,0-19-4-26-32-4-16.4-12.6-26.2-23.6-32.2,14-3.2,26.4-11,26.4-30.2,0-31.2-33-31.2-51.6-31.2h-56.8v6.4c7.2,0,10,4.8,10,17.6v84c0,12.8-2.8,17.6-10,17.6v6.4Zm8.8-78.8h-18.8v-42.8h18.8c15.2,0,24.4,6.8,24.4,21.6S328.35,213.95,313.15,213.95Zm136.53-32.327,5.07-12.673.2-.2-40.8,101.8c-4.8,11.8-12,15.8-19.8,15.8v6.4h42v-6.4c-14.4,0-15.8-4-11-15.8l14.8-36.8h47.2l14.8,36.8c4.8,11.8,3.4,15.8-11,15.8v6.4h60.6v-6.4c-7.8,0-15-4-19.8-15.8l-44-109.8h-49v6.4c13.132,0,14.93127,3.64954,10.85675,14.14862Zm33.47,41.727h-38.8l19.4-48.4Zm149.6,71.4c21,0,41.4-5.2,58.4-22.6v-16.8c0-12.6,4-17.2,15.2-16.4l.6-6.4-72.4-5.2-.4,6.4c20.8,1.4,29.4,7,29.4,19.6v22c-9.2,6.6-18,9-30.8,9-26.8,0-41.4-19.6-41.4-57.6s13.6-57.6,42.2-57.6c22.6,0,33.8,13.6,31.8,34.8l27.6,4c1-30.4-19.6-49.2-59.4-49.2-42.4,0-69.8,27-69.8,68S586.95,294.75,632.75,294.75Zm124.2-2v-6.4c-14.4,0-15.8-4-11-15.8l14.8-36.8h47.2l14.8,36.8c4.79992,11.8,3.3999,15.8-11,15.8v6.4h60.6v-6.4c-7.8,0-15-4-19.8-15.8l-44-109.8h-49v6.4c13.4,0,15,3.8,10.6,14.8l5.2-13,.2-.2-40.8,101.8c-4.8,11.8-12,15.8-19.8,15.8v6.4Zm46.8-69.4h-38.8l19.4-48.4Z" */}
        {/* // style="stroke-dasharray: 433.212, 0; opacity: 1;" */}
    {/* ></path> */}
{/* // </svg> */}
            
            {/* <Project />
            <Project />
            <Project /> */}

            </div>            
        </div>   
    )
}

export default Section2;
// {/* <Project />*/}
// {/* <Project /> */}
// {/* <Project /> * */}