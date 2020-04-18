import React from "react"

const input = (props) => {
  const inputStyle = {
    border: "3px black solid",
    padding: "3px",
    color: "grey",
  }
  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.name}
    />
  )
}

export default input
