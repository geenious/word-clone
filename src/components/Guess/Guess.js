import React from 'react';
import { checkGuess } from '../../game-helpers';
import BlankRow from '../BlankRow';

// The Guess component is responsible for rendering the UI for a single guess.
function Guess({ guess, answer }) {
  // Builds the guess UI.
  if (!guess) return <BlankRow />;
  // Checks the guess against the answer.
  const letters = checkGuess(guess, answer);
  // Builds the guess UI.
  return (
    <p className="guess">
      {letters.map(({ letter, status }, i) => (
        <span key={i} className={`cell ${status}`}>{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
