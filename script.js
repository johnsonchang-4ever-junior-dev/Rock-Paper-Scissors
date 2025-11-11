// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.
console.log("Hello World")
const container = document.querySelector(".game");
const content = document.createElement("div");
content.classList.add("game-result"); // Add class for styling
container.appendChild(content); // Append to .game container
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

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
        content.textContent = ` Your choice:  ${humanChoice} Computer choice: ${computerChoice} -->It's a tie! Scores - You: ${humanScore}, Computer: ${computerScore}`;

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}. You earn a point.`)
        content.textContent = ` Your choice:  ${humanChoice} Computer choice: ${computerChoice} --> You win! ${humanChoice} beats ${computerChoice}. You earn a point. Scores - You: ${humanScore}, Computer: ${computerScore}`;
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}. Computer earns a point.`)
        content.textContent = ` Your choice:  ${humanChoice} Computer choice: ${computerChoice} --> You lose! ${computerChoice} beats ${humanChoice}. Computer earns a point. Scores - You: ${humanScore}, Computer: ${computerScore}`;
        computerScore++;
    }

    if (humanScore === 5 || computerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        content.textContent = `Final Scores - You: ${humanScore}, Computer: ${computerScore}`;
        if (humanScore > computerScore) {
            content.textContent += "\nCongratulations! You are the overall winner!";
        } else if (computerScore > humanScore) {
            content.textContent += "\nSorry! The computer is the overall winner!";
        } else {
            content.textContent += "\nIt's an overall tie!";
        }
    }
    
}

// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)




rockButton.addEventListener("mouseup", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});

paperButton.addEventListener("mouseup", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});

scissorsButton.addEventListener("mouseup", () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
});

// const rounds = 5;
// for (let i = 0; i < rounds; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
// }

console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
} else if (computerScore > humanScore) {
    console.log("Sorry! The computer is the overall winner!");
} else {
    console.log("It's an overall tie!");
}   

// Add a div for displaying results and change all of your console.logs into DOM methods.


content.classList.add("content");
container.appendChild(content);



