import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function Game({ guesses, answer }) { 
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
