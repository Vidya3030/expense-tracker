import './App.css';
import Jars from "./db"
import SpeechTest from './components/SpeechTest';

function App() {
  const generateJars = (jar) => {
    return (
      <SpeechTest key={jar.key} dollar={jar.dollar} category={jar.category} />
    )
  }
  return (
    <div className="App">
      {Jars.map(generateJars)}
    </div>
  );
}

export default App;
