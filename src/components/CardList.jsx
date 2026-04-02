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
    <div>

      <div>
        {cardsData.slice(0, limit).map((card) => (
          <div
            key={card.id}
            style={{
              backgroundColor: 'green',
              margin: '10px',
              padding: '10px',
              color: 'white',
              borderRadius: '10px',
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="buttons">
        {limit < cardsData.length && (
          <button onClick={() => setLimit(cardsData.length)}>
            Show More
          </button>
        )}

        {limit > 4 && (
          <button onClick={() => setLimit(4)}>
            Show Less
          </button>
        )}
      </div>

    </div>
  )
}

export default CardList