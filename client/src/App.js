import { useState } from 'react'
import axios from "axios";
import './App.css';
import './components/InputData.js'
import InputData from './components/InputData.js';

function App() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <div><InputData></InputData></div>
      </header>
    </div>
  );
}

export default App;
