import React from "react"

const output = (props) => {
  const outputStyle = {
    margin: "3px",
  }
  return (
    <div style={outputStyle}>
      <p>{props.userName} scored the goal!</p>
      <p>His team won the game!</p>
    </div>
  )
}

export default output
