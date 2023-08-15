import React from "react";

const PlayButton = ({
  isStarted,
  setIsStarted,
  setPlayerOne,
  setPlayerTwo,
}) => {
  const playButtonhandler = () => {
    setIsStarted(!isStarted);
    if (!isStarted) {
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
