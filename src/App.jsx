import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
  
        <h2>COUNT APP</h2>
        <input
        type="number"
        placeholder={count}
      />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            +
          </button><button type="button" onClick={() => setCount((count) => count - 1)}>
            -
          </button>
        </p>
        <button type="button" onClick={() => setCount((count) => count = 0)}>
            RESET
          </button>
      
      </header>
    </div>
  )
}

export default App
