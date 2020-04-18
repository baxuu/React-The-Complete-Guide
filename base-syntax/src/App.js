import React, { Component } from "react"
import "./App.css"
import Input from "./Input/Input"
import Output from "./Output/Output"

class App extends Component {
  state = {
    username: "Andrew",
  }

  nameHandler = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <Input changed={this.nameHandler} name={this.state.username} />
        <Output userName={this.state.username} />
        <Output userName={this.state.username} />
        <Output userName={this.state.username} />
      </div>
    )
  }
}

export default App
