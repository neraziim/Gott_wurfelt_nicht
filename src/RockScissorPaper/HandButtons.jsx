import HandIcon from './HandIcon';

function HandButton({ value, onClick }) {
  return (
    <button onClick={() => onClick({ value })}>{HandIcon({ value })}</button>
  );
}

export default HandButton;
