import { useState } from 'react'
import './App.css'
import Home from './Components/Desktop/Home/index'


function App() {
  const [count, setCount] = useState(0)

  
    
  return (
    <>
    <main className='container'>
        <Home/>
    </main>
    
    </>
  )
}

export default App;
