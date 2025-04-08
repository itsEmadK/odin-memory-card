import { useState } from 'react';
import { authors } from '../data/authors.js';
import CardGrid from './CardGrid.jsx';
import '../styles/game-screen.css';
import { shuffleArray } from '../logic/shuffleArray.js';

export default function GameScreen({ difficulty = 'easy' }) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(
    shuffleArray(authors)
  );
  const [clickedIds, setClickedIds] = useState([]);

  function handleScoreIncrement() {
    setScore(score + 1);
  }

  function handleGameOver(cardId) {
    setRound(round + 1);
    setScore(0);
    if (score > bestScore) {
      setBestScore(score);
    }
    setClickedIds([]);
    setShuffledCards(shuffleArray(shuffledCards));
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

  return (
    <>
      <div className="scoreboard-container">
        <div className="scoreboard">
          <h2 className="score">Score: {score}</h2>
          <h2 className="best-score">Best Score: {bestScore}</h2>
        </div>
      </div>
      <CardGrid
        key={round}
        cards={shuffledCards}
        onCardClicked={handleCardClick}
        hideCards={false}
      ></CardGrid>
      ;
    </>
  );
}
