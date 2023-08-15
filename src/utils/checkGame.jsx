import { gameOptions } from "../gameOptions";

export const checkGame = (
  isStarted,
  playerOne,
  playerTwo,
  setPlayerOne,
  setPlayerTwo,
  setIsPlayerOneTurn,
  setIsStarted
) => {
  if (
    isStarted &&
    playerOne === playerTwo &&
    playerOne !== null &&
    playerTwo !== null
  )
    setTimeout(() => {
      alert("🌀 THAT'S A TIE, CONTINUE PLAYING 🌀");
      setPlayerOne(null);
      setPlayerTwo(null);
      setIsPlayerOneTurn(true);
      setIsStarted(false);
    }, 500);

  if (gameOptions[playerOne]?.beats.includes(playerTwo)) {
    setTimeout(() => {
      alert("🖖 PLAYER ONE WINS  🖖");
      setPlayerOne(null);
      setPlayerTwo(null);
      setIsPlayerOneTurn(true);
      setIsStarted(false);
    }, 500);
  } else if (gameOptions[playerTwo]?.beats.includes(playerOne)) {
    setTimeout(() => {
      alert("🦎 PLAYER TWO WINS!! 🦎");
      setPlayerOne(null);
      setPlayerTwo(null);
      setIsPlayerOneTurn(true);
      setIsStarted(false);
    }, 500);
  }
};
