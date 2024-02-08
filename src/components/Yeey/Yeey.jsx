import React, { useState } from 'react';
import './Yeey.css';
import box from '../../Assets/letter_box.png';
import key from '../../Assets/key.png';
import letter from '../../Assets/letter.png';

const Yeey = () => {
  const [boxVisible, setBoxVisible] = useState(true);
  const [keyVisible, setKeyVisible] = useState(false);
  const [instructionVisible, setInstructionVisible] = useState(true);
  const [letterVisible, setLetterVisible] = useState(false);

  const handleBoxClick = () => {
    setBoxVisible(false);
    setKeyVisible(true);
  };

  const handleKeyClick = () => {
    setKeyVisible(false);
    setInstructionVisible(false);
    setLetterVisible(true);
  };

  return (
    <div className='allyeey'>
      {instructionVisible && <h3 className='instruction'>Oh noo that was the wrong key. Can you search for the right key here?</h3>}
      {boxVisible && <img src={box} alt='box' className='box' onClick={handleBoxClick} />}
      {keyVisible && <img src={key} alt='key' className='key' onClick={handleKeyClick} />}
      {letterVisible && <img src={letter} alt='letter' className='letter' />}
    </div>
  );
}

export default Yeey;