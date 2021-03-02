import { React } from 'react';
import { hiragana, katakana } from '../data/languages';
import CheckContainer from '../alphabet/check-container';
import './Home.css';

const Home = () => (
  <div className="home">
    <CheckContainer alphabet={hiragana} alphabetType="hiragana" />
    <CheckContainer alphabet={katakana} alphabetType="katakana" />
  </div>
);

export default Home;
