/*----- constants -----*/
const CELL_ELEMENTS = document.querySelectorAll('.cell')

//players 
const PLAYER_X = 'x'
const PLAYER_O = 'o'

let currentPlayer = PLAYER_X

const CLICKED_BOX = (evt) => {
    console.log(evt.target.id);
};

/*----- app's state (variables) -----*/
let gameStates = ['', '', '', '', '', '', '', '', ''];


/*----- cached element references -----*/



/*----- event listeners -----*/
//add event listener to listen to a clicked cell
CELL_ELEMENTS.forEach((cell) => cell.addEventListener('click', CLICKED_BOX))


/*----- functions -----*/