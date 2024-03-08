import React, { useState } from 'react';
import './App.css';
import logo from './image/logo.gif';

const App = () => {
  const [clickPosition, setClickPosition] = useState({ x: 112, y: 185 });
  const[sc,setSc]=useState(-1)
  const handleClick = (e) => {
    const { clientX, clientY } = e;
    if(clickPosition.x<clientX && clickPosition.y<clientY){
      setSc(-1)
    }
    else{
      setSc(1);
    }
    setClickPosition({ x: clientX, y: clientY });
  };

  const calculateRotationAngle = (clickX, clickY) => {
    const imageX = clickPosition.x;
    const imageY = clickPosition.y;
    const angleRad = Math.atan2(clickY - imageY, clickX - imageX);
    return angleRad * (180 / Math.PI) ; 
  };

  return (
    <div className="App" onClick={handleClick}>
      <img
        src={logo}
        alt="gif logo"
        style={{
          position: 'absolute',
          left: clickPosition.x,
          top: clickPosition.y,
          transition:'left 10s, top 10s',
          transform: `translate(-50%, -50%) rotate(${calculateRotationAngle(clickPosition.x, clickPosition.y)}deg) scaleX(${sc})`, 
          width: '100px',
          height: '100px'
        }}
      />
    </div>
  );
};

export default App;
