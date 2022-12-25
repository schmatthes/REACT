import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

    // see comments in clickHandler() to understand the following:
    // (Approach 3)
    //  this.clickHandler = this.clickHandler.bind(this)
    }

//    clickHandler() {
    clickHandler = () => {
        // You cannot use "this" here bc it is undefined (unless this is defined as arrow function)!
        // You have to use event binding

        // 1) First possible approach - use bind()
        //         <button onClick={this.clickHandler.bind(this)}>Click - EventBind</button>
        // Then you can use "this" here...
        // However, causes a bind at every render() and that might be problematic in large apps regarding performance

        // 2) Second approach use arrow function in the render method
        // <button onClick={() => this.clickHandler()}>Click - EventBind</button>
        // Again, you can then use "this"
        // However, also not ideal performance-wise in some scenario

        // 3) Officially documented approach:
        // Binding in the class constructor

        // 4) Use arrow function as a class property
        // clickHandler = () => {

        
        /*
        Background information (comment under youtube vid):
        
        First of all "this" keyword points the Parent element on which it is called . 
        So when you use a Named function with the "this" keyword inside it  , 
        it isn't binded to anything at all ..So the control passes to the "Window" element . 
        So the Window element acts as a parent to the Named function . We see "Undefined" here because we use "Strict mode " in Javascript . 
        What Strict Mode does is, if there is a named function( without any Bind method ) it transfers control to the parent element(window element) as i said 
        ..this action is blocked by the strict mode ..So you see "undefined" in there ...However if you take off the strict mode ,you should see it will return the Window object ... 
        The One Stop Solution to all of this is using arrow functions which takes parent element as the Class and not the window object .
        */


        this.setState({
             message: "Good bye"
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <dev>{this.state.message}</dev>
        <button onClick={this.clickHandler}>Click - EventBind</button>
      </div>
    )
  }
}

export default EventBind