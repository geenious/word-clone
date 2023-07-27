import React from 'react';

import { ReactComponent as Reset} from '../assets/reset.svg';

function Header({ handleReset }) {
  return (
    <header>
      <h1>Word Game</h1>
      <button onClick={handleReset}>
        <Reset />
      </button>
    </header>
  );
}

export default Header;
