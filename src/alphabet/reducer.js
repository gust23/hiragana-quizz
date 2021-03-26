import { UPDATE_CHECK } from './actions';
import { hiragana as hiraKana, katakana as kataKana } from '../data/languages';

const initialState = {
  hiragana: {},
  katakana: {},
  hiraKana,
  kataKana,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CHECK: {
      const { alphabetType, groupId, newValue } = action;
      const checks = state[alphabetType];
      return { ...state, [alphabetType]: { ...checks, [groupId]: newValue } };
    }

    default:
      return state;
  }
}
