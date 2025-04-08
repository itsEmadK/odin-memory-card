import { useState } from 'react';
import '../styles/card-grid.css';
import Card from './Card.jsx';
import { shuffleArray } from '../logic/shuffleArray.js';

export default function CardGrid({
  initialCards,
  incScore,
  onGameOver,
  hideCards,
}) {
  const [cards, setCards] = useState(shuffleArray(initialCards));
  const [clickedIds, setClickedIds] = useState(shuffleArray(initialCards));

  function handleCardClick(cardId) {
    if (clickedIds.includes(cardId)) {
      onGameOver();
    } else {
      setClickedIds([...clickedIds, cardId]);
      setCards(shuffleArray(cards));
      incScore();
    }
  }

  return (
    <div className="card-grid">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            isHidden={hideCards}
            onClick={() => {
              handleCardClick(card.id);
            }}
          ></Card>
        );
      })}
    </div>
  );
}
