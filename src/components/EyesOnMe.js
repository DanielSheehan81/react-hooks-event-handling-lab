// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe(){
    
    const handleFocus = (e) => {
        console.log("Good!")
    }

    const handleBlur = (e) => {
        console.log("Hey! Eyes on me!")
    }

    return(
        <div>
            <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe