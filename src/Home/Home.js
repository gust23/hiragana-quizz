import { React, useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { hiragana, katakana } from '../data/languages';
import Checkbox from './Checkbox';
import './Home.css';

const GroupCheck = ({ groupId, kana, romanji }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div key={`alphabet.group.${groupId}.${kana}`}>
      <input type='checkbox' value={checked} onChange={() => setChecked(!checked)} />
      <div>kana: {kana}</div>
      <div>romanji: {
        romanji.map(r =>
          <span key={`alphabet.group.${groupId}.${kana}.${r}`}>{r}</span>
        )}</div>
    </div>
  );
};

const AlphabetChecks = ({ alphabet }) => {
  const grouped = _.groupBy(alphabet, 'groupId');
  console.warn('grouped', '->', grouped);

  return Object.keys(grouped).map((groupId) =>
    grouped[groupId].map(({ kana, romanji }) =>
      <GroupCheck groupId={groupId} kana={kana} romanji={romanji} />
    ));
}

const Home = () => (
  <div className="home">
    <AlphabetChecks alphabet={hiragana} />
    <AlphabetChecks alphabet={katakana} />
  </div>
);

export default Home;
