import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import { PopOver } from './components/ListButton/PopOver.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar signedIn={true} />
        {/* <PopOver /> */}
      </div>
    </>
  )
}

export default App
