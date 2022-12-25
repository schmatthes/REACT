import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Button clicked")
    }

  return (
    // In React it has to be camel case (onClick), in HTML and vanilla JavaScript you have to use "onclick"
    // Also: Do not use paranthesis with clickHandler, we want to pass a function, we do not want to call the function
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick


