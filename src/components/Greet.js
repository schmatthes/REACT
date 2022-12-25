import React, { Component } from 'react'


/*
const Greet = (props) => {
    // we use the "(" after return bc it's more than one line
    // we need to wrap that in to a <div> because we can only return one HTML element
    return (
        <div>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
    )
}
*/

// Destructuring by curly braces (2 ways to do it):

// Extracting name and heroName from props and below we can use them directly

// 1) First way: extract it in the function parameter itself
// const Greet = ({name, heroName}) => {

const Greet = (props) => {
// 2) Second way: destructure it in the function body
    const {name, heroName} = props;
    return (
        <div> 
            <h1>Hello {name} aka {heroName}</h1>
        </div>
    )
}


// named export:
// (export default... not necessary, however, you have to import it by name)
// export const Greet = () => <h1>Hello Sascha</h1>


//  Instead of "named exports" we can use the default export:
export default Greet