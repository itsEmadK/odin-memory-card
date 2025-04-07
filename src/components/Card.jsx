import '../styles/card.css';

export default function Card({ card, onClick, isHidden }) {
  return (
    <div onClick={onClick} className={`card ${isHidden ? 'hidden' : ''}`}>
      <div className="front">
        <img className="card-image" src={card.image} alt=""></img>
        <h3 className="card-name">{card.name}</h3>
      </div>
      <div className="back"></div>
    </div>
  );
}
