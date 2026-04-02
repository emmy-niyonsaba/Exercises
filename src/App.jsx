import React from 'react'
import Counter from './components/Counter'
import User from './components/User'
import ToggleButton from './components/ToggleButton'
import NameTransfer from './components/NameTransfer'

function App() {
  return (
    <div>
    <Counter/>
    <User/>
    <h1>Toggle ButtonColor </h1>

    <ToggleButton/>

    <h1>Name Transfer </h1>
    <NameTransfer/>
    </div>

  )
}

export default App
