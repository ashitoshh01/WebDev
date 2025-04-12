import React, { useState } from 'react'
import './counter.css';

const counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container-click'>
            <h1>The user had clicked {count} times </h1>
            <button className="button" onClick={() => {
                setCount(count+1);
            }}>
                Click Me
            </button>
        </div>
    )
}

export default counter
