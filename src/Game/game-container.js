import { React } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { gameAlphabet } from './actions';

const GameContainer = (props) => <Game {...props} />;

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  aa: () => dispatch(gameAlphabet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
