import '../styles/game-over-modal.css';

export default function GameOverModal({ doubleClickedCard, onNewGame }) {
  return (
    <div className="modal-container">
      <div className="game-over-modal">
        <h3>You lost :(</h3>
        <h4>You clicked {doubleClickedCard.name} twice.</h4>
        <button onClick={onNewGame} type="button">
          New game
        </button>
      </div>
      <div className="backdrop"></div>
    </div>
  );
}
