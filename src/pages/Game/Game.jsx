import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Game.css";
import React, { useEffect, useState } from "react";
import PlayButton from "../../components/PlayButton";
import GameBoard from "../../components/GameBoard/GameBoard";
import { checkGame } from "../../utils/checkGame";

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  useEffect(() => {
    checkGame(
      isStarted,
      playerOne,
      playerTwo,
      setPlayerOne,
      setPlayerTwo,
      setIsPlayerOneTurn,
      setIsStarted
    );
  }, [playerOne, playerTwo]);

  return (
    <section className="game-wrapper">
      <Link to={"/Home"}>
        <Button text={"HOME"} />
      </Link>
      <article className="home-button-article">
        <PlayButton
          setIsStarted={setIsStarted}
          isStarted={isStarted}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
        />
      </article>
      {isStarted && (
        <GameBoard
          isPlayerOneTurn={isPlayerOneTurn}
          setIsPlayerOneTurn={setIsPlayerOneTurn}
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
          playerTwo={playerTwo}
          setPlayerTwo={setPlayerTwo}
        />
      )}
    </section>
  );
};

export default Game;
