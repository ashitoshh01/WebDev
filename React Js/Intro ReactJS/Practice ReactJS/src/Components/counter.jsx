import React, { useState } from 'react'

const comp1 = (props) => {
  let [ct, sct] = useState(0);

  if(ct<0){
    ct=0;
  }
  return (
    <>
      <button className="button btn1" onClick={() => {
        sct(ct + 1);
      }}>Increase</button>
      <button className="button btn2" onClick={() => {
        sct(ct - 1);
      }}>Decrease</button>
      <h1 className="count">{ct}</h1>
      {props.children}
    </>
  )
}

export default comp1
