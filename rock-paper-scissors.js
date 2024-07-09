let humanScore = 0
let computerScore = 0
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1){
        return "rock"
    }else if(randomNumber === 2){
        return "paper"
    }else{
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = Number(prompt("Choose 1 for rock, 2 for paper, 3 for scissors"))

    if(choice === 1){
        return "rock"
    }else if(choice === 2){
        return "paper"
    }else if(choice === 3){
        return "scissors"
    }else{
        console.log("Choose a valid answer")
        return getHumanChoice()
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++
        return `You win! ${humanChoice} beats ${computerChoice}`
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++ 
        return `You win! ${humanChoice} beats ${computerChoice}`
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++ 
        return `You win! ${humanChoice} beats ${computerChoice}`
    }else if(humanChoice === computerChoice){
        return `It's a draw you chose ${humanChoice} and the computer chose ${computerChoice}`
    }else {
        computerScore++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
}
