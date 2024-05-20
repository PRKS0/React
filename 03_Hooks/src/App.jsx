import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let value

  // function adder(){
  //   value++
  //   console.log(value1);
  // }
  // function reducer(){
  //   value--
  // }

  // so variable are changing but not updating in UI. so we use useState(). It takes (default value) and give index and function. we store these values inside array like below. Function from useState() is a method which control the value of index(from useState()). So here, adder is a method to control the value of value1

  let [value, controller] = useState(0)

    function adder() {
      if(value>=0 && value<20){
        controller(value + 1)
      }
    }
    function reducer() {
      if(value>0 && value<=20){
        controller(value - 1)
      }
    }


  return (
    <>
      <h2>learning hooks</h2>
      <div>Frist Value {value}</div>
      <button onClick={adder}>Add 1</button>
      <button onClick={reducer}>Red 1</button>
    </>
  )
}

export default App
