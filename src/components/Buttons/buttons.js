import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const Buttons = ({ onIncrement, onDecrement }) => {
  return (
    <>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};
