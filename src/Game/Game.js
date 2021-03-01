import './App.css';
import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Game = (props) => {
  const kanaGroup = props.location.kanaGroup || {};

  const randomKana = () => {
    const randomObjKey = Math.floor(Math.random() * Object.entries(kanaGroup).length);
    const randomGroup = Object.entries(kanaGroup)[randomObjKey][1];
    const randomGroupArr = Object.entries(randomGroup);
    const result = randomGroupArr[Math.floor(Math.random() * randomGroupArr.length)];
    return result;
  };

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

  // console.log(score);

  return (
    <div className='App'>
      {kana[0]}
      <form onSubmit={handleSubmit}>
        <input onKeyPress={disableSpace} type='text' onChange={(e) => setInput(e.target.value)} ref={inputRef} />
        <button disabled={!input} type='submit'>
          Go!
        </button>
      </form>
      {prevKana !== '' ? `${prevKana[0]} = ${prevKana[1]}` : ''}
      <br />
      <Link to={{ pathname: '/' }}>
        {
          <Button variant='contained' color='primary'>
            Back
          </Button>
        }
      </Link>
    </div>
  );
};

export default Game;
