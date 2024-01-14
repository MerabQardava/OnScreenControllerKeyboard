import React from 'react';
import "./Home.css"
function Home(props) {
    return (
        <div>
            <section id="topSection">
                <img src="controller.png" alt=""/>
                <div id="textContainer">
                    <h1>Controller Keyboard</h1>
                    <p>Better Alternative To Conventional
                        On-Screen Keyboards For Controllers And Remotes.
                    </p>
                    <button>Try Demo</button>
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
                        <p>Custom Intuitive Design </p>
                    </div>
                    <div className="offer">
                        <div>
                            <img src="Pen.svg" alt=""/>
                        </div>
                        <p>Faster Typing Speed</p>
                    </div>
                    <div className="offer">
                        <div>
                            <img src="Pen.svg" alt=""/>
                        </div>
                        <p>Support For Wide Range of Devices</p>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;