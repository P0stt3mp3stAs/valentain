import React, { useState, useEffect } from 'react';
import './TorchEffect.css';

const TorchEffect = () => {
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

  const scaleFactor = 0.5; 

  const torchStyle = {
    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, transparent 0%, rgba(0, 0, 0, 1) ${80 * scaleFactor}%)`,
  };

  return (
    <div className="torch-effect" style={torchStyle}></div>
  );
};

export default TorchEffect;