import React from 'react';
import "./SideBubble.css"

const SideBubble = ({x, y, left, top, right, bottom}) => {
    // Assuming x and y range from -1 to 1
    const outerCircleRadius = 50;
    const innerCircleRadius = 10;

    // Calculate the position of the inner circle based on x and y values
    const innerCircleX = x * outerCircleRadius;
    const innerCircleY = y * outerCircleRadius;

    return (
        <div id="sideBubbleContainer">
            <p className="letter" id="left">{left}</p>
            <p className="letter" id="top">{top}</p>
            <p className="letter" id="right">{right}</p>
            <p className="letter" id="bottom">{bottom}</p>
            <div style={{
                background: "white",
                border: "1px solid black",
                position: 'relative',
                width: outerCircleRadius * 2,
                height: outerCircleRadius * 2,
                borderRadius: '50%',
                backgroundColor: '#eee',
                // boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) translate(${innerCircleX}px, ${innerCircleY}px)`, // Center the inner circle within the outer circle
                        width: innerCircleRadius * 2,
                        height: innerCircleRadius * 2,
                        borderRadius: '50%',
                        backgroundColor: 'blue',
                    }}
                />


            </div>
        </div>
    );
};

export default SideBubble;

