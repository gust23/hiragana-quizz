import React from 'react';
import './Home.css';

const Checkbox = ({ item, handleCheck, check }) => {
  console.log();
  return (
    <label htmlFor={item[0]}>
      <br />
      <input type='checkbox' name={item[0]} id={item[0]} checked={check[item[0]]} onChange={handleCheck} />{' '}
      {Object.values(item[1]).toString().replace(/,/g, ' · ')}
    </label>
  );
};

export default Checkbox;
