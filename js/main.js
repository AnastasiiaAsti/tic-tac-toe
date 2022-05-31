/*----- constants -----*/
//players 
const PLAYER_X = 'x'
const PLAYER_O = 'o'
const CELL_ELEMENTS = document.getElementsByClassName('cell')
const RESET_BTN = document.getElementById('reset')

const CURRENT_TURN = `${currentPlayer}'s turn`
const WINNING_MESSAGE = `Player ${currentPlayer} is the WINNER!`
const DRAW_MESSAGE = 'Shake hands, we are all winners here'

//there are 8 winning combinations:
const WINNING_COMBO = [
    ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],
    ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'],
    ['0', '4', '8'], ['2', '4', '6']    
]

let currentPlayer = PLAYER_X
let playerOTurn



/*----- app's state (variables) -----*/
//a varibale for a current game state that I will update in every step of
//the game. For now an emply array.
let gameStates = ['', '', '', '', ''];


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
    //const for the cell that was already clicked
    const clickedCell = evt.target;
    //will use 'data-value' on the cells to identify which cell is which
    //parseInt will transform 'string' into a number
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-value')
    );
    //checking if the cell was clicked or if the game is over
    
        //if not those 2 options - game continues
        handlePressedCell(clickedCell, clickedCellIndex);
    handleCheckResults();
}


//we need a function that will handle the cell that was pressed
function handlePressedCell(clickedCell, clickedCellIndex) { 
    //updating gameState to display that cell was clicked
    gameStates[clickedCellIndex] = currentPlayer;
    //updating UI to show the move
    clickedCell.innerHTML = currentPlayer;
    //console.log(handlePressedCell)
    handlePlayerChange()
}
//a function to check results
function handleCheckResults() { 

}
//a function to change the player
function handlePlayerChange() { 
    if (currentPlayer === PLAYER_X) {
        currentPlayer = PLAYER_O;
    } else {
        currentPlayer = PLAYER_X
    }
}
//a function to reset the game
function handleReset() {
}


function render() {}

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