function HandButton({ value, onClick }) {
  return (
    <button onClick={onClick}>
      {value}
    </button>
  );
}

export default HandButton;
