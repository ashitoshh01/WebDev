import React from 'react'

const stateLifting = (props) => {
  return (
    <div>
      <div className="color" val={props.val}></div>
      <div className="colorShower" val={props.val}></div>
      <button className="button" onClick={props.changeColor}>Change Color</button>
    </div>
  )
}

export default stateLifting
