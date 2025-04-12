import React from 'react'

const funcUsingProps = () => {
  let ans;
  if(ans===true){
    let passcode = document.querySelector('.showPass');
    passcode.innerHTML = `The password is ${this.props.passwd}`;
    passcode.style.color = "green";
    passcode.style.fontSize = "20px";
    passcode.style.fontWeight = "bold";
    passcode.style.backgroundColor = "black";
    passcode.style.padding = "10px";
    passcode.style.borderRadius = "10px";
    passcode.style.marginTop = "10px";
    passcode.style.marginBottom = "10px";
    passcode.style.textAlign = "center";
    passcode.style.width = "100%";
    passcode.style.position = "absolute";
    passcode.style.left = "0";
    passcode.style.top = "0";
    passcode.style.zIndex = "1";
    passcode.style.transition = "all 0.5s ease-in-out";
    passcode.style.transform = "translateY(0)";
    passcode.style.opacity = "1";
    passcode.style.visibility = "visible";
    passcode.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    passcode.style.border = "1px solid black";
    passcode.style.borderRadius = "10px";
    passcode.style.backgroundColor = "black";
    passcode.style.color = "white";
    passcode.style.fontSize = "20px";
    passcode.style.fontWeight = "bold";
  }
  return (
    <div>
      <button type="button" onClick={()=>{
        ans=true;
      }}>Show Password</button>
      <h3 className='showPass'></h3>
    </div>
  )
}

export default funcUsingProps
