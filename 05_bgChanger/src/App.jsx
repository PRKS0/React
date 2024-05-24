import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
        <ul className='flex gap-10 items-end justify-center h-screen pb-10' style={{backgroundColor: color}}>
          <button className='rounded-xl w-20 h-10 text-white flex items-center justify-center' onClick={()=>setColor("black")} style={{backgroundColor: "black"}} >Black</button>
          <button className='rounded-xl w-20 h-10 text-white flex items-center justify-center' onClick={()=>setColor("blue")} style={{backgroundColor: "blue"}} >blue</button>
          <button className='rounded-xl w-20 h-10 text-white flex items-center justify-center' onClick={()=>setColor("green")} style={{backgroundColor: "green"}} >green</button>
          <button className='rounded-xl w-20 h-10 text-white flex items-center justify-center' onClick={()=>setColor("gray")} style={{backgroundColor: "gray"}} >gray</button>
          <button className='rounded-xl w-20 h-10 text-white flex items-center justify-center' onClick={()=>setColor("purple")} style={{backgroundColor: "purple"}} >purple</button>
        </ul>
    </>
  )
}

export default App
