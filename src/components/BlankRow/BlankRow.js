import React from 'react';
import { range } from '../../utils';

function BlankRow() {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className="cell"></span>
      ))}
    </p>
  );
}

export default BlankRow;
