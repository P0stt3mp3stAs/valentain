import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import box from '../../Assets/letter_box.png';

const Main = ({ showAnswer, onShowAnswer }) => {
  const [div2Visible, setDiv2Visible] = useState(false);
  const [no1ButtonOpacity, setNo1ButtonOpacity] = useState(1);
  const [no2ButtonOpacity, setNo2ButtonOpacity] = useState(1);

  const handleYes1Click = () => {
    setDiv2Visible(true);
  };

  const handleNo1Hover = () => {
    setNo1ButtonOpacity(0);
  };

  const handleNo1Leave = () => {
    setNo1ButtonOpacity(1);
  };

  const handleNo2Hover = () => {
    setNo2ButtonOpacity(0);
  };

  const handleNo2Leave = () => {
    setNo2ButtonOpacity(1);
  };

  return (
    <div className='main'>
      <div className='content'>
        <h1>this is a secret message, only Rwihiba zwiiina should read it</h1>
        <img src={box} alt='box' id='box' />
        <div id='div1'>
          <h2>are you Rwihiba wrida ?</h2>
          <div>
            <button id='yes1' onClick={handleYes1Click}>yes</button>
            <button
              id='no1'
              onMouseEnter={handleNo1Hover}
              onMouseLeave={handleNo1Leave}
              style={{ opacity: no1ButtonOpacity, transition: 'opacity 0.2s ease-in-out' }}>
              no
            </button>
          </div>
        </div>
        <div id='div2' style={{ display: div2Visible ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
          <h2>the message is locked would u like to search for the key to open you message ?</h2>
          <div>
            <Link to="/Find_The_Key">
              <button id='yes2'>yes</button>
            </Link>
            <button
              id='no'
              onMouseEnter={handleNo2Hover}
              onMouseLeave={handleNo2Leave}
              style={{ opacity: no2ButtonOpacity, transition: 'opacity 0.2s ease-in-out' }}>
              no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;