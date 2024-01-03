
import './App.css';
import {useGamepads} from "react-gamepads";
import {useEffect, useState} from "react";
import StickVisualizer from "./StickVisualizer";





function App() {
  const [gamepads, setGamepads] = useState([])
  useGamepads(_gamepads=>{
    // console.log(_gamepads)
    setGamepads(_gamepads[0])
  })
  // useEffect(() => {
  //
  // }, []);
  // console.log(typeof (gamepads.axes[1]))



  return <div>
    <p>test</p>
    <p>{`left X: ${gamepads.axes[0]}`}</p>
    <p>{`left Y: ${gamepads.axes[1]}`}</p>
    <p>{`right X: ${gamepads.axes[2]}`}</p>
    <p>{`right Y: ${gamepads.axes[3]}`}</p>
    <StickVisualizer x={gamepads.axes[0]} y={gamepads.axes[1]}/>


  </div>;
}

export default App;
