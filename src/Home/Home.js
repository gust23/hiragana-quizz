import { React } from 'react';
import { hiragana, katakana } from '../data/languages';
// import hiragana from '../data/hiragana';
// import katakana from '../data/katakana';
import CheckContainer from '../alphabet/check-container';
import ButtonContainer from '../alphabet/button-container';
import './Home.css';

const Home = () => (
  <div className="home">
    <div className="home-alphabets">
      <CheckContainer alphabet={hiragana} alphabetType="hiragana" />
      <CheckContainer alphabet={katakana} alphabetType="katakana" />
      <ButtonContainer />
    </div>
  </div>
);

export default Home;
