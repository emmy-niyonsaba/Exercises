import React, { useState } from 'react'

function ToggleButton() {
    const [buttons, setButtons] = useState(Array(8).fill("red"))
    

    const toggleColor = (index) => {
        const newButtons = [...buttons]
        newButtons[index] =
            newButtons[index] === "red" ? "white" : "red"
        setButtons(newButtons)
    }

    return (
        <div className='flex flex-wrap gap-4 justify-center'>
            {buttons.map((color, index) => (
                <button
                    key={index}
                    onClick={() => toggleColor(index)}
                    className={`px-6 py-3 font-semibold rounded-lg shadow-md transition duration-200 
                      ${color === "red" 
                        ? 'bg-red-500 text-white hover:bg-red-700 border-2 border-red-700' 
                        : 'bg-white text-red-500 hover:bg-red-50 border-2 border-red-500'
                      }`}
                >
                    Button {index + 1}
                </button>
            ))}
        </div>
    )
}

export default ToggleButton 