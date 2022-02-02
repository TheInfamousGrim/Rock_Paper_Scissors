const weapon = ["rock","paper","scissors"];

function computerPlay() {
    return weapon[Math.floor(Math.random() * 3)];
}

// This function is the main loop for the game itself 

function playRound(playerSelection, computerSelection) {
    // the players selection is standardized and made lower case.
    playerSelection = playerSelection.toLowerCase();
    // the computers selection is assigned to a local variable.
    computerSelection = computerPlay();
    // The tie scenario if both computer and human have the same weapon.
    if (computerSelection === playerSelection){
        return tie = 0;
        // the win scenario 
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        return winner = 1;
    // the lose scenario
    } else {
        return loser = 2;
    }   
}

let playerScore = 0;
let computerScore = 0;
//let tally = `The results between sentience & memulation are as follows: sentience has ${playerScore} & memulation has ${computerScore}`;


function game() {
    for (i = 5; i > 0; i--) {
        let playerSelection = prompt("What is your move? Rock, paper or scissors?");
        let results = playRound(playerSelection,computerPlay());
        if (results === 0) {
            console.log(`The results between sentience & memulation are as follows: sentience has ${playerScore} & memulation has ${computerScore}`);
        } else if (results === 1) {
            playerScore = playerScore + 1;
            console.log(`The results between sentience & memulation are as follows: sentience has ${playerScore} & memulation has ${computerScore}`);
        } else {
            computerScore = computerScore + 1;
            console.log(`The results between sentience & memulation are as follows: sentience has ${playerScore} & memulation has ${computerScore}`);
        }
    }
    console.log("The results are final. They are as follows...");
    if (computerScore > playerScore) {
        return console.log(`Setience: ${playerScore}.
        Memulation: ${computerScore}.
        The memulation has won... prepare to be assimilated.`);
    } else {
        return console.log(`Memeulation: ${computerScore}.
        Sentience: ${playerScore}.
        Sentience has conquered memulation. Humanity wins this day.`);
    }
}

game();