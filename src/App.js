import './App.css'
import Jars from "./db"
import SpeechTest from './components/SpeechTest'
import React, { useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useSpeechSynthesis} from 'react-speech-kit'

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

  const commands = [
    {
      command: 'reset',
      callback:({resetTranscript}) => resetTranscript(),
    },
    {
      command: 'what is amount in *',
      callback: (section) => {
        //create new var to store section amount
        for (let i = 0; i < Jars.length; i++) {
          if (section == Jars[i].category) {
            console.log('reached here')
          }
        }

        }
        //read out loud the amount
        
        // document.body.style.background = color;
      

    },
    {
      command: 'stop',
      callback:({stopListening}) => SpeechRecognition.stopListening,
    }
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
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
      {income}
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}

///////////////////////////////////////
  
  // const Speech = () => {
  //   const [value, setValue] = React.useState("");
  //   const { speak } = useSpeechSynthesis();
  //   return
      

  // }

  



// function App() {

  
// }

export default App;
////////////////////////////////////
