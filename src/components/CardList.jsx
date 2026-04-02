import React, { useState } from 'react'

// Sample data
const cardsData = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1.' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2.' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3.' },
  { id: 4, title: 'Card 4', description: 'This is the description for Card 4.' },
  { id: 5, title: 'Card 5', description: 'This is the description for Card 5.' },
  { id: 6, title: 'Card 6', description: 'This is the description for Card 6.' },
  { id: 7, title: 'Card 7', description: 'This is the description for Card 7.' },
  { id: 8, title: 'Card 8', description: 'This is the description for Card 8.' },
]

function CardList() {
  const [limit, setLimit] = useState(4)

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardsData.slice(0, limit).map((card) => (
          <div
            key={card.id}
            className='bg-red-500 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border-t-4 border-white'
          >
            <h3 className='text-xl font-bold mb-2'>{card.title}</h3>
            <p className='text-sm leading-relaxed'>{card.description}</p>
          </div>
        ))}
      </div>

      <div className='flex justify-center gap-4 mt-8'>
        {limit < cardsData.length && (
          <button 
            onClick={() => setLimit(cardsData.length)}
            className='px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 shadow-md'
          >
            Show More
          </button>
        )}

        {limit > 4 && (
          <button 
            onClick={() => setLimit(4)}
            className='px-6 py-3 bg-white text-red-500 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-50 transition duration-200 shadow-md'
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  )
}

export default CardList