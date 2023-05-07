import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Pricing from './components/Pricing/Pricing'
import BrokenPhone from './components/BrokenPhone/BrokenPhone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <BrokenPhone></BrokenPhone>
    </div>
  )
}

export default App
