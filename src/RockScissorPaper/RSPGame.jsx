import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { generateRandomHand } from './utils';

function RSPGame() {
  const initHand = 'rock'
  // hand와 otherHand를 state로 바꿔주세요
  const [hand, setHand] = useState(initHand);
  const [otherHand, setOtherHand] = useState(initHand);

  const handleButtonClick = (nextHand) => {
    // hand의 값을 nextHand로 바꿔주세요
    setHand(nextHand);

    // otherHand의 값을 generateRandomHand()의 리턴값으로 바꿔주세요
  setOtherHand(generateRandomHand());
  };

  const handleClearClick = () => {
    // hand와 otherHand의 값을 'rock'으로 바꿔주세요
    setHand(initHand);
    setOtherHand(initHand);
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
          나 <HandIcon value={hand} />
        </div>
        <br />
        <div>
          상대 <HandIcon value={otherHand} />
        </div>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
    </div>
  );
}

export default RSPGame;
