import React from 'react';

const StickVisualizer = ({x, y,value}) => {
    // Assuming x and y range from -1 to 1
    const outerCircleRadius = 100;
    const innerCircleRadius = 20;

    // Calculate the position of the inner circle based on x and y values
    const innerCircleX = x * outerCircleRadius;
    const innerCircleY = y * outerCircleRadius;
    // console.log(value);

    return (<div style={{
        position: 'relative',
        width: outerCircleRadius * 2,
        height: outerCircleRadius * 2,
        borderRadius: '50%',
        backgroundColor: '#ECF0F1',
        border: "2px solid #C7DFEF", // transform:"rotate(22.5deg)"
    }}>
        <div id="sus" style={{
            position: 'relative',
            width: outerCircleRadius * 2,
            height: outerCircleRadius * 2,
            borderRadius: '50%',
            backgroundColor: '#3498DB',
            transform: "rotate(22.5deg)",
            background: `conic-gradient(
                #${value===4?"ECF0F1":"3498DB"} 0deg 45deg,
                #${value===5?"ECF0F1":"3498DB"} 45deg 90deg,
                #${value===6?"ECF0F1":"3498DB"} 90deg 135deg,
                #${value===7?"ECF0F1":"3498DB"} 135deg 180deg,
                #${value===8?"ECF0F1":"3498DB"} 180deg 225deg,
                #${value===1?"ECF0F1":"3498DB"} 225deg 270deg,
                #${value===2?"ECF0F1":"3498DB"} 270deg 315deg,
                #${value===3?"ECF0F1":"3498DB"} 315deg 360deg
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
                backgroundColor: '#F6B100',
            }}
        />
    </div>);
};

export default StickVisualizer;

