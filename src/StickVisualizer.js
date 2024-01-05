import React from 'react';

const StickVisualizer = ({x, y}) => {
    // Assuming x and y range from -1 to 1
    const outerCircleRadius = 100;
    const innerCircleRadius = 20;

    // Calculate the position of the inner circle based on x and y values
    const innerCircleX = x * outerCircleRadius;
    const innerCircleY = y * outerCircleRadius;

    return (<div style={{
        position: 'relative',
        width: outerCircleRadius * 2,
        height: outerCircleRadius * 2,
        borderRadius: '50%',
        backgroundColor: '#eee',
        border: "1px solid black", // transform:"rotate(22.5deg)"
    }}>
        <div id="sus" style={{
            position: 'relative',
            width: outerCircleRadius * 2,
            height: outerCircleRadius * 2,
            borderRadius: '50%',
            backgroundColor: '#eee',
            transform: "rotate(22.5deg)",
            background: `conic-gradient(
                #fff 0deg 45deg,
                #000 45deg 90deg,
                #fff 90deg 135deg,
                #000 135deg 180deg,
                #fff 180deg 225deg,
                #000 225deg 270deg,
                #fff 270deg 315deg,
                #000 315deg 360deg
            )`
        }}
        />

        <div
            style={{
                zIndex: "1",
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
    </div>);
};

export default StickVisualizer;

