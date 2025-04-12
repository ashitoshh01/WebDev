import React from 'react'

const newCompo = (props) => {
  return (
    <div>
      <p className="para">{props.name}</p>
      <div>{props.children}</div>
    </div>
  )
}

export default newCompo
