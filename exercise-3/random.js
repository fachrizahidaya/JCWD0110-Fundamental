const randomPick = (arr) => {
  let computer = Math.floor(Math.random() * arr.length);
  let player = Math.floor(Math.random() * arr.length);
  console.log("Computer:",arr[computer]);
  console.log("Player:",arr[player]);
  if (player === computer) {
    return "Tie";
  } else if (
    (player === 0 && computer === 2) ||
    (player === 1 && computer === 0) ||
    (player === 2 && computer === 1)
  ) {
    return "Player Win";
  } else {
    return "Player Lose";
  }
};
let a = ["Rock", "Paper", "Scissor"];
let b = randomPick(a);
console.log(b);
