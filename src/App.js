import './App.css';
import {useGamepads} from "react-gamepads";
import {useEffect, useState} from "react";
import StickVisualizer from "./StickVisualizer";
import CaretControlComponent from "./CaretControlComponent";

const numbersWithAlphabet = {
    11: 'a',
    13: 'b',
    17: 'c',
    19: 'd',
    33: 'e',
    39: 'f',
    51: 'g',
    57: 'h',
    55: 'i',
    65: 'j',
    85: 'k',
    95: 'l',
    77: 'm',
    91: 'n',
    119: 'o',
    133: 'p',
    88: 'q',
    104: 'r',
    136: 's',
    152: 't',
    22: 'u',
    26: 'v',
    34: 'w',
    38: 'x',
    44: 'y',
    52: 'z',
    68: '?',
    76: '!',
    66: ';',
    78: '/',
    102: '?',
    114: '-',
};

function App() {
    const [gamepads, setGamepads] = useState()
    const [letter, setLetter] = useState("");
    const [rightPosition, setRightPosition] = useState()
    const [leftPosition, setLeftPosition] = useState({})
    const [rightValue, setRightValue] = useState(0)
    const [leftValue, setLeftValue] = useState(0)
    const [rightArrow, setRightArrow] = useState(false)
    const [leftArrow, setLeftArrow] = useState(false)
    const [topArrow, setTopArrow] = useState(false)
    const [bottomArrow, setBottomArrow] = useState(false)
    const [rightTrigger, setRightTrigger] = useState(false)
    const [leftTrigger, setLeftTrigger] = useState(false)

    useGamepads(_gamepads => {
        setGamepads(_gamepads[Object.keys(_gamepads)[0]])
        // console.log(_gamepads[Object.keys(_gamepads)[0]].buttons[6])
        setRightArrow(_gamepads[Object.keys(_gamepads)[0]].buttons[15].pressed)
        setLeftArrow(_gamepads[Object.keys(_gamepads)[0]].buttons[14].pressed)
        setTopArrow(_gamepads[Object.keys(_gamepads)[0]].buttons[12].pressed)
        setBottomArrow(_gamepads[Object.keys(_gamepads)[0]].buttons[13].pressed)
        setLeftTrigger(_gamepads[Object.keys(_gamepads)[0]].buttons[6].pressed)
        setRightTrigger(_gamepads[Object.keys(_gamepads)[0]].buttons[7].pressed)
        setRightPosition({
            x: _gamepads[Object.keys(_gamepads)[0]].axes[2], y: _gamepads[Object.keys(_gamepads)[0]].axes[3]
        })
        setLeftPosition({
            x: _gamepads[Object.keys(_gamepads)[0]].axes[0], y: _gamepads[Object.keys(_gamepads)[0]].axes[1]
        })

    })

    useEffect(() => {
        if (rightPosition) {

            if ((rightPosition.x < -0.5) && (rightPosition.y < -0.5)) {
                // console.log("top-left")
                setRightValue(2)
            } else if ((rightPosition.x > 0.5) && (rightPosition.y > 0.5)) {
                // console.log("bottom-right")
                setRightValue(6)
            } else if ((rightPosition.x < -0.5) && (rightPosition.y > 0.5)) {
                // console.log("bottom-left")
                setRightValue(8)
            } else if ((rightPosition.x > 0.5) && (rightPosition.y < -0.5)) {
                // console.log("top-right")
                setRightValue(4)
            } else if (rightPosition.x < -0.9) {
                // console.log("left")
                setRightValue(1)
            } else if (rightPosition.x > 0.9) {
                // console.log("right")
                setRightValue(5)
            } else if (rightPosition.y > 0.9) {
                // console.log("bottom")
                setRightValue(7)
            } else if (rightPosition.y < -0.9) {
                // console.log("top")
                setRightValue(3)
            } else {
                // console.log("center")
                setRightValue(0)
            }
        }

    }, [rightPosition]);

    useEffect(() => {
        if (leftPosition) {
            if (leftPosition.x < -0.75) {
                setLeftValue(11)
            } else if (leftPosition.y < -0.75) {
                setLeftValue(13)
            } else if (leftPosition.x > 0.75) {
                setLeftValue(17)
            } else if (leftPosition.y > 0.75) {
                setLeftValue(19)
            } else {
                setLeftValue(0)
            }

        }

    }, [leftPosition]);


    useEffect(() => {
        setLetter(numbersWithAlphabet[leftValue*rightValue])



    }, [leftValue]);

    // useEffect(() => {
    //     if(letter){
    //
    //         console.log(letter)
    //     }
    // }, [letter]);

    if (!gamepads) {
        return <div>test</div>
    }

    return <div>
        <p>{`left X: ${leftPosition.x}`}</p>
        <p>{`left value: ${leftValue}`}</p>
        <p>{`left Y: ${leftPosition.y}`}</p>
        <p>{`right X: ${rightPosition.x}`}</p>
        <p>{`right value: ${rightValue}`}</p>
        <p>{`right Y: ${rightPosition.y}`}</p>
        <StickVisualizer x={rightPosition.x} y={rightPosition.y}/>
        <StickVisualizer x={leftPosition.x} y={leftPosition.y}/>
        <CaretControlComponent letter={letter} rightTrigger={rightTrigger} leftTrigger={leftTrigger} topArrow={topArrow}
                               bottomArrow={bottomArrow} leftArrow={leftArrow}
                               rightArrow={rightArrow}/>


    </div>;
}

export default App;
