import './App.css'
import UserInfo from './Components/userInfo'
import Counter from './Components/counter'
import FuncUsingProps from './Components/funcUsingProps';

function App() {
  function user(na){
    let name = na;
    function pass(pa){
      let password = pa;
    }
  }
  return (
    <>
      <UserInfo name="Ashitosh" data="Hello guys, I am a body any i am getting intrest in React JS." quali="My qualificaions are ,I have completed my 12th in CBSE board with distintn along with the additional subject as CS with score of 100/100." />
      <Counter>
        <p className="infoCounter">This counter cant count negative values to make it able to count negative click the below button</p>
      </Counter>
      {/* <FuncUsingProps pass={user} id="9565" passwd={password}/> */}
      <FuncUsingProps user pass={9565}/>
    </>
  )
}
export default App

