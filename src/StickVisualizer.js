import React from 'react';

const StickVisualizer = ({ x, y }) => {
    // Assuming x and y range from -1 to 1
    const outerCircleRadius = 100;
    const innerCircleRadius = 20;

    // Calculate the position of the inner circle based on x and y values
    const innerCircleX = x * outerCircleRadius;
    const innerCircleY = y * outerCircleRadius;

    return (
        <div style={{ position: 'relative', width: outerCircleRadius * 2, height: outerCircleRadius * 2, borderRadius: '50%', backgroundColor: '#eee',  }}>
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
    );
};

export default StickVisualizer;

