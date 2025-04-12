import React from 'react'

const colorChanger = (props) => {
  return (
    <div>
      <button onClick={e=>{
        e.stopPropagation();
        props.onChangeColor()
      }}>
        Change Color 
      </button>
    </div>
  )
}

export default colorChanger
