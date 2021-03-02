import { React } from 'react';
import { hiragana, katakana } from '../data/languages';
import CheckContainer from '../alphabet/check-container';
import Button from '@material-ui/core/Button';
import './Home.css';

const Home = () => (
  <div className="home">
    <div className="home-alphabets">
      <CheckContainer alphabet={hiragana} alphabetType="hiragana" />
      <CheckContainer alphabet={katakana} alphabetType="katakana" />
    </div>
    <Button className="play-button" variant="contained" color="primary">Game!</Button>
  </div>
);

export default Home;
