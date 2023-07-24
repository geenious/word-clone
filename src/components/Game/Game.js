import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ wordGuess }) {
  // We'll use this to track the number of guesses.
  const [guessRecord, setGuessRecord] = React.useState([]);

  setGuessRecord([...guessRecord, wordGuess]);

  return (
    <>
      Hello from Game!
    </>
  )
}

export default Game;
