import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guesses, setGuesses, gameResult, setGameResult, answer }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    // Prevent the form from refreshing the page.
    e.preventDefault();
    // Push the guess into the guesses array.
    const nextGuess = guess.toUpperCase();
    setGuesses([...guesses, nextGuess]);
    // Clear the input field.
    setGuess('');

    // Check if the guess is correct.
    if (nextGuess === answer) {
      setGameResult({ result: 'happy', tries: guesses.length + 1 });
    } else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameResult({ result: 'sad', tries: guesses.length + 1 });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern='[A-Za-z]{5}'
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={!!gameResult.result} />
    </form>
  );
}

export default GuessInput;
