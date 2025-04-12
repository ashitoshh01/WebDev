import React from 'react'

const stateLifting = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setName(e.target.value)}/>
      <p>The text inside the input box is : {props.name}</p>
    </div>
  )
}

export default stateLifting
