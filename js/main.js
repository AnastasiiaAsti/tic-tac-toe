/*----- constants -----*/
//players 
const PLAYER_X = 'x'
const PLAYER_O = 'o'

const RESET_BTN = document.getElementById('reset')

const CURRENT_TURN = ''
const WINNING_MESSAGE = ''
const DRAW_MESSAGE = ''

//there are 8 winning combinations:
const WINNING_COMBO = [
    ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],
    ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'],
    ['0', '4', '8'], ['2', '4', '6']    
]

let currentPlayer = ''



/*----- app's state (variables) -----*/



/*----- cached element references -----*/
const board = document.getElementById('board')


/*----- event listeners -----*/
//adding eventListener to each cell
board.addEventListener('click', handleClick)
//add an eventListener to a RESET btn
document.getElementById('reset').addEventListener('click', handleReset)


/*----- functions -----*/
//create a function for event listener for the board
function handleClick(evt) {
    //console.log(evt.target)

}
//we need a function that will handle the cell that was pressed
function handlePressedCell() { }
//a function to check results
function handleCheckResults() { }
//a function to change the player
function handlePlayerChange() { }
//a function to reset the game
function handleReset() { }


function render {

}

function init() {
    
}


//1. track the clicks on each cell
//2. cell can only be clicked once
//3. need to update the state of the game
//4. check and display the result of the game (who win, or if its even)
//5. need to stop the game after someone won
//6. restart the game after pressing a button
//7. clear the board and repeat
//8. reflect updates in User Interface 



console.log('js is loaded')