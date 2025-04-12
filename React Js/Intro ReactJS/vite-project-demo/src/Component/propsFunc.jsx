import React from 'react'

const propsFunc = (props) => {
    return (
        <div>
            <button onClick={props.click}>
                {props.text}
            </button>
            {props.children}
        </div>
    )
}

export default propsFunc
