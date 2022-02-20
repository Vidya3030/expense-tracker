import './App.css'
import Jars from "./db"
import SpeechTest from './components/SpeechTest'
import React, { useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useSpeechSynthesis} from 'react-speech-kit'

function App() {

  const generateJars = (jar) => {
    return (
      <SpeechTest key={jar.key} dollar={jar.dollar} category={jar.category} />
    )
  }

  const [income, changeIncome] = useState(0)

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
