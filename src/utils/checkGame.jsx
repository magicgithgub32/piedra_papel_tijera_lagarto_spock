import { gameOptions } from "../gameOptions";

export const checkGame = (isGameOver, setIsGameOver, playerOne, playerTwo) => {
  if (
    isGameOver ||
    playerOne === null ||
    playerTwo === null ||
    playerOne === playerTwo
  ) {
    return;
  }

  if (gameOptions[playerOne]?.beats.includes(playerTwo)) {
    alert("🖖 PLAYER ONE WINS  🖖");
    setIsGameOver(true);
  } else if (gameOptions[playerTwo]?.beats.includes(playerOne)) {
    alert("🦎 PLAYER TWO WINS!! 🦎");
    setIsGameOver(true);
  }
};
