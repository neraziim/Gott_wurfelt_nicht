import Button from './Button';
import HandButton from './HandButton';

function RSPGame() {
  const handleButtonClick = (value) => console.log(value);

  const handleClearClick = () => console.log('처음부터');

  return (
    <div>
      <h1>가위바위보</h1>
      <div>
        <h2>패를 골라주세요</h2>
        <HandButton value="scissor" onClick={handleButtonClick}/>
        <HandButton value="rock" onClick={handleButtonClick}/>
        <HandButton value="paper" onClick={handleButtonClick}/>
      </div>
      <div>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
    </div>
  );
}

export default RSPGame;
