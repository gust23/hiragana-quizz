import './App.css';
import hiraganaArray from './hiraganaArray';
import { React, useState, useEffect, useRef } from 'react';

const randomKana = () => hiraganaArray[Math.floor(Math.random() * hiraganaArray.length)];

const App = () => {
  const [kana, setKana] = useState(randomKana);
  const [input, setInput] = useState('');
  const [style, setStyle] = useState({ borderColor: '#fff' });

  const validadeAnswer = () => {
    if (input === kana.slice(2).trim()) {
      console.log('top');
      setStyle({ borderColor: '#fff' });
      setKana(randomKana);
    } else {
      setStyle({ borderColor: 'red' });
      console.log('nope');
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

  return (
    <div className='App'>
      {kana.slice(0, 1)}
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setInput(e.target.value)} ref={inputRef} style={style} />
        <button type='submit'>Go!</button>
      </form>
    </div>
  );
};

export default App;
