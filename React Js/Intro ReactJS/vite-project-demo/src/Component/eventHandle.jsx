import React from 'react'

const eventHandle = () => {
  function handleClick() {
    window.location.reload();
    alert("Reloading");
  }
  function handleMouseOver() {
    alert("Mouse over!");
  }
  function handleMouseOut() {
    alert("Mouse out!");
  }
  return (
    <div>
      <button type="button" onClick={() => handleClick()}>Hello Click Me and you see the consiquences</button>
      <br></br>
      <br></br>
      <button type="button" onMouseOver={handleMouseOver}>Hello Mouse Over Me and you see the consiquences</button>
      <br></br>
      <br></br>
      <button type="button" onMouseOut={handleMouseOut}>Hello Mouse Out Me and you see the consiquences</button>
      <br></br>
      <br></br>

      //&{/*INTERVIEW QUESTION..!*/}
      //!{/* <button type="btn" onClick={alert("Hello i came without you call me ;)")}>Hyee</button> */}
      //*{/* <button type="button" onClick={()=>alert("Hello i am good boy you cal me then i'll come..!")}>Hyee</button> */}
    </div>
  )
}

export default eventHandle
