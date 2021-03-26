import { React } from 'react';
import { connect } from 'react-redux';
import PlayButton from './button';

const ButtonContainer = (props) => <PlayButton {...props} />;

const mapStateToProps = (state) => state.alphabet;

export default connect(mapStateToProps)(ButtonContainer);
