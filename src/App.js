import './App.css'
import Jars from "./db"
import SpeechTest from './components/SpeechTest'
import React, { useState } from "react"

function App() {

  const generateJars = (jar) => {
    return (
      <SpeechTest key={jar.key} dollar={`$` + income * (jar.dollar / 100)} category={jar.category} />
    )
  }

  const [income, changeIncome] = useState("")

  const handleChangeIncome = (e) => {
    changeIncome(e.target.value)
  }

  function validate(evt) {
    var theEvent = evt;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = evt.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  return (
    <div className="App">
      <h1>Keep them Jars green</h1>
      <input 
      onChange={(e) => {
        handleChangeIncome(e)
      }} 
      onKeyPress={evt => {
        if (evt.key === 'Enter') {
          console.log(income)
        } else {
          validate(evt)
        }
      }} 
      value={income} 
      placeholder='type something'
      />
      {income}
      <div className="jar-container">
      {Jars.map(generateJars)}
      </div>
    </div>
  );
}

export default App;
