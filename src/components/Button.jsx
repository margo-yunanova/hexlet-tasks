import React, { useState } from 'react';
import cn from 'classnames';

const Button = ({ count = 3 }) => {
  const [countClick, setCountClick] = useState(null);
  const [lastClickedButton, setlastClickedButton] = useState(null);

  const btnClass = (number) => cn('btn', 'm-1', {
    'btn-primary': number !== lastClickedButton,
    'btn-success': number === lastClickedButton,
  });

  const increase = (number) => {
    setlastClickedButton(number);
    setCountClick((countClick) => ({
      ...countClick,
      [number]: (countClick?.[number] ?? 0) + 1,
    }));
  };

  const buttonArray = [];
  for (let i = 1; i <= count; i += 1) {
    buttonArray.push(i);
  }

  return (
    buttonArray.map((number) => (
      <button
        key={number}
        className={btnClass(number)}
        type="button"
        onClick={() => increase(number)}
      >
        {countClick?.[number] ?? 0}
      </button>
    ))
  );
};

export default Button;