import { useState } from 'react';
import { authors } from '../data/authors.js';
import CardGrid from './CardGrid.jsx';
import '../styles/game-screen.css';
import { shuffleArray } from '../logic/shuffleArray.js';
import GameOverModal from './GameOverModal.jsx';

export default function GameScreen({ difficulty = 'easy' }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(
    shuffleArray(authors)
  );
  const [clickedIds, setClickedIds] = useState([]);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [doubleClickedCard, setDoubleClickedCard] = useState(null);

  function handleScoreIncrement() {
    setScore(score + 1);
  }

  function handleGameOver(cardId) {
    setShowGameOverModal(true);
    setDoubleClickedCard(shuffledCards.find((card) => card.id === cardId));
  }

  function handleCardClick(cardId) {
    if (clickedIds.includes(cardId)) {
      handleGameOver(cardId);
    } else {
      handleScoreIncrement();
      setClickedIds([...clickedIds, cardId]);
      setShuffledCards(shuffleArray(shuffledCards));
    }
  }

  function handleNewGame() {
    setScore(0);
    if (score > bestScore) {
      setBestScore(score);
    }
    setShuffledCards(shuffleArray(shuffledCards));
    setShowGameOverModal(false);
    setClickedIds([]);
  }

  return (
    <>
      {showGameOverModal && (
        <GameOverModal
          doubleClickedCard={doubleClickedCard}
          onNewGame={handleNewGame}
        ></GameOverModal>
      )}
      <div className="scoreboard-container">
        <div className="scoreboard">
          <h2 className="score">Score: {score}</h2>
          <h2 className="best-score">
            Best Score: {bestScore} / {shuffledCards.length}
          </h2>
        </div>
      </div>
      <CardGrid
        cards={shuffledCards}
        onCardClicked={handleCardClick}
        hideCards={false}
      ></CardGrid>
      ;
    </>
  );
}
