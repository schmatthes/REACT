import React from 'react'

function Person({person}) {
    // const person = props.person;
  return (
    <div>
             <h2>I am {person.name}, {person.age} years old and I know {person.skill}.</h2>

    </div>
  )
}

export default Person
