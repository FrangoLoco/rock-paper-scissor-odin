let humanScore = 0
let computerScore = 0
let btnRock = document.getElementById("rock")
let btnPaper = document.getElementById("paper")
let btnScissors = document.getElementById("sicssors")
let divResult = document.getElementById("result")
let divScore = document.getElementById("score")

btnRock.addEventListener("click", () => {
    playRound(getHumanChoice("rock"), getComputerChoice())
})

btnPaper.addEventListener("click", () => {
    playRound(getHumanChoice("paper"), getComputerChoice())
})

btnScissors.addEventListener("click", () => {
    playRound(getHumanChoice("scissors"), getComputerChoice())
})


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

function getHumanChoice(choice){
    return choice
}

function playRound(humanChoice, computerChoice){
    if(humanScore === 5){
        return divScore.textContent = `Your socre is ${humanScore} You Win!!!`
    }else if(computerScore === 5){
        return divScore.textContent = `You lose computer score is ${computerScore} :(`
    }
    

    if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++
        divResult.textContent =`You win! ${humanChoice} beats ${computerChoice}`
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++ 
        divResult.textContent =`You win! ${humanChoice} beats ${computerChoice}`
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++ 
        divResult.textContent =`You win! ${humanChoice} beats ${computerChoice}`
    }else if(humanChoice === computerChoice){
        divResult.textContent = `It's a draw you chose ${humanChoice} and the computer chose ${computerChoice}`
    }else {
        computerScore++
        divResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
    }

    divScore.textContent = `Your socre is ${humanScore} computer's score is ${computerScore}`
}
