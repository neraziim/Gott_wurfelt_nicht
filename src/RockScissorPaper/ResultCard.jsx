import HandIcon from "./HandIcon";

function ResultCard({ name, hand, score, result }) {
  console.log(`${name}: ${result}`);

  return (
    <div>
      {name} <HandIcon value={hand} /> 점수:{score}
    </div>
  );
}

export default ResultCard;
