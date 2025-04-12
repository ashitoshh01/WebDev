import React, { useState } from 'react'

const updateMultileVar = () => {
    const [name, setName] = useState("Ashitosh");
    const [age, setAge] = useState(18);
    function changeName(){
        let newName = prompt("Enter the name you want to enter ..!");
        setName(newName);
    }
    return (
        <div>
            <button className="button" onClick={() => {
                setAge(age + 1);
            }}>Is it you BirthDay Today..?
            </button>
            <button className="button" onClick={changeName}>
                Change Name..?
            </button>
            <h4>Name : {name}</h4>
            <h4>Age : {age}</h4>
        </div>
    )
}

export default updateMultileVar
