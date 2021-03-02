import { React } from 'react';
import _ from 'lodash';

const GroupCheck = ({ groupId, group, checked, setCheck }) => (
  <div>
    <input type='checkbox' value={checked} onChange={() => setCheck(!checked)} />
    {group.map(({ kana }) => (
      <span>{kana}</span>
    ))}
    {/* <div>kana: {kana}</div>
    <div>romanji: {
      romanji.map(r =>
        <span key={`alphabet.group.${groupId}.${kana}.${r}`}>{r}</span>
      )}
    </div> */}
  </div>
);

export const AlphabetChecks = ({ alphabet, alphabetType, checks, setCheck }) => {
  const grouped = _.groupBy(alphabet, 'groupId');
  console.warn('grouped', '->', grouped);

  return (
    <div className="alphabet">
      <div className="alphabet-title">{alphabetType}</div>
      {Object.keys(grouped).map((groupId) =>
        <GroupCheck
          key={`alphabet.group.${groupId}`}
          checked={checks[groupId]}
          setCheck={(newValue) => setCheck(groupId, newValue)}
          groupId={groupId}
          group={grouped[groupId]}
        />)}
    </div>
  );
}
