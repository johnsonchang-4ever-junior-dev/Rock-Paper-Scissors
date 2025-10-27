// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.
console.log("Hello World")


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let userInput = prompt("Enter rock, paper, or scissors:");
    userInput = userInput.toLowerCase();
    return userInput;
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(`Your choice:     ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}. You earn a point.`)
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}. Computer earns a point.`)
        computerScore++;
    }
    
}

// const rounds = 5;
// for (let i = 0; i < rounds; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
// }

// console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
// if (humanScore > computerScore) {
//     console.log("Congratulations! You are the overall winner!");
// } else if (computerScore > humanScore) {
//     console.log("Sorry! The computer is the overall winner!");
// } else {
//     console.log("It's an overall tie!");
// }   
