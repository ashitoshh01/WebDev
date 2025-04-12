import './App.css'
import { use, useState } from 'react'
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
import EventHandle from './Component/eventHandle.jsx';
import ColorChanger from './Component/colorChanger.jsx';
import Hooks from './Component/hooks.jsx';
import { useEffect } from 'react'

function App() {
  let [count, setcount] = useState(0);

  function counter() {
    setcount(count + 1);
  }

  let [name, setName] = useState('');
  // Color changer and clickHandler

  const [clickedOutside, setClickedOutside] = useState(0);

  function clickedOutdiv() {
    setClickedOutside(clickedOutside + 1);
  }

  function getrandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function chnageColorHandler() {
    let color = getrandomColor();
    document.body.style.backgroundColor = color;
    document.body.style.transition = '1s';
  }

  // ^useEffect Hook

  // Variation 1

  // ! This will run every time the component is rendered
  /*
  useEffect(()=>{
    alert("Pikachu i choose you");
  });
  */

  // Variation 2
  // ! This will run only once when the component is mounted

  /*
  useEffect(()=>{
    alert("Pikachu i choose you");
  },[]);
  */

  // Variation 3

  // ! This will run everytime whhen there is change in the count variable
  /*
  useEffect(() => {
    alert("Pikachu i choose you");
  },[count]);
  */

  // Variation 4

  // ! This will run everytime when there is change in the count and name variable
  /*
  useEffect(()=>{
    alert("Pikachu i choose you");
  },[count,name])
  */

  // Variation 5

  // ! This will run everytime when there is change in the count and the return is used here to tell teh user that the previous value is getting erased.

  /*
  useEffect(()=>{
    alert("Count's value is gettig rendered");
    return ()=>{
      alert("Count's previous value is getting erased")
    }
  },[count]);
  */

  // Conditional Rendering
  let [logIn, setLogIn] = useState(0);

  if (logIn === 0) {
    setLogIn = false;

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

        <EventHandle />

        <div style={{ height: '100%', width: '100%' }} onClick={clickedOutdiv}>
          <ColorChanger onChangeColor={chnageColorHandler} />
          <br />
          <br />
          <h3>Numbr of clicks on the page : {clickedOutside}</h3>
        </div>


      </>
    );
  }











  // Conditional Rendering
  else {
    setLogIn = true;
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

        <StateLifting name={name} setName={setName} />
        <p className="parentComponent">Hey there i am inside the parent component and i am able to edit the parent component through a child component this is done due to liftState and the value that is been modified usign the child chomponen is : {name}</p>

        <EventHandle />

      </>
    );
  }
}




export default App
