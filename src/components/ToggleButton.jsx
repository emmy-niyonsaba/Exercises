import React, { useState } from 'react'

function ToggleButton() {
    const [buttons, setButtons] = useState(Array(5).fill("red"))

    const toggleColor = (index) => {
        const newButtons = [...buttons]
        newButtons[index] =
            newButtons[index] === "red" ? "blue" : "red"
        setButtons(newButtons)
    }

    return (
        <div>
            {buttons.map((color, index) => (
                <button
                    key={index}
                    onClick={() => toggleColor(index)}
                    style={{ backgroundColor: color, margin: "5px" }}
                >
                    Button {index + 1}
                </button>
            ))}
        </div>
    )
}

export default ToggleButton 