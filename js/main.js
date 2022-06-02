/*----- constants -----*/
const CELL_ELEMENTS = document.querySelectorAll('.cell')
const RESET_BTN = document.getElementById('reset')

//players 
const PLAYER_X = 'x';
const PLAYER_O = 'o';


let currentPlayer = PLAYER_X;

const BOARD = (new Array(9).fill(null))


/*----- app's state (variables) -----*/
//let gameStates = ['', '', '', '', '', '', '', '', ''];


/*----- cached element references -----*/



/*----- event listeners -----*/
//add event listener to listen to a clicked cell
CELL_ELEMENTS.forEach((cell) => cell.addEventListener('click', CLICKED_BOX))


/*----- functions -----*/
function CLICKED_BOX(evt) {
    const id = evt.target.id;

    if (!BOARD[id]) {
        BOARD[id] = currentPlayer;
        evt.target.innerText = currentPlayer;
        if (checkResult()) endGame();
        if (!BOARD.some((evt) => evt === null)) endGame('draw');
        //switching players
        if (currentPlayer === PLAYER_X) {
            currentPlayer = PLAYER_O;
        } else {
            currentPlayer = PLAYER_X
        }
    }
    console.log(BOARD)
};


//if result is draw => return 'DRAW' if otherwose -> currentPlayer won
function endGame(result) {
    document.getElementById('game-status').innerText = result == 'draw' ? 'Draw!' : currentPlayer + ' won';
    CELL_ELEMENTS.forEach((cell) => cell.removeEventListener('click', CLICKED_BOX))
    //console.log('End of the Game')
}

function handleReset() {
    currentPlayer = 0;
    board.fill(null);
    CELL_ELEMENTS.forEach((cell) => {
        cell.innerText = '';
    });
    document.getElementById('game-status').innerText = 'Lets play';
    CELL_ELEMENTS.forEach((cell) => cell.addEventListener('click', CLICKED_BOX))
};

//there are 8 winning combinations:
// const WINNING_COMBO = [
//     ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],
//     ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'],
//     ['0', '4', '8'], ['2', '4', '6']    
// ]

function checkResult() {
    if (currentPlayer == BOARD[0] && BOARD[0] == BOARD[1] && BOARD[0] == BOARD[2]) 
        return true;
    
    if (currentPlayer == BOARD[3] && BOARD[3] == BOARD[4] && BOARD[3] == BOARD[5])
        return true;
    
    if (currentPlayer == BOARD[6] && BOARD[6] == BOARD[7] && BOARD[6] == BOARD[8])
        return true;
    
    if (currentPlayer == BOARD[0] && BOARD[0] == BOARD[3] && BOARD[0] == BOARD[6])
        return true;
    
    if (currentPlayer == BOARD[1] && BOARD[1] == BOARD[4] && BOARD[1] == BOARD[7])
        return true;
    
    if (currentPlayer == BOARD[2] && BOARD[2] == BOARD[5] && BOARD[2] == BOARD[8])
        return true;
    
    if (currentPlayer == BOARD[0] && BOARD[0] == BOARD[4] && BOARD[0] == BOARD[8])
        return true;
    
    if (currentPlayer == BOARD[2] && BOARD[2] == BOARD[4] && BOARD[2] == BOARD[6])
        return true;
    return false;
};

CELL_ELEMENTS.forEach((cell) => cell.addEventListener('click', CLICKED_BOX));
RESET_BTN.addEventListener('click', handleReset);