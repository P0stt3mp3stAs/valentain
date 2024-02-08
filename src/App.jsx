import React, { useState } from 'react';
import Main from './components/Main/Main';
import './App.css';

function App() {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="App">
      <Main showAnswer={showAnswer} onShowAnswer={handleShowAnswer} />
    </div>
  );
}

export default App;
