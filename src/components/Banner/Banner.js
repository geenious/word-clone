import React from 'react';

function Banner({ className, tries, answer }) {
  if (className === 'happy') {
    return (
      <div className={`${className} banner`}>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{tries} guesses</strong>.
        </p>
      </div>
    );
  }

  if (className === 'sad') {
    return (
      <div className={`${className} banner`}>
        <p>
          <strong>Sorry!</strong> The answer was <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
