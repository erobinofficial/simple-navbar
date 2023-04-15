import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Pricing from './components/Pricing/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
    </div>
  )
}

export default App
