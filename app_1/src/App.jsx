
import { useState } from 'react';
import './App.css'

function App(props) {
  const name = "Soham";
  const collage = "DDU";
  const branch = "IT";
  const [count , setCount] = useState(400000);
  const isOnline = true;
  const member = ["Soham" , "Sally"];
  return (
    <div>
  <h2>Hello Soham, Welcome to React</h2>
  <p>{name} is Studing in {collage} and doing his B.tech in {branch}.</p>
  <h3>CEO : {props.name}</h3>
  <h3>CITY : {props.city}</h3>
  <h3>COMPANY VALUATION : ${count}</h3>
  <button onClick={()=> setCount(count + 100)}>+</button>
  <button onClick={() => setCount(count - 100)}>-</button>
  <h3>STATUS : {isOnline ? "ONLINE" : "OFFLINE"}</h3>
  <h3>COMMITY MEMBER</h3>
  <ul>
    {member.map(mem => (
      <li key={mem}>{mem}</li>
    ))}
  </ul>
  </div>
  );
}

export default App
