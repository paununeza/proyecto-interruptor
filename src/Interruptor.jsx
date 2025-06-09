import { useState } from 'react';
import App from './App.jsx';

function Interruptor() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn); // Actualiza isOn a la negación de su valor actual
  };

  return (
    <div className="interruptor">
      <button onClick={toggleSwitch}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <App />
    </div>
  );
}