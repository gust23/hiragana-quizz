export const UPDATE_CHECK = 'checks/update';

export const updateCheck = (alphabetType, groupId, newValue) => ({
  type: UPDATE_CHECK,
  alphabetType: alphabetType,
  groupId: groupId,
  newValue: newValue,
});
