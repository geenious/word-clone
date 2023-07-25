import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ guesses }) {
  return (
    <>
      <div className="game-results">
        {range(NUM_OF_GUESSES_ALLOWED).map(i => (
          <Guess key={i} guess={guesses[i]} answer={answer} />
        ))}
      </div>
    </>
  )
}

export default Game;
