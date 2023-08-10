import React, { useEffect } from "react";
import { gameOptions } from "../gameOptions";

const PlayerButton = ({
  setIsPlayerOneTurn,
  isPlayerOneTurn,
  setPlayerOne,
  setPlayerTwo,
  playerTwo,
}) => {
  const play = Math.floor(Math.random() * gameOptions.length);
  const selectedOption = gameOptions[play];

  const playerButtonhandler = () => {
    isPlayerOneTurn
      ? setPlayerOne(selectedOption.id)
      : setPlayerTwo(selectedOption.id);

    setIsPlayerOneTurn(!isPlayerOneTurn);
  };

  return (
    <button className="play-button" onClick={playerButtonhandler}>
      CLICK
    </button>
  );
};

export default PlayerButton;
