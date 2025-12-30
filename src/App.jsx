import Button from './Button';
import Dice from './Dice';

function App() {
  //dice game logic
  const handleRollClick = () => {
    console.log('던지기 버튼 클릭!');
  };

  const handleClearClick = () => {
    console.log('처음부터 버튼 클릭!');
  };

  return (
    <div>
      <h1>주사위 게임</h1>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color={'red'} num={2} />
    </div>
  );
}

export default App;
