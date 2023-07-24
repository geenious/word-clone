import React from 'react';

function GuessInput({ setWordGuess }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextGuess = guess.toUpperCase();
    setWordGuess(nextGuess);

    console.log({nextGuess});

    // Clear the input field.
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
      id="guess-input"
      type="text"
      pattern='[A-Za-z]{5}'
      value={guess}
      onChange={(e) => setGuess(e.target.value)} />
    </form>
  );
}

export default GuessInput;
