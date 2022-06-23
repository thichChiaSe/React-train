import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../util/helper";
import Board from "./Board";
import "./style.css";
export const Game = () => {
  const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
  };
  const gameReducer = (state, action) => {
    switch (action.type) {
      case "CLICK": {
        console.log(state, action.payload);
        const { board, xIsNext } = state; //detructuring
        const { index, winner } = action.payload;
        if (winner || board[index]) return state;
        const nextState = JSON.parse(JSON.stringify(state)); //deep copy ->clome
        nextState.board[index] = xIsNext ? "X" : "O";
        nextState.xIsNext = !xIsNext;
        return nextState;
      }
      case "RESET":
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board = Array(9).fill(null);
        nextState.xIsNext = true;
        return nextState;
      default:
        break;
    }
    return state;
  };
  const [state, dispatch] = useReducer(gameReducer, initialState);
  //initialState sẽ là {}
  // const action = {type:'click', payload:{}};
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
    setBoard(Array(9).fill(null));
    setXIsNext(true); // mặc định dấu X
  };
  const handleClick = (index) => {
    const boardCopy = [...state.board]; // clone
    if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
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
