export const GAME_ALPHABET = 'game/alphabet';

export const gameAlphabet = (groupId, alphabetType, hiraKana, kataKana) => ({
  type: GAME_ALPHABET,
  groupId: groupId,
  alphabetType: alphabetType,
  hiraKana: hiraKana,
  kataKana: kataKana,
});
