import React from 'react'
import "./userCard.css"

const userCard = (props) => {
  return (
    <>
    <div className="container">
      <div className='actualCard' style={props.style}>
        <h1 className="name">{props.name}</h1>
        <img src={props.img} alt={props.name} className="userImage" />
        <p className="discription">{props.desc}</p>
      </div>
    </div>
    </>
  )
};

export default userCard;