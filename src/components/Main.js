import React, { useState, useEffect } from "react";
import Result from "./Result";
import Display from "./Display";
import Choices from "./Choices";

import { getRandomGameItem, calculatorUserWinner } from "../utils";

const gameItems = [
  {
    url: "/images/paper.png",
    id: 0,
    winItemIds: [1],
    name: "Paper",
  },
  {
    url: "/images/rock.png",
    id: 1,
    winItemIds: [2],
    name: "Rock",
  },
  {
    url: "/images/scissor.png",
    id: 2,
    winItemIds: [0],
    name: "Scissor",
  },
];

export default function Main() {
  const [result, setResult] = useState("N/N");
  const [userGameItem, setUserGameItem] = useState(null);
  const [computerGameItem, setComputerGameItem] = useState(null);

  // Cập nhật trạng thái lựa chọn của người chơi
  const handleGameItemChange = (gameItem) => {
    setUserGameItem({ ...gameItem });
  };

  // Sử dụng useEffect vì đây là 1 tác động ngoài luồng k liên quan đến render
  useEffect(() => {
    if (userGameItem) {
      const computerNewItem = getRandomGameItem(gameItems);
      setComputerGameItem({ ...computerNewItem });
      setResult(calculatorUserWinner(userGameItem, computerNewItem));
    }
  }, [userGameItem]);

  return (
    <div className="conainer">
      <div className="main">
        <Result
          user1GameItem={userGameItem} // Truyền lựa chọn để hiển thị
          user2GameItem={computerGameItem} // Truyền lựa chọn để hiển thị
          result={result} // Truyền kết quả xuống Result hiển thị
        />
        <Display />
        <Choices
          gameItems={gameItems} // Truyền mảng các đối tượng để Choice xử lý logic khi người dùng Onclick
          handleGameItemChange={handleGameItemChange} // Truyền props xuống Choice
        />
      </div>
    </div>
  );
}
