import React, { useState, useEffect } from 'react';
import './TorchEffect2.css';

const TorchEffect2 = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const scaleFactor2 = 0.2; 

  const torchStyle2 = {
    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, transparent 0%, rgba(0, 0, 0, 1) ${80 * scaleFactor2}%)`,
  };

  return (
    <div className="torch-effect2" style={torchStyle2}></div>
  );
};

export default TorchEffect2;