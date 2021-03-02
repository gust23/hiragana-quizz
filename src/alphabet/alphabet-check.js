import { React } from 'react';
import _ from 'lodash';

const GroupCheck = ({ groupId, kana, romanji, checked, setCheck }) => (
  <div>
    <input type='checkbox' value={checked} onChange={() => setCheck(!checked)} />
    <div>kana: {kana}</div>
    <div>romanji: {
      romanji.map(r =>
        <span key={`alphabet.group.${groupId}.${kana}.${r}`}>{r}</span>
      )}
    </div>
  </div>
);

export const AlphabetChecks = ({ alphabet, alphabetType, checks, setCheck }) => {
  const grouped = _.groupBy(alphabet, 'groupId');
  console.warn('grouped', '->', grouped);

  return (
    <div className="alphabet">
      <div className="alphabet-title">{alphabetType}</div>
      {Object.keys(grouped).map((groupId) =>
        grouped[groupId].map(({ kana, romanji }) =>
          <GroupCheck
            key={`alphabet.group.${groupId}.${kana}`}
            checked={checks[groupId]}
            setCheck={(newValue) => setCheck(groupId, newValue)}
            groupId={groupId}
            kana={kana}
            romanji={romanji}
          />
        ))}
    </div>
  );
}
