import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  // const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./schedules.json").then(response => response.json().then(data => {
      // const scheduleData = JSON.parse(data);
      // setItems(data);
      console.log(data);
    }))
  }, []);

  return  (
    <div>Hello</div>
  );
}

export default App;
