import React, { useState } from 'react';

function Interruptor() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prev => !prev);
    console.log(`Switch is ${!isOn ? 'ON' : 'OFF'}`);
  };

  return (
    <label style={styles.switch}>
      <input 
        type="checkbox" 
        checked={isOn} 
        onChange={handleToggle} 
        style={styles.checkbox}
      />
      <span style={{
        ...styles.slider,
        backgroundColor: isOn ? '#2196F3' : '#ccc',
      }} />
    </label>
  );
}

const styles = {
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: '60px',
    height: '34px',
  },
  checkbox: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '34px',
    transition: '0.4s',
    // El tamaño del deslizador será ajustado con pseudo-elementos o usando otro span
    // pero para simplificar, aquí solo cambiamos el color
  },
};

export default Interruptor;