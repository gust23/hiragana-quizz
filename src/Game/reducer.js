import { GAME_ALPHABET } from './actions';

export default function (state, action) {
  switch (action.type) {
    case GAME_ALPHABET: {
      const { groupId, hiraKana, kataKana, alphabetType } = action;
      return { ...state, [alphabetType]: { ...hiraKana[groupId], ...kataKana[groupId] } };
    }

    default:
      return state;
  }
}
