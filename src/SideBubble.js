import React from 'react';
import "./SideBubble.css"

const SideBubble = ({x, y, left, top, right, bottom,active,capital}) => {

    const outerCircleRadius = 50;
    const innerCircleRadius = 10;

    if(capital){
        left=left.toUpperCase()
        right=right.toUpperCase()
        top=top.toUpperCase()
        bottom=bottom.toUpperCase()
    }


    const innerCircleX =active?x * outerCircleRadius:0;
    const innerCircleY =active?y * outerCircleRadius:0;

    return (
        <div id="sideBubbleContainer" style={{opacity:active?"100%":"85%",scale:active?"1.1":"1"}}>
            <p className="letter" id="left">{left}</p>
            <p className="letter" id="top">{top}</p>
            <p className="letter" id="right">{right}</p>
            <p className="letter" id="bottom">{bottom}</p>
            <div style={{
                background: "white",
                border: "2px solid #C7DFEF",
                position: 'relative',
                width: outerCircleRadius * 2,
                height: outerCircleRadius * 2,
                borderRadius: '50%',
                backgroundColor: '#ECF0F1',

                // boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) translate(${innerCircleX}px, ${innerCircleY}px)`,
                        width: innerCircleRadius * 2,
                        height: innerCircleRadius * 2,
                        borderRadius: '50%',
                        backgroundColor: '#F6B100',
                        border:"1px solid #ECF0F1 "
                    }}
                />


            </div>
        </div>
    );
};

export default SideBubble;

