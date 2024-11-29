import { useState, useEffect } from "react";
// import "../API_Acess/API_output.jsx";
import "./card-board.css";

function CreateCards({ gifs }) {
  const [cards, setCardState] = useState([]);

  useEffect(() => {
    if (gifs.length > 0) {
      const initialCards = gifs.map((gif, index) => ({
        id: index + 1,
        isSelected: false,
        value: gif.images.fixed_height.url,
      }));
      setCardState(initialCards);
    }
  }, [gifs]);

  const [streakCount, setStreakCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleCards = (cardsArray) => {
    const shuffledCards = [...cardsArray];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    return shuffledCards;
  };

  const selectCard = (id) => {
    const card = cards.find((card) => card.id === id);
    if (card.isSelected) {
      setStreakCount(0);
      const resetCards = cards.map((card) => ({ ...card, isSelected: false }));
      const shuffledResetCards = shuffleCards(resetCards);
      const updatedCards = shuffledResetCards.map((card) =>
        card.id === id ? { ...card, isSelected: true } : card
      );
      setCardState(updatedCards);
      setStreakCount(1);
      return;
    }

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, isSelected: true } : card
    );

    const shuffledCards = shuffleCards(updatedCards);
    setCardState(shuffledCards);

    const newStreakCount = streakCount + 1;
    setStreakCount(newStreakCount);

    if (newStreakCount > highScore) {
      setHighScore(newStreakCount);
    }
  };

  return (
    <div className="full-component">
      <div className="score-counters">
        <div className="score-text">Current Streak: {streakCount}/12</div>
        <div className="score-text">High Score: {highScore}</div>
      </div>
      <div className="card-board">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => selectCard(card.id)}
            className="card"
          >
            <img src={card.value} alt={`GIF ${card.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateCards;
