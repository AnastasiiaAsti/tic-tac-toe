/*----- constants -----*/
const CELL_ELEMENTS = document.querySelectorAll('.cell')

//players 
const PLAYER_X = 'x'
const PLAYER_O = 'o'

let currentPlayer = PLAYER_X;

const CLICKED_BOX = (evt) => {
    const IDX = evt.target.id;

    evt.target.innerText = currentPlayer;
    if (currentPlayer === PLAYER_X) {
        currentPlayer = PLAYER_O;
    } else {
        currentPlayer = PLAYER_X
    }
};

/*----- app's state (variables) -----*/
let gameStates = ['', '', '', '', '', '', '', '', ''];


/*----- cached element references -----*/



/*----- event listeners -----*/
//add event listener to listen to a clicked cell
CELL_ELEMENTS.forEach((cell) => cell.addEventListener('click', CLICKED_BOX))


/*----- functions -----*/