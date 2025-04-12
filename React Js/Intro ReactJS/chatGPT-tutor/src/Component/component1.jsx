import React, { useState } from 'react'
import './component1.css'

const component1 = (props) => {
    const a = "Ashitosh";
    const [count , setCount ] = useState(0);
    return (
    < div >
        <button className="btn">{a}</button>
        <p className="para">{props.desc}</p>
        <button className="inc" onClick={()=>{
            setCount(count+1);
        }}>Increase</button>
        {count}
        <button className="dec" onClick={()=>{
            setCount(count-1)
        }}>Decrease</button>
    </div >
  )
}
export default component1
