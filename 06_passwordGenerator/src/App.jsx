import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  let [length, setLength] = useState(8)
  let [numberAllow, setNumber] = useState(false)
  let [characterAllow, setCharacter] = useState(false)
  let [password, setPassword] = useState("password")
  
  function handleSliderChange(event) {
    setLength(event.target.value)

  }
  const copyRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number = "0123456789"
    const specialChar = "!@#$%^&*()"
    if (numberAllow) {
      str += number
    }
    if (characterAllow) {
      str += specialChar
    }
    let pass = ''
    for (let i = 0; i <= length; i++) {
      const randIndex = Math.floor(Math.random() * (str.length)) + 1;
      pass += str.charAt(randIndex)
    }

    setPassword(pass)
  }, [length, numberAllow, characterAllow, setPassword])


  const copyPassToClipBoard = useCallback(() => {
    copyRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, characterAllow, passwordGenerator])

  return (
    <div className='flex items-center justify-center w-full h-screen bg-slate-400'>
      <div className=' border-2 rounded-xl p-10 bg-white'>

        <input
          className='rounded-xl p-2 bg-gray-400'
          type="text"
          value={password}
          ref={copyRef}
          readOnly />
        <button
          className='bg-blue-500 rounded-2xl w-20 h-10 ml-4 active:bg-blue-700'
          onClick={copyPassToClipBoard} >copy</button>
        <div className='mt-3 mb-2'>
          <input
            className='mr-3'
            type="range"
            min='8'
            max='20'
            value={length}
            onChange={handleSliderChange}
          />
          <span>Length({length})</span>
        </div>
        <input
          type="checkbox"
          id='char'
          defaultChecked={characterAllow}
          onChange={() => { setCharacter((prev) => !prev) }}
        />
        <label htmlFor="char" className='mr-3 ml-1'>Character</label>

        <input
          type="checkbox"
          id='num'
          defaultChecked={numberAllow}
          onChange={() => { setNumber((prev) => !prev) }}
        />
        <label htmlFor="num" className='mr-3 ml-1'>Number</label>
      </div>
    </div>
  )
}

export default App



// useEffect run the effect function on the render of page, so to prevent this we can do: 
/* if (isInitialRender.current) {
      // Skip the first render
      isInitialRender.current = false;
    } else{}
*/