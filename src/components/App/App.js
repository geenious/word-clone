import React from 'react';
import Game from '../Game';
import GuessInput from '../GuessInput/GuessInput';
import Header from '../Header';

function App() {
  const [wordGuess, setWordGuess] = React.useState('');

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game wordGuess={wordGuess} />
        <GuessInput setWordGuess={setWordGuess} />
      </div>
    </div>
  );
}

export default App;
