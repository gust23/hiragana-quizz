import { React, useState } from 'react';
import './Home.css';

const Checkbox = ({ item, handleCheck, check }) => {
  const [altChars, setAltChars] = useState(false);
  return (
    <>
      <label onMouseEnter={() => setAltChars(true)} onMouseLeave={() => setAltChars(false)} htmlFor={item[0]}>
        <br />
        <input type='checkbox' name={item[0]} id={item[0]} checked={check[item[0]]} onChange={handleCheck} />{' '}
        {altChars === false ? (
          <span>{Object.values(item[1]).toString().replace(/,/g, ' · ')}</span>
        ) : (
          <span>{Object.keys(item[1]).toString().replace(/,/g, ' · ')}</span>
        )}
      </label>
    </>
  );
};

export default Checkbox;
