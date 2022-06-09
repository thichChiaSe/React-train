import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { calculateWinner } from "../../util/helper";
import Board from "./Board";
import "./style.css";
export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true); // mặc định dấu X
  };
  const handleClick = (index) => {
    const boardCopy = [...board]; // clone
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext); // có giá trị ngược lại giá trị trước đó, vd : X <-> O
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      <button onClick={handleResetGame} className="game-reset">
        Reset Game
      </button>
    </div>
  );
};
