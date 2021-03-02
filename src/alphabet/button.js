import { React } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const redirectWithParams = (history, katakana, hiragana) => {
  console.warn(katakana, hiragana);
  const hiraganaParams = [];
  const katakanaParams = [];
  history.push(`/game?hiragana=${JSON.stringify(hiraganaParams)}&katakana=${JSON.stringify(katakanaParams)}`);
};

const PlayButton = ({ katakana, hiragana }) => {
  const history = useHistory();

  return (
    <Button
      className="play-button"
      variant="contained"
      color="primary"
      onClick={() => redirectWithParams(history, katakana, hiragana)}>Game!</Button>
  );
};

export default PlayButton;
