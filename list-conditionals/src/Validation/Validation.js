import React from "react"

const validation = (props) => {
  let validationText = "Text too short"

  if (props.inputLength > 3) validationText = "Text long enough"
  return (
    <div>
      <p>{validationText}</p>
    </div>
  )
}

export default validation
