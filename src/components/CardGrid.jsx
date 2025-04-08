import '../styles/card-grid.css';
import Card from './Card.jsx';

export default function CardGrid({ cards, onCardClicked, hideCards }) {
  function handleCardClick(cardId) {
    onCardClicked(cardId);
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
