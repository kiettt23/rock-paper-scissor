import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  return (
    <img
      onClick={() => {
        handleGameItemChange(gameItem); // Khi có sự kiện, truyền lựa chọn (gameItem - Rock, Paper, Scissors) lên Main thông qua Choices để Main xử lý
      }}
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
