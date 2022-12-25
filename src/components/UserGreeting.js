import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: false
  }
}
  render() {

    return (
      // <div> Welcome {this.state.isLoggedIn ? "Sascha" : "Guest"} </div>

      // return nothing unless isLoggedIn is true
      this.state.isLoggedIn && <div> Welcome Sascha</div>
      
    )
  }
}

export default UserGreeting