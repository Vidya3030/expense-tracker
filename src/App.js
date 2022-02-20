import './App.css'
import Jars from "./db"
import SpeechTest from './components/SpeechTest'
import React, { useState } from "react"

function App() {

  const generateJars = (jar) => {
    return (
      <SpeechTest key={jar.key} dollar={jar.dollar} category={jar.category} />
    )
  }

  const [income, changeIncome] = useState(0)

  return (
    <div className="App">
      <div className="jar-container">
      {Jars.map(generateJars)}
      </div>
      {income}
    </div>
  );
}

export default App;
