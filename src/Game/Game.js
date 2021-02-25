import './App.css';
import hiraganaArray from '../data/hiraganaArray';
import { React, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const randomKana = () => {
  const entries = Object.entries(hiraganaArray);
  const result = entries[Math.floor(Math.random() * entries.length)];
  return result;
};

const Game = () => {
  const [kana, setKana] = useState(randomKana);
  const [input, setInput] = useState('');
  const [prevKana, setPrevKana] = useState('');
  const [score, setScore] = useState(0);

  const validadeAnswer = () => {
    if (input.toLowerCase().trim() === kana[1]) {
      console.log('top');
      setPrevKana(kana);
      setKana(randomKana);
      setScore(score + 1);
    } else {
      console.log('nope');
      setPrevKana(kana);
      setKana(randomKana);
      setScore(score < 1 ? score === 0 : score - 1);
    }
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    validadeAnswer();
    e.target.reset();
  };

  const disableSpace = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  console.log(score);

  return (
    <div className='App'>
      {kana[0]}
      <form onSubmit={handleSubmit}>
        <input onKeyPress={disableSpace} type='text' onChange={(e) => setInput(e.target.value)} ref={inputRef} />
        <button type='submit'>Go!</button>
      </form>
      {prevKana !== '' ? `${prevKana[0]} = ${prevKana[1]}` : ''}
    </div>
  );
};

export default Game;
