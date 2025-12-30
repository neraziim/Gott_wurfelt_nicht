import { useState } from 'react';
import DiceGame from './Dice/DiceGame';
import RSPGame from './RockScissorPaper/RSPGame';

function App() {
  const [game, setGame] = useState(DiceGame);

  //game select
  const DiceSelectClick = () => {
    console.alert('주사위놀이!');
    setGame(DiceGame);
  };

  const RSPSelectClick = () => {
    console.alert('가위바위보!');
    setGame(RSPGame);
  };

  return (
    <div>
      <h1>응애</h1>
      <nav>
        <button onClick={() => DiceSelectClick}>주사위놀이</button>
        <button onClick={() => RSPSelectClick}>가위바위보</button>
      </nav>
      <main>{game}</main>
    </div>
  );
}

export default App;
