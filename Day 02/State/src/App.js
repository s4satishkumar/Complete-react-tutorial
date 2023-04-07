import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {

  let counter = 0;
  let [counterState,setCounterState]= useState(0);
  const incrementCounter =()=>{
    ++counter;
    console.log(counter)
    setCounterState(++counterState);
  }

  return (
    <div className="App">
      <header className="App-header">
        normal counter: {counter} <br/>
        usestate counter :{counterState}
<button onClick={ incrementCounter}> increment counter </button>
      </header>
    </div>
  );
}

export default App;
