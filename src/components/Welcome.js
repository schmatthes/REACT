import React, { Component } from 'react'

class Welcome extends Component {

    render() {
        //  Destructing the props values we need:
        // (We did not use it for heroName below just for fun)
        const {name, heroName} = this.props
        // if we had states we could extract them as follows
        // const {state1, state2} = this.state

        // This looks like HTML but actually it is JSX
        // (JavaScript XML)
        return (
            <div>
             <h1> Welcome {name} aka {this.props.heroName} </h1>
            </div>
        )
    }
    


}

export default Welcome