document.addEventListener("DOMContentLoaded", function() {
  start();
});

function start() {

  var pText = document.getElementById("half1");
  var pComp = document.getElementById("half2");
  var pOption = document.getElementById("playerOption");
  var pCompOption = document.getElementById("computerOption");
  var rock = document.getElementById("rock");
  var paper = document.getElementById("paper");
  var scissors = document.getElementById("scissors");
  var scorePlayer = document.getElementById("scorePlayer");
  var scoreTie = document.getElementById("scoreTie");
  var scoreComputer = document.getElementById("scoreComputer");
  var stats = document.getElementById("stats");

  var randomComputerOption = "";
  var player = "";
  var res = "";

  var gameCounter = 0;
  var wCounter = 0;
  var tCounter = 0;
  var lCounter = 0;

  scorePlayer.innerHTML = 0;
  scoreTie.innerHTML = 0;
  scoreComputer.innerHTML = 0;

  rock.addEventListener("click", function() {
    actions(this)
  });

  paper.addEventListener("click", function() {
    actions(this)
  });

  scissors.addEventListener("click", function() {
    actions(this)
  });

  // Function to get a randomized computer selection after choosing rock, paper or scissors
  function actions(option) {

    player = option.id;

    randomOptionColor()
    pOption.classList.add("preAnimation");
    pOption.innerHTML = `${option.id}!`
    setTimeout(function(){
      pOption.classList.remove("preAnimation")
    },250)
    whoWon(player, randomComputerOption);
    updateCounters();
  };

  // randomize computer option
  function randomOptionColor() {
    var list = ["rock", "paper", "scissors"];
    var result = list[Math.floor(Math.random() * 3)];

    switch (result) {
      case "rock":
        pCompOption.classList.add("preAnimation");
        pCompOption.innerHTML = `rock!`
        setTimeout(function(){
          pCompOption.classList.remove("preAnimation")
        },250)
        randomComputerOption = "rock";
        break;
      case "paper":
        pCompOption.classList.add("preAnimation");
        pCompOption.innerHTML = `paper!`
        setTimeout(function(){
          pCompOption.classList.remove("preAnimation")
        },250)
        randomComputerOption = "paper";
        break;
      case "scissors":
        pCompOption.classList.add("preAnimation");
        pCompOption.innerHTML = `scissors!`
        setTimeout(function(){
          pCompOption.classList.remove("preAnimation")
        },250)
        randomComputerOption = "scissors";
        break;
    };

    return result;
  };

  // check who wins
  function whoWon(playerS, computerS) {

    switch(`${playerS} vs ${computerS}`) {
      case "rock vs paper":
        lCounter += 1;
        res = "Computer wins!"
        break;
      case "rock vs scissors":
        wCounter += 1;
        res = "Player wins!"
        break;
      case "paper vs scissors":
        lCounter += 1;
        res = "Computer wins!"
        break;
      case "paper vs rock":
        wCounter += 1;
        res = "Player wins!"
        break;
      case "scissors vs rock":
        lCounter += 1;
        res = "Computer wins!"
        break;
      case "scissors vs paper":
        wCounter += 1;
        res = "Player wins!"
        break;
      default:
        tCounter += 1;
        res = "Tie!"
        break;
    };

    addResult(playerS, computerS);
  };

  // update all counters
  function updateCounters() {
    
    scorePlayer.innerHTML = wCounter;
    scoreTie.innerHTML = tCounter;
    scoreComputer.innerHTML = lCounter;
  };

  // update game log
  function addResult(playerS, computerS) {
    gameCounter += 1;

    var liNext = document.createElement("li");
    var text = document.createTextNode(`${gameCounter}. ${res} (${playerS} vs ${computerS})`);

    liNext.appendChild(text);
    stats.insertBefore(liNext, stats.childNodes[0]);
  };

}
