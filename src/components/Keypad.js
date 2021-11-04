// Code Keypad Component Here
import React from 'react'

function Keypad(){
    
    const handleChange = (e) => {
        e.preventDefault()
        console.log("Entering password...")
    }

    return(
        <div>
            <input onChange = {handleChange} type="password" />
        </div>
    )
}

export default Keypad