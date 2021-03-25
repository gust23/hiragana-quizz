import { React } from 'react';
import _ from 'lodash';

const GroupCheck = ({ groupId, group, checked, OnChange }) => (
  <div>
    <input type='checkbox' value={checked} onChange={() => OnChange(!checked)} />
    {group.map(({ romanji }) => (
      <span>{romanji.length > 1 ? romanji[0] : romanji}</span>
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
  return (
    <div className='alphabet'>
      <div className='alphabet-title'>{alphabetType}</div>
      {Object.keys(grouped).map((groupId) => (
        <GroupCheck
          key={`alphabet.group.${groupId}`}
          checked={checks[groupId]}
          OnChange={(newValue) => setCheck(groupId, newValue)}
          groupId={groupId}
          group={grouped[groupId]}
        />
      ))}
    </div>
  );
};
