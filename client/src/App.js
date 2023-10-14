import { useState } from 'react'
import axios from "axios";
import './App.css';
import './components/InputData.js'
import InputData from './components/InputData.js';
import './components/Header.js';
import Header from './components/Header.js';

function App() {

  return (
    <div className="App">
      <header className="App-header"><Header></Header></header>
      <body>
        <div><InputData></InputData></div>
      </body>
    </div>
  );
}

export default App;
