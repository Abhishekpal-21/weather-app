import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[value , setvalue] = useState(0);
 
  return (
    <>
   <h3>Count {value}</h3>
   <button onClick={
    () => {
     setvalue(value + 1);
    }
   }>Add</button>


<br></br>
   <button onClick={
    () => {
     setvalue(value - 1);
    }
   }>Minus</button>

<br></br>
   <button onClick={
    () => {
     setvalue(0);
    }
   }>Reset</button>
 </>
  )
}

export default App
