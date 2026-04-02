import React from 'react'
import Counter from './components/Counter'
import User from './components/User'
import ToggleButton from './components/ToggleButton'
import NameTransfer from './components/NameTransfer'
import CardList from './components/CardList'

function App() {
  return (
    <div>

      <h1 className=' bg-amber-400'>Emmanuel React Exercise WebAPP</h1>
    <Counter/>
    <User/>
    <h1>Toggle ButtonColor </h1>

    <ToggleButton/>

    <h1>Name Transfer </h1>
    <NameTransfer/>
    <h1>CardList secciton </h1>
    <CardList/>
    </div>

  )
}

export default App
