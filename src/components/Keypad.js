// Code Keypad Component Here
import React from 'react'

function Keypad() {
    function handleChange(e) {
        console.log(`${e.target.value}`);
    }
    
    return (
        <div>
        <form heading="Keypad" >
            <input
            type= "thepasswordis"
            onChange={handleChange}/>
        </form>
          
        </div>
    )
}
export default Keypad;