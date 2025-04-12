import './App.css'
import { useState } from 'react'
import UserCard from './Component/userCard'
import img1 from './assets/img1.png'
import img2 from './assets/react.svg'
import img3 from '../public/vite.svg'
import NewCompo from './Component/newCompo.jsx'
import PropsFunc from './Component/propsFunc.jsx'
import StateLifting from './Component/stateLifting.jsx'
import Counter from './Component/counter.jsx';
import Logout from './Component/Conditional Rendering/logout.jsx';
import Login from './Component/Conditional Rendering/login.jsx';

function App() {
  let [count, setcount] = useState(0);

  function counter() {
    setcount(count + 1);
  }

  let [name, setName] = useState('');

  // Conditional Rendering
  let [logIn, setLogIn] = useState(true);

  if (logIn === true) {
    // setLogIn=false;
    return (
      <>
        <Logout />
        <div className="div">
          <UserCard name="Ashitosh" desc="Hello guys this is my name which is Ashitosh and i hope you are enjoying the holidays that are spending with someone or somthing but in the holidays also i am sitting in my chair and trying to learn React js is prity hard for me to grasp all this in one go but evetually ill do it." img={img1} style={{ "border-radius": "1rem" }} />

          <UserCard name="Ashok" desc="Hello guys this is my middle name which is of my father he is th ebest father in the world he always supports me in what ever things i am dong unlike other parents foecing their childrens to do a perticular thing without their opinion ,I am blesed that i have suchh a great dad..!" img={img2} style={{ "border-radius": "2rem" }} />


          <UserCard name="Lavhate" desc="This is my surname guys and i love my surname this surname is unique unlike others haveing very cmmon surnames i have a surname that sounds good in future i'll be making this surname famous by being famous like no one else have did in posotove ay obviously..!" img={img3} style={{ "border-radius": "3rem" }} />
        </div>

        <div className="counterDiv">
          <Counter />
        </div>

        <div className="newComponent">
          <NewCompo name="Ashitosh">
            <p>This is Ashitosh a pashinated eunthruprenuer who dont even now the speling of it but it doesnt matter what matters is who are you!</p>
          </NewCompo>
        </div>

        <div className="propsFunction">
          <PropsFunc text="Hello World (Click Me)" click={counter}>
            <h1>{count}</h1>
          </PropsFunc>
        </div>

        <StateLifting name={name} setName={setName} />
        <p className="parentComponent">Hey there i am inside the parent component and i am able to edit the parent component through a child component this is done due to liftState and the value that is been modified usign the child chomponen is : {name}</p>


      </>
    );
  }
  else {
    setLogIn=true;
  return (
    <>
    <Login />
        <div className="div">
          <UserCard name="Ashitosh" desc="Hello guys this is my name which is Ashitosh and i hope you are enjoying the holidays that are spending with someone or somthing but in the holidays also i am sitting in my chair and trying to learn React js is prity hard for me to grasp all this in one go but evetually ill do it." img={img1} style={{ "border-radius": "1rem" }} />
  
          <UserCard name="Ashok" desc="Hello guys this is my middle name which is of my father he is th ebest father in the world he always supports me in what ever things i am dong unlike other parents foecing their childrens to do a perticular thing without their opinion ,I am blesed that i have suchh a great dad..!" img={img2} style={{ "border-radius": "2rem" }} />
  
  
          <UserCard name="Lavhate" desc="This is my surname guys and i love my surname this surname is unique unlike others haveing very cmmon surnames i have a surname that sounds good in future i'll be making this surname famous by being famous like no one else have did in posotove ay obviously..!" img={img3} style={{ "border-radius": "3rem" }} />
        </div>
  
        <div className="counterDiv">
          <Counter />
        </div>
  
        <div className="newComponent">
          <NewCompo name="Ashitosh">
            <p>This is Ashitosh a pashinated eunthruprenuer who dont even now the speling of it but it doesnt matter what matters is who are you!</p>
          </NewCompo>
        </div>
  
        <div className="propsFunction">
          <PropsFunc text="Hello World (Click Me)" click={counter}>
            <h1>{count}</h1>
          </PropsFunc>
        </div>
  
        <StateLifting name={name} setName={setName}/>
        <p className="parentComponent">Hey there i am inside the parent component and i am able to edit the parent component through a child component this is done due to liftState and the value that is been modified usign the child chomponen is : {name}</p>
  
        
      </>
    );
  }
}




export default App
