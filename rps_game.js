// RPS (Rock, Paper, Scissors)
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {

if (p1 == p2)
  {return "Draw!";}
  
else if ((p1 == "scissors" && p2 == "paper") || 
          (p1 == "paper" && p2 == "rock") || 
          (p1 == "rock" && p2 == "scissors") )
  {return "Player 1 won!";}
  
else 
  { return "Player 2 won!";}
};