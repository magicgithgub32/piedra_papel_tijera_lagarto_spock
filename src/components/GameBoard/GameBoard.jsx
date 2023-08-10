import { gameOptions } from "../../gameOptions";
import PlayerButton from "../PlayerButton";
import "./GameBoard.css";
import React from "react";

const GameBoard = ({
  isPlayerOneTurn,
  setIsPlayerOneTurn,
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
}) => {
  return (
    <article className="game-board">
      <section className="players-container">
        <div className="player-one-container">
          {playerOne !== null && (
            <img
              className="player-one-image"
              src={gameOptions[playerOne].image}
              alt="playerOneImage"
            />
          )}
        </div>
        <div className="player-two-container">
          {playerTwo !== null && (
            <img
              className="player-two-image"
              src={gameOptions[playerTwo].image}
              alt="playerTwoImage"
            />
          )}
        </div>
      </section>

      <section className="player-button-container">
        <PlayerButton
          setIsPlayerOneTurn={setIsPlayerOneTurn}
          isPlayerOneTurn={isPlayerOneTurn}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          playerTwo={playerTwo}
        />

        <p>{isPlayerOneTurn ? "PLAYER ONE PLAYS" : "PLAYER TWO PLAYS"}</p>
      </section>
    </article>
  );
};

export default GameBoard;
