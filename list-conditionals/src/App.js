import React, { Component } from "react"
import "./App.css"
import Validation from "./Validation/Validation"
import CharComponent from "./CharComponent/CharComponent"

class App extends Component {
  state = {
    user: "",
  }
  inputChanger = (event) => {
    this.setState({ user: event.target.value })
  }

  deleteChar = (indx) => {
    const text = this.state.user.split("")
    text.splice(indx, 1)
    const updatedText = text.join("")
    this.setState({ user: updatedText })
  }

  render() {
    let charList = this.state.user.split("").map((char, indx) => {
      return (
        <CharComponent
          character={char}
          key={indx}
          clicked={() => this.deleteChar(indx)}
        />
      )
    })
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChanger}
          value={this.state.user}
        />
        <p>{this.state.user}</p>
        <Validation inputLength={this.state.user.length} />
        {charList}
      </div>
    )
  }
}

export default App
