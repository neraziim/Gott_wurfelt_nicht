import { useState } from 'react';
import DiceGame from './Dice/DiceGame';
import RSPGame from './RockScissorPaper/RSPGame';

function App() {
  const [game, setGame] = useState('Dice'); //hook 내부 hook 금지 경고문 엄청 나옴
  /** Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks.
   * You can only call Hooks at the top level of your React function. */

  const DiceSelectClick = () => {
    alert('aber ich würfle!😛'); //alert()임.. ....
    setGame('Dice');
  };

  const RSPSelectClick = () => {
    alert('가위바위보!');
    setGame('RSP');
  };

  //mode 변경: hook 내부 hook 피하려고 만듬
  const modeChange = () => {
    if (game === 'Dice') {
      return <DiceGame />; //리액트 컴포넌트는 태그형태로 리턴
    }
    if (game === 'RSP') {
      return <RSPGame />; //리액트 컴포넌트는 태그형태로 리턴
    }
  };

  return (
    <div>
      <h1>„Gott würfelt nicht“</h1>
      <nav>
        <button onClick={() => DiceSelectClick()}>주사위놀이</button>
        <button onClick={() => RSPSelectClick()}>가위바위보</button>
      </nav>
      <main>{modeChange()}</main>
    </div>
  );
}

export default App;
