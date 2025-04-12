import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Component from './Component/component1.jsx'
import EventHandling from './Component/eventHandling.jsx'
import UpdateMultileVar from './updateMultileVar.jsx'
import StateLifting from './stateLifting.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const desc = "This is a para just for a the problem i am writhing here anything that is not relavent at all and is of no use so insted of that be honest to your self and be 1% better every day..! ";

  const [org , cng] = useState(1);

  const [color , picker] = useState('');

  function change(){
    cng(org*2);
  }

  function changeColor(clr){
    picker(clr)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code> (src/App.jsx) </code> and save to test HMR
        </p>
      </div>
      <Component desc={desc}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="containerEvent">
        <EventHandling click={change}>
          {org}
        </EventHandling>
      </div>

      <div className="changeVar">
        <UpdateMultileVar />
      </div>

      <div className="stateLifting">
        <StateLifting val={color} changeColor={()=>changeColor("red")}/>
      </div>
    </>
  )
}

export default App
