import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import hiraganaArray from '../data/hiraganaArray';
import Checkbox from './Checkbox';
import './Home.css';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';

const Home = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState({});
  const [kanaGroup, setKanaGroup] = useState({});
  const [boolies, setBoolies] = useState(false);

  useEffect(() => {
    setData(hiraganaArray);
  }, []);

  const handleCheck = (e) => {
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setCheck({
      // ...check,
      [e.target.name]: setBoolies(!boolies),
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

  // console.log(Object.entries(data));

  return (
    <div className='container'>
      <div className='kanatable'>
        <div className='hiragana'>
          <h2>Hiragana</h2>
          {Object.entries(data).map((item) => {
            return <Checkbox check={check} handleCheck={handleCheck} key={item[0]} item={item} />;
          })}
          <br />
        </div>
      </div>
      <Link to={{ pathname: '/game', kanaGroup }}>
        {
          <Button variant='contained' color='primary'>
            Game
          </Button>
        }
      </Link>
    </div>
  );
};

export default Home;
