
//new game script
var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

//player pick script
var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

//initial values
var gameState = 'notStarted', //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
};
//game elements
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

//gamestate status 
function setGameElements() {
    switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'One more time';
        case 'notStarted':
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}
  
setGameElements();



//new game viariables
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

//new game function
function newGame() {
    player.name = prompt('Please enter your name', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        
        setGamePoints();
    }
}

//player pick
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}


//computer pick
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

//place picks on site
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');



//resoult check
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  
    var winnerIs = 'player';
  
      if (playerPick == computerPick) {
          winnerIs = 'noone'; // remis
      } else if (
          (computerPick == 'rock' &&  playerPick == 'scissors') ||
          (computerPick == 'scissors' &&  playerPick == 'paper') ||
          (computerPick == 'paper' &&  playerPick == 'rock')) {
  
          winnerIs = 'computer';
      }
  
      if (winnerIs == 'player') {
          playerResultElem.innerHTML = "Win!";
          player.score++;
      } else if (winnerIs == 'computer') {
          computerResultElem.innerHTML = "Win!";
          computer.score++;
      }
  
  }


//score update
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

/* end game code


 if (computer.score == 10) {
        gameState = 'ended';
        alert('You Loose!');
        setGameElements();
    } else if (player.score == 10) {
        gameState = 'ended';
		winGameElement.style.display = "block";
        alert('You Win!');
        setGameElements();
        
        
    }
*/
