
import './App.css';
import {useGamepads} from "react-gamepads";
import {useEffect, useState} from "react";
import StickVisualizer from "./StickVisualizer";



function App() {
  const [gamepads, setGamepads] = useState()
  const [text, setText] = useState("");
  const [rightPosition, setRightPosition] = useState({})
  const [leftPosition, setLeftPosition] = useState({})
  const [rightValue, setRightValue] = useState(0)

  useGamepads(_gamepads=>{
    setGamepads(_gamepads[0])
    setRightPosition({
      x:_gamepads[0].axes[2],y:_gamepads[0].axes[3]
    })
    setLeftPosition({
      x:_gamepads[0].axes[0],y:_gamepads[0].axes[1]
    })

  })

  useEffect(() => {

    if((rightPosition.x<-0.5)&&(rightPosition.y<-0.5)){
      // console.log("top-left")
      setRightValue(2)
    }else if((rightPosition.x>0.5)&&(rightPosition.y>0.5)){
      // console.log("bottom-right")
      setRightValue(6)
    }else if((rightPosition.x<-0.5)&&(rightPosition.y>0.5)){
      // console.log("bottom-left")
      setRightValue(8)
    }else if((rightPosition.x>0.5)&&(rightPosition.y<-0.5)){
      // console.log("top-right")
      setRightValue(4)
    }else if(rightPosition.x<-0.9){
      // console.log("left")
      setRightValue(1)
    }else if(rightPosition.x>0.9){
      // console.log("right")
      setRightValue(5)
    }else if(rightPosition.y>0.9){
      // console.log("bottom")
      setRightValue(7)
    }else if(rightPosition.y<-0.9){
      // console.log("top")
      setRightValue(3)
    }else{
      // console.log("center")
      setRightValue(0)

    }

  }, [rightPosition]);

  // console.log(rightValue)



  if(!gamepads){
    return <div>test</div>
  }

  return <div>
    <p>{`left X: ${leftPosition.x}`}</p>
    <p>{`left Y: ${leftPosition.y}`}</p>
    <p>{`right X: ${rightPosition.x}`}</p>
    <p>{`right Y: ${rightPosition.y}`}</p>
    <StickVisualizer x={rightPosition.x} y={rightPosition.y}/>
    <StickVisualizer x={leftPosition.x} y={leftPosition.y}/>


  </div>;
}

export default App;
