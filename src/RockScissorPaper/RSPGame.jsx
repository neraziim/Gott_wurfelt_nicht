import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { generateRandomHand, getResult } from './utils';

const INIT_VALUE = 'rock';

function RSPGame() {
  const [hand, setHand] = useState(INIT_VALUE);
  const [otherHand, setOtherHand] = useState(INIT_VALUE);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [RSPHistory, setRSPHistory] = useState([]);

  const handleButtonClick = (nextHand) => {
    setHand(nextHand);
    setOtherHand(generateRandomHand());
    const nextResult = getResult(hand, otherHand);

    if (nextResult === '승리') {
      setScore(score + 1);
    }

    if (nextResult === '패배') {
      setOtherScore(score + 1);
    }

    setRSPHistory([...RSPHistory, nextResult]);
  };

  const handleClearClick = () => {
    setHand(INIT_VALUE);
    setOtherHand(INIT_VALUE);
    setScore(0);
    setOtherScore(0);
    setRSPHistory([]);
  };

  return (
    <div>
      <h1>가위바위보</h1>
      <div>
        <h2>패를 골라주세요</h2>
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
      <div>
        <h2>결과</h2>
        <div>
          나 <HandIcon value={hand} /> 점수:{score}
        </div>
        <br />
        <div>
          상대 <HandIcon value={otherHand} /> 점수: {otherScore}
        </div>
        <h2>승부 기록</h2>
        <div>{RSPHistory.join(' ')}</div>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
    </div>
  );
}

export default RSPGame;
