import React from 'react'

const userInfo = (props) => {
  return (
    <div>
      <h1 className="displayName">{props.name}</h1>
      <p className="userData">{props.data}</p>
      <p className="quali">{props.quali}</p>
    </div>
  )
}

export default userInfo
