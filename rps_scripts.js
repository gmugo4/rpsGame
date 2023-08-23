let player_score = 0
let computer_score = 0
let game_count = 0

// this game is the best of 5. if game count is equal to 7 and score of 
// player_score or computer_score >=  5 then game over computer or player won 
// rock = 1, scisors = 2, paper = 3, the computer picks a random number 
// between 1 and 3 corresponding to the objects. save as variable 
// computer pick. Display computer and player pick. let the player pick based
// on what button save as variable 
// player pick. if player pick = scisors and computer = paper then player 
// win 
// if player pick = rock and computer equals scissors then player 
// wins if player = paper and computer = rock then player wins 
// else computer wins. increment player and computer score accordingly


const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
function is_end_game(){
    if ((game_count >= 7)) {
        if (player_score > computer_score) {
            (endgameMsg.textContent = 'You won!')       
        } else {
        (endgameMsg.textContent = 'You lost...')
        }
        restartGame() 
        openEndgameModal()
        game_count = 0
        return true
       }
       return false
    }


const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))

restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)
round_winner = ''

function handleClick(player_selection) {
    computer_selection = get_random()
    game_play(player_selection, computer_selection)
    update_choices(player_selection, computer_selection)

}


function game_play(player_selection, computer_selection){
    if(player_selection == computer_selection) {
        round_winner = 'tie'
    }
    
    if (((player_selection == 'ROCK') && (computer_selection == 'SCISSORS'))
    || ((player_selection == 'SCISSORS') && (computer_selection == 'PAPER'))
    || ((player_selection == 'PAPER') && (computer_selection == 'ROCK'))) {
        player_score ++
        round_winner = 'player'
    } else {
        computer_score ++
        round_winner = 'computer'
    }
    update_score(player_selection, computer_selection, round_winner)
    //updateScoreMsg(player_score, computer_score, round_winner)
    game_count ++
    is_end_game() //checks if game is over here
}


const scoreMessage = document.getElementById('scoreMessage')
const scoreInfo = document.getElementById('scoreInfo')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')

function update_score(player_selection, computer_selection, round_winner) {
    if (round_winner == 'computer') {
        scoreInfo.textContent = 'computer win 🤖'
        scoreMessage.textContent = `${
           computer_selection
          } beats ${player_selection}`
        
    }
    if (round_winner == 'player') {
        scoreInfo.textContent = 'player win 🤪'
        scoreMessage.textContent = `${
            player_selection
          } beats ${computer_selection}`
    } else {
        scoreInfo.textContent = 'tie 🙄'
    }

    playerScorePara.textContent = `Player: ${player_score}`
    computerScorePara.textContent = `Computer: ${computer_score}`
}

function get_random() {
    let number_choice =  Math.floor(Math.random() * 3)
    switch(number_choice) {
        case 0:
            return 'ROCK'
        case 1:
            return 'SCISSORS'
        case 2:
            return 'PAPER'

    }
}

const player_sign = document.getElementById("playerSign")
const computer_sign = document.getElementById("computerSign")
function update_choices(player_selection, computer_selection) {
    
    switch (player_selection) {
        case 'ROCK':
            player_sign.textContent =  '✊'
            break;
        case 'SCISSORS':
            player_sign.textContent =  '✂️'
            break;
        case 'PAPER':
            player_sign.textContent =  '✋'
            break;  

    }

    switch (computer_selection) {
        case 'ROCK':
            computer_sign.textContent =  '✊'
            break;
        case 'SCISSORS':
            computer_sign.textContent =  '✂️'
            break;
        case 'PAPER':
            computer_sign.textContent =  '✋'
            break;  

    }

}

function restartGame() {
    player_score = 0
    computer_score = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }



function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  } //function to open the thing that shows the ending result 

function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }



