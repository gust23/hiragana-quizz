import { React } from 'react';
import { connect } from 'react-redux';
import { AlphabetChecks } from './alphabet-check';
import { updateCheck } from './actions'

const CheckContainer = (props) => (
  <AlphabetChecks {...props} />
);

const mapStateToProps = ({ alphabet }, { alphabetType }) => ({
  checks: alphabet[alphabetType],
});

const mapDispatchToProps = (dispatch, { alphabetType }) => ({
  setCheck: (groupId, newValue) => dispatch(updateCheck(alphabetType, groupId, newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckContainer);
