import React, { useState, useEffect } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = ({ location }) => {

  const [ player1, setPlayer1 ] = useState("");
  const [ player2, setPlayer2 ] = useState("");
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber],player1,player2);
  const xO = xIsNext ? "X" : "O";
  const playerTurn=(stepNumber%2===0)? player1 :player2;

  useEffect(() => {
    let { player1, player2 } = location.state.props;
    
    setPlayer1(player1)
    setPlayer2(player2)
  }, [ location ])


  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? (
              <span className="">Winner: {winner}</span>
            ) : stepNumber !== 9 ? (
              "Next Player: " + playerTurn
            ) : (
              <span className="">Game Ends in a Draw</span>
            )}</h3>
      </div>
    </>
  );
};

export default Game;
