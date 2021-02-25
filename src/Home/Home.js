import { React, useState, useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Game from '../Game/Game';
import Button from '@material-ui/core/Button';
import hiraganaArray from '../data/hiraganaArray';

function Home() {
  const [check, setCheck] = useState({
    h_group1: false,
    h_group2: false,
  });
  const [kanaGroup, setKanaGruop] = useState({
    h_group1: [],
    h_group2: [],
  });

  const handleCheck = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setCheck({
      ...check,
      [e.target.name]: value,
    });
    const checkState = e.target.checked ? hiraganaArray[`${e.target.name}`] : [];
    setKanaGruop({
      ...kanaGroup,
      [e.target.name]: checkState,
    });
  };

  return (
    <div>
      <input type='checkbox' name='h_group1' id='1' checked={check.h_group1} onChange={handleCheck} />
      <input type='checkbox' name='h_group2' id='2' checked={check.h_group2} onChange={handleCheck} />
      <br />
      <Link component={Button} to={{ pathname: '/game' }}>
        Game
      </Link>
    </div>
  );
}

export default Home;
