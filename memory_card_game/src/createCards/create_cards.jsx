import { useState } from "react";
import "./card-board.css";

function CreateCards() {
  const [cards, setCardState] = useState([
    { id: 1, isSelected: false, value: "1" },
    { id: 2, isSelected: false, value: "2" },
    { id: 3, isSelected: false, value: "3" },
    { id: 4, isSelected: false, value: "4" },
    { id: 5, isSelected: false, value: "5" },
    { id: 6, isSelected: false, value: "6" },
    { id: 7, isSelected: false, value: "7" },
    { id: 8, isSelected: false, value: "8" },
    { id: 9, isSelected: false, value: "9" },
    { id: 10, isSelected: false, value: "10" },
    { id: 11, isSelected: false, value: "11" },
    { id: 12, isSelected: false, value: "12" },
  ]);

  const [streakCount, setStreakCount] = useState(0);

  const selectCard = (id) => {
    const card = cards.find((card) => card.id === id);
    if (card.isSelected) {
      setStreakCount(0);
      return;
    }

    setCardState(
      cards.map((card) =>
        card.id === id ? { ...card, isSelected: true } : card
      )
    );
    setStreakCount(streakCount + 1);
  };
  return (
    <div className="full-component">
      <div className="card-board">
        {cards.map((card) => (
          <div key={card.id} onClick={() => selectCard(card.id)} className="card">
            {card.value}
          </div>
        ))}
      </div>
        <div className="streak-counter">Current Streak: {streakCount}/12</div>
    </div>
  );
}

export default CreateCards;
