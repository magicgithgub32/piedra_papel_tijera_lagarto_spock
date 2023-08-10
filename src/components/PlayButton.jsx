import React from "react";

const PlayButton = ({
  isStarted,
  setIsStarted,
  setPlayerOne,
  setPlayerTwo,
  isGameOver,
}) => {
  const playButtonhandler = () => {
    setIsStarted(!isStarted);
    if (isGameOver) {
      setPlayerOne(null);
      setPlayerTwo(null);
    }
  };

  return (
    <button className="play-button" onClick={playButtonhandler}>
      {isStarted ? "STOP" : "PLAY"}
    </button>
  );
};

export default PlayButton;
