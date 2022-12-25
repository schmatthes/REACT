import React, { Component } from 'react'



export class Counter extends Component {


    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            worschd: "lewwer"
        }
    }
    
    increment() {
        // won't work as expected bc React will not re-render:
        // this.state.count = this.state.count+1;


        // setState call is asynchronous, that means the console log below does not show the expected value
        /*
        this.setState({
            count: this.state.count + 1,
            new_state_var: "nu_value"
        },
        () => {console.log('Callback value', this.state.count)})
        */




        //this.setState(whatever);

        /*
        this.setState((prevState) => ({
            count: prevState.count + 1,
            state_var: "value"
        }))
        */

        // this.setState({temp: "cold"})


        /*
        Let us understand how the function call above works...

        1. So we call this.setState(...)
        That method is used to update the state of a component.
        - let us focus on its parameter

        The parameter(s) of <class>.setState can be
            this.setState(<new-state)
            this.setState(<call-back>)
            this.setState(<new-state>, <call-back>)


        2. Assume the parameter is an object, it will be used to add/change a state.
        
        e.g.:
        this.setState({soup: "fish soup"})     
        console.log("state", this.state)

         ==> this.setState() is scheduled/asnychronous,
        ==> if you want an up-to-date value for console.log etc, use the the callback as follows!
            
        this.setState({soup: "fish soup"}, () => console.log("soup: ", this.state.soup))

        The log shows the correct value now - let's implement the increment:
        
        let addValue = 3
        this.setState({
            count: this.state.count + addValue,
            new_state_var: "nu_value"
        },
        () => {console.log('Callback value', this.state.count)})
        
        We ran into the same issue like before, setState is scheduled.
        The incrementFive() is used, so some of the increment() calls are not effective yet.
        Therefore we fetch the outdated this.state.count,
        as the previous setState() calls are still queued, they have not been executed yet.

        So we expected increment by 15 (5 times increment of 3),
        however, in my tests it shows increment by 3 only.

        Solution:

        3) <component>.setState(<call-back>) passes the previous state as a parameter to the call-back.

        So we have to know that the implemention of setState passes the previous state (and the props).

        That way we can use the previous state (variable) to change it to the new state (variable).
        In our case the state variable is "count".

        We can see there is an arrow (=>) function called - it will return a result, which will be used to update the state.
 
        Since we know the parameter that is passed is the previous state, we call it "prevState".
        We wrap everything in curly brackets, so we have just one statement/value - it will be returned by default.
        If we had multiple statements in the funcion body, we would need to use the "return" command.

        let addValue = 3
        this.setState((prevState) => ({
            count: prevState.count + addValue,
            new_state_var: "nu_value"
         }),
            () => {console.log('Callback value', this.state.count)}
        )

        Since prevState is the only param we access, we can ommit the brackets:

        this.setState(prevState => ({count: prevState.count + addValue }))

        However, we may also access the props:

        this.setState((prevState, props) => (...))


        */

        let addValue = 3
        this.setState(prevState => ({count: prevState.count + addValue }))

        this.setState({soup: "fish soup"}, () => console.log("soup: ", this.state.soup))


        console.log("count: " , this.state.count);

        console.log("state", this.state)
    }

    incrementFive() {
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         this.increment()
    }

    render() {
        return (
            <div>
              {this.state.count}
              <button onClick={() => this.incrementFive()}>Increment</button>
            
            </div>
        )
    }

}

export default Counter