import React, { useState } from 'react';
import './CSS/wickedcss.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button} from 'react-bootstrap';
import Btn from './Components/btncomponent.js'
import Board from './Components/boardcomponent.js';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div >
      <div className='backgroundColor mb-5'>
        <p className='backgroundBox2 mt-5 mx-5 center'>Tic Tac Toe</p>
      </div>
      <div className="game center backgroundColor">



      <div className="game-board backgroundBox">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      

    

      <div className="game-info my-5 backgroundBox">
        <ol>{moves}</ol>
      </div>

      </div>
    

      <Row className='center mt-5 my-5'>

        <Btn />
      </Row>
     
      
    </div>
  );
}

export default Game;
