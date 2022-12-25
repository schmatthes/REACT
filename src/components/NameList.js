import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Sascha', 'Bruce'];

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React',
        },        
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular',
        },
        {
            id: 3,
            name: 'Sascha',
            age: 51,
            skill: 'HTML',
        },
    ]

    // map() on an array returns a new array of the results from the function that is passed as parameter 
    // const nameList = names.map(the_name => <h2>{the_name}</h2>)
    // const nameList = names.map(the_name => <h2 key={the_name}> {the_name}</h2>)
    // causes warning regarding no key:
    // const personList = persons.map(person => <h2>I am {person.name}, {person.age} years old and I know {person.skill}.</h2>)
 
    // you can use the index as key, however, only when ALL of the following conditions are true:
    // 1) The items in your list do not have a unique id
    // 2) The list is a static list and will not change (no add, no remove)
    // 3) The list will never be reordered or filtered
    // const nameList = names.map((the_name, index) => <h2 key={index}> {index} {the_name}</h2>)
 
    // "key" helps REACT to identify which items in the list have been changed/added/removed
    // this way the tree can be rebuild more effecienctly (rather than recreating the list entirely)


    const personList = persons.map(person =>  <Person key={person.id} person={person} />)
    // NOTE: If we do not set the key, REACT will use the index as key! - see above

    //const nameList = names.map(name =>  <Person key={person.name} person={person} />)


    return <div> {personList} </div>
    // return <div> {nameList} </div>
}

export default NameList