import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  // while passing array and object in card we have to give it's variable not define whole object/array inside return() rather should inject inside {} to pass array, obj directly like below. but we can do that with strings

  const userDetails = {
    age: "19",
    contact: '0988767654',
    location: "ddd-009, estd"
  }

  return (
    <>
      <div className='bg-black mb-10'>Learning React</div>
     <Card username="prakash" score={{science: "15", math: '12'}} userDetails={userDetails} />
    </>
  )
}

export default App
