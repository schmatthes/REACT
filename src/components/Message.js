import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Guggugs visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank your for subscribing"
        })
    }

    render() {
        return (
            <div>
             <h1> {this.state.message} </h1>
             <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message