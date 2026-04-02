import React from 'react'
import Counter from './components/Counter'
import User from './components/User'
import ToggleButton from './components/ToggleButton'
import NameTransfer from './components/NameTransfer'
import CardList from './components/CardList'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-red-50'>
      <header className='bg-red-600 text-white shadow-lg py-8 px-6'>
        <h1 className='text-4xl font-bold text-center'>Emmanuel React Exercise WebAPP</h1>
      </header>

      <main className='max-w-6xl mx-auto p-6 space-y-12'>
        
        <section className='bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600'>
          <h2 className='text-2xl font-bold text-red-600 mb-6'>Counter Section</h2>
          <Counter/>
        </section>

        <section className='bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600'>
          <h2 className='text-2xl font-bold text-red-600 mb-6'>User Information</h2>
          <User/>
        </section>

        <section className='bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600'>
          <h2 className='text-2xl font-bold text-red-600 mb-6'>Toggle Button Color</h2>
          <ToggleButton/>
        </section>

        <section className='bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600'>
          <h2 className='text-2xl font-bold text-red-600 mb-6'>Name Transfer</h2>
          <NameTransfer/>
        </section>

        <section className='bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600'>
          <h2 className='text-2xl font-bold text-red-600 mb-6'>Card List Section</h2>
          <CardList/>
        </section>
      </main>

      <footer className='bg-red-600 text-white text-center py-6 mt-12'>
        <p className='text-sm'>© 2026 React Exercise App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
