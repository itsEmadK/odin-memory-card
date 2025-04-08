import '../styles/difficulty-screen.css';
export default function DifficultyScreen({ onDifficultySelected }) {
  return (
    <div className="diff-container">
      <h2 className="difficulty-heading">Select the difficulty level</h2>
      <div className="difficulties">
        <button onClick={() => onDifficultySelected('easy')}>Easy</button>
        <button onClick={() => onDifficultySelected('medium')}>
          Medium
        </button>
        <button onClick={() => onDifficultySelected('hard')}>Hard</button>
      </div>
    </div>
  );
}
