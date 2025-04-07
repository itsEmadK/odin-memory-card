import { useState } from 'react';
import '../styles/card-grid.css';
import Card from './Card.jsx';

export default function CardGrid({
  cards,
  onValidChoice,
  onInvalidChoice,
  hideCards,
}) {
  const [clickedIds, setClickedIds] = useState([]);

  function handleCardClick(cardId) {
    if (clickedIds.includes(cardId)) {
      onInvalidChoice();
    } else {
      setClickedIds([...clickedIds, cardId]);
      onValidChoice();
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
