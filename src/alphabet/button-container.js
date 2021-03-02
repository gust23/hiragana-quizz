import { React } from 'react';
import { connect } from 'react-redux';
import Button from './button';

const ButtonContainer = (props) => (
  <Button {...props} />
);

const mapStateToProps = (state) => state.alphabet;

export default connect(mapStateToProps)(ButtonContainer);
