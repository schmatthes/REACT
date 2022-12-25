import React, { Component } from 'react'

 class ClassClick extends Component {
constructor(props) {
  super(props)

  this.state = {
     somestate: "somestatevalue"
  }
  this.somevar = "somevaravalue"
}
    
    clickHandler = () => {
        console.log("Clicked the button");
        console.log(this.state.somestate)
        console.log(this.somevar)
        console.log(this.props)
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click meeee</button>
      </div>
    )
  }
}

export default ClassClick