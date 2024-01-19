import React from 'react';
import "./Home.css"
function Home({setPage}) {
    function goToDemo(){
        setPage("Demo")
    }
    return (
        <div>
            <section id="topSection">
                <img src="controller.png" alt=""/>
                <div id="textContainer">
                    <h1>Controller Keyboard</h1>
                    <p>Better Alternative To Conventional
                        On-Screen Keyboards For Controllers And Remotes.
                    </p>
                    <button style={{cursor:"pointer"}} onClick={goToDemo}>Try Demo</button>
                    {/*<div id="buttoncontainer"></div>*/}
                </div>
            </section>
            <section id="bottomSection">
                <h2>Our Product Offers</h2>
                <div id="offers">
                    <div className="offer">
                        <div>
                            <img src="Pen.svg" alt=""/>
                        </div>
                        <p><span style={{color:"#F6B100"}}>Custom</span>  Intuitive Design </p>
                    </div>
                    <div className="offer">
                        <div>
                            <img src="Pressure_light.svg" alt=""/>
                        </div>
                        <p><span style={{color:"#F6B100"}}>Faster</span>  Typing Speed</p>
                    </div>
                    <div className="offer">
                        <div>
                            <img src="group_share.svg" alt=""/>
                        </div>
                        <p><span style={{color:"#F6B100"}}>Support</span> For Wide Range of Devices</p>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;