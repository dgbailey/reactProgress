import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ProgressBar} from './ProgressBar';


function App() {

  let [increment,changeIncrement] = useState(.25)

  const progressForward = () =>{
      let newIncrement = increment + .05;
      newIncrement >= 1 ? changeIncrement(1):changeIncrement(increment + .05);
      
  }

  return (
    <div className="App">
   
      <ProgressBar ratio={increment}></ProgressBar>
      <button onClick={progressForward}>Forward</button>
    </div>
  );
}

export default App;
