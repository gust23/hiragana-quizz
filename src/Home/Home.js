import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import hiraganaArray from '../data/hiraganaArray';
import Checkbox from './Checkbox';
import './Home.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState({});
  const [kanaGroup, setKanaGroup] = useState({});
  // const [boolies, setBoolies] = useState(false);
  const [showHira, setShowHira] = useState(false);
  const [showKata, setShowKata] = useState(false);

  useEffect(() => {
    setData(hiraganaArray);
  }, []);

  const handleCheck = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setCheck({
      ...check,
      [e.target.name]: value,
    });

    const checkState = data[`${e.target.name}`];

    if (e.target.checked) {
      setKanaGroup({
        ...kanaGroup,
        [e.target.name]: checkState,
      });
    }
    if (e.target.checked === false) {
      delete kanaGroup[`${e.target.name}`];
      setKanaGroup({
        ...kanaGroup,
      });
    }
  };

  // Object.entries(data).map((item) => console.log(item[0].slice(9, 11)));

  return (
    <div className='container'>
      <div className='kanatable'>
        <div className='hiragana'>
          <h2>Hiragana</h2>
          {Object.entries(data).map((item) => {
            if (item[0].slice(9, 11) === 'h')
              return <Checkbox check={check} handleCheck={handleCheck} key={item[0]} item={item} />;
            if (showHira === true && item[0].slice(9, 11) === '_h')
              return <Checkbox check={check} handleCheck={handleCheck} key={item[0]} item={item} />;
            return null;
          })}
          <br />
          <button onClick={() => setShowHira(!showHira)}>Alternative Characters</button>
        </div>
        <div className='katakana'>
          <h2>Katakana</h2>
          {Object.entries(data).map((item) => {
            if (item[0].slice(9, 11) === 'k')
              return <Checkbox check={check} handleCheck={handleCheck} key={item[0]} item={item} />;
            if (showKata === true && item[0].slice(9, 11) === '_k')
              return <Checkbox check={check} handleCheck={handleCheck} key={item[0]} item={item} />;
            return null;
          })}
          <br />
          <button onClick={() => setShowKata(!showKata)}>Alternative Characters</button>
        </div>
      </div>
      <div className='link'>
        <Link to={{ pathname: '/game', kanaGroup }}>
          {
            <Button variant='contained' color='primary'>
              Game
            </Button>
          }
        </Link>
      </div>
    </div>
  );
};

export default Home;
