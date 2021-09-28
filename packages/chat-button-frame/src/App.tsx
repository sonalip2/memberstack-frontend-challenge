import { useEffect, useState } from 'react';
import logo from './chat.png';
import './App.css';

const EVENT_ORIGIN = 'http://localhost:3001'

function App() {
  const [color, setColor] = useState('#e66465')

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.origin !== EVENT_ORIGIN) {
        return;
      }
      setColor(event.data)
    }, false);
  })

  return (
    <div className="App">
      <div className="chat-icon" style={{backgroundColor: color}}>
        <img src={logo} className="chat-icon-image" alt="logo" />
      </div>
    </div>
  );
}

export default App;
