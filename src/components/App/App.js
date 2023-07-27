import React from 'react';
import Game from '../Game';
import GuessInput from '../GuessInput';
import Header from '../Header';
import Banner from '../Banner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function App() {
  const [gameResult, setGameResult] = React.useState({result: '', tries: 0});
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  const handleReset = () => {
    setGameResult({result: '', tries: 0});
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  console.log({ answer })

  return (
    <div className="wrapper">
      <Header handleReset={handleReset}/>
      <div className="game-wrapper">
        <Game answer={answer} guesses={guesses} />
        <GuessInput
          answer={answer}
          guesses={guesses}
          setGuesses={setGuesses}
          gameResult={gameResult}
          setGameResult={setGameResult}
        />
      </div>
      {(gameResult.result === 'happy' || gameResult.result === 'sad')
      && <Banner answer={answer} className={gameResult.result} tries={gameResult.tries} />}
    </div>
  );
}

export default App;
