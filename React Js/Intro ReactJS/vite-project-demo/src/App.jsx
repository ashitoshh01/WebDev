import './App.css';
import { createContext, useState, useContext } from 'react';
import UserCard from './Component/userCard';
import img1 from './assets/img1.png';
import img2 from './assets/react.svg';
import img3 from '../public/vite.svg';
import NewCompo from './Component/newCompo.jsx';
import PropsFunc from './Component/propsFunc.jsx';
import StateLifting from './Component/stateLifting.jsx';
import Counter from './Component/counter.jsx';
import Logout from './Component/Conditional Rendering/logout.jsx';
import Login from './Component/Conditional Rendering/login.jsx';
import EventHandle from './Component/eventHandle.jsx';
import ColorChanger from './Component/colorChanger.jsx';
import Timer from './Component/timer.jsx';


function App() {
  let [count, setcount] = useState(0);
  let [name, setName] = useState('');
  const [clickedOutside, setClickedOutside] = useState(0);
  let [logIn, setLogIn] = useState(0);

  function counter() {
    setcount(count + 1);
  }

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

  if (logIn === 0) {
    setLogIn = false;

    return (
      <>
        <Logout />
        <div className="div">
          <UserCard
            name="Ashitosh"
            desc="Hello guys this is my name which is Ashitosh..."
            img={img1}
            style={{ borderRadius: '1rem' }}
          />
          <UserCard
            name="Ashok"
            desc="Hello guys this is my middle name..."
            img={img2}
            style={{ borderRadius: '2rem' }}
          />
          <UserCard
            name="Lavhate"
            desc="This is my surname guys and i love my surname..."
            img={img3}
            style={{ borderRadius: '3rem' }}
          />
        </div>

        <div className="counterDiv">
          <Counter />
        </div>

        <div className="newComponent">
          <NewCompo name="Ashitosh">
            <p>
              This is Ashitosh a passionate entrepreneur who doesn’t even know
              the spelling of it but still trying.
            </p>
          </NewCompo>
        </div>

        <div className="propsFunction">
          <PropsFunc text="Hello World (Click Me)" click={counter}>
            <h1>{count}</h1>
          </PropsFunc>
        </div>

        <StateLifting name={name} setName={setName} />
        <p className="parentComponent">
          Hey there I’m the parent component. The value edited from the child
          component is: {name}
        </p>

        <EventHandle />

        <div style={{ height: '100%', width: '100%' }} onClick={clickedOutdiv}>
          <ColorChanger onChangeColor={chnageColorHandler} />
          <br />
          <br />
          <h3>Number of clicks on the page : {clickedOutside}</h3>
        </div>

        <br />
        <br />
        <br />

        <div className="timer">
          <h1>Timer</h1>
          <h2>Day:Hour:Minute:Second</h2>
          <h3>Timer is running</h3>
          <Timer />
        </div>
      </>
    );
  } else {
    setLogIn = true;

    return (
      <>
        <Login />
        <div className="div">
          <UserCard
            name="Ashitosh"
            desc="Hello guys this is my name which is Ashitosh..."
            img={img1}
            style={{ borderRadius: '1rem' }}
          />
          <UserCard
            name="Ashok"
            desc="Hello guys this is my middle name..."
            img={img2}
            style={{ borderRadius: '2rem' }}
          />
          <UserCard
            name="Lavhate"
            desc="This is my surname guys and i love my surname..."
            img={img3}
            style={{ borderRadius: '3rem' }}
          />
        </div>

        <div className="counterDiv">
          <Counter />
        </div>

        <div className="newComponent">
          <NewCompo name="Ashitosh">
            <p>
              This is Ashitosh a passionate entrepreneur who doesn’t even know
              the spelling of it but still trying.
            </p>
          </NewCompo>
        </div>

        <div className="propsFunction">
          <PropsFunc text="Hello World (Click Me)" click={counter}>
            <h1>{count}</h1>
          </PropsFunc>
        </div>

        <StateLifting name={name} setName={setName} />
        <p className="parentComponent">
          Hey there I’m the parent component. The value edited from the child
          component is: {name}
        </p>

        <EventHandle />
      </>
    );
  }
}

export default App;
