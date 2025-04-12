import React from 'react'

const eventHandling = (props) => {
    return (
        <div>
            <button className='button' onClick={props.click}>Dont Click Me</button>
            <div className="div">
                {props.children}
            </div>
        </div>
    )
}

export default eventHandling
