import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import hiraganaArray from '../data/hiraganaArray';

const Home = (props) => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState({
    h_group1: false,
    h_group2: false,
    h_group3: false,
  });
  const [kanaGroup, setKanaGroup] = useState({});

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

  return (
    <div>
      <form>
        <label htmlFor='1'>
          a i u e o <input type='checkbox' name='h_group1' id='1' checked={check.h_group1} onChange={handleCheck} />
        </label>

        <br />
        <label htmlFor='2'>
          ka ki ku ke ko{' '}
          <input type='checkbox' name='h_group2' id='2' checked={check.h_group2} onChange={handleCheck} />
        </label>
        <br />
        <label htmlFor='3'>
          sa shi su se so{' '}
          <input type='checkbox' name='h_group3' id='3' checked={check.h_group3} onChange={handleCheck} />
        </label>
        <br />
        <Link to={{ pathname: '/game', kanaGroup }}>{<Button>Game</Button>}</Link>
      </form>
    </div>
  );
};

export default Home;
