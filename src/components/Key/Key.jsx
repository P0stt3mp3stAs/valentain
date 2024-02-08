import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import door from '../../Assets/door.png';
import wrongkey from '../../Assets/wrongkey.png';
import './Key.css';

const Key = () => {
  const [doorsVisible, setDoorsVisible] = useState(true);
  const [showWrongKey, setShowWrongKey] = useState(false);
  const [isAnyDoorClicked, setIsAnyDoorClicked] = useState(false);

  const handleDoorClick = () => {
    setIsAnyDoorClicked(true);
    setDoorsVisible(false);
    setShowWrongKey(true);
  };

  return (
    <div className='heart-container'>
      { !isAnyDoorClicked && <h3 className='instruction'>Do you wanna open the doors and look for the key?</h3> }
      {doorsVisible ? (
        <div>
          <div className='row'>
            <Door onClick={handleDoorClick} />
            <Door onClick={handleDoorClick} />
            <Door onClick={handleDoorClick} />
          </div>
          <div className='row'>
            <Door onClick={handleDoorClick} />
            <Door onClick={handleDoorClick} />
            <Door onClick={handleDoorClick} />
          </div>
          <div className='row'>
            <Door onClick={handleDoorClick} />
            <Door onClick={handleDoorClick} />
            <Door onClick={handleDoorClick} />
          </div>
        </div>
      ) : (
        <div>
          <h3 className='message'>Here, I opened all doors for you, princess. Is that the key you were looking for? Click on it and see.</h3>
          <div className='wrong-key-centered'>
            <Link to="/Final_Page" id='keylink'>
              <img src={wrongkey} alt='wrong key' className='wrong-key' />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const Door = ({ onClick }) => {
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    setOpacity(0);
    onClick();
  };

  return (
    <div className='door-container' style={{ opacity: opacity, transition: 'opacity 0.2s' }} onClick={handleClick}>
      <img src={door} alt='door' className='door' />
    </div>
  );
};

export default Key;