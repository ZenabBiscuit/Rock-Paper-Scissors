let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result>p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choic = ["r", "p", "s"]
    const randomNumber = Math.floor(Math.random() * 3)
    return choic[randomNumber]
}

function convertToWord(letter){
    if(letter=="r") return "Rock"
    if(letter=="p") return "Paper"
    else return "Scissors"
}

function win(user, computer){
    userScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_div.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You win!"
}

function lose(user, computer){
    compScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_div.innerHTML = convertToWord(user) + " loses to " + convertToWord(computer) + ". You lose!"
}

function draw(user, computer){
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_div.innerHTML = "It's a draw!"
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log(computerChoice)
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
    }
}

function main(){
    rock_div.onclick = function() {
        game("r");
    }

    paper_div.onclick = function() {
        game("p");
    }

    scissors_div.onclick = function() {
        game("s");
    }
}

main();