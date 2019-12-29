// alert('You should write code into "static/js/game.js" to make it work');
var gameStageArch = [];
const player1 = 'O';
const player2 = 'X';
let pl = 2;

// get board size
function getBoardSize(){
    let board = document.getElementById('game-board');
    let rowsNum = board.getAttribute('data-row-num');
    let colsNum = board.getAttribute('data-col-num');

    return [+rowsNum, +colsNum]
}

// build game stage archive according to border size
function createGameStageArch(){
    let borderSize = getBoardSize();
    let rows = borderSize[0];
    let cols = borderSize[1];
    for(let row=0;row<rows;row++){
        gameStageArch[row] = [];
        for(let col=0;col<cols;col++){
            gameStageArch[row][col] = 0;
        }
    }
}

// main game loop
function gameLoop(){
createGameStageArch();
let my_cells = document.getElementsByClassName('game-cell');
    for(let cell of my_cells){
        cell.addEventListener('click', function () {
            if (!isCellOccupied(cell)) {
                let player = iterPlayers(cell);
                let cell_coord = getCellCoord(cell);
                addTurnToArch(player, cell_coord);
            }
            else{
                alert('This cell is occupied. Try another!');
            }
        if (win_condition()[0]){
           alert(win_condition()[1]);
        }
        } );
        cell.addEventListener('mouseover', function () {
            if (isCellOccupied(cell)) {
                cell.style.cursor = 'not-allowed';
            }
        } );
    }
}

// iterate players
function iterPlayers(cell){
    if (pl === 1) {
        cell.textContent = player1;
        cell.classList.add('selected');
        pl = 2;
    }
    else{
        cell.textContent = player2;
        cell.classList.add('selected');
        pl = 1;
    }
    return pl;
}

// get the clicked cell coordinates
function getCellCoord(cell){
    let dataCoordinateX = cell.getAttribute('data-coordinate-x');
    let dataCoordinateY = cell.getAttribute('data-coordinate-y');
    return [+dataCoordinateX, +dataCoordinateY];
}

// check is the cell occupied
function isCellOccupied(cell){
    return cell.classList.contains('selected');
}

// add player's turn to a  game stage array
function addTurnToArch(player, cell_coord){
    let cellCol = cell_coord[0];
    let cellRow  = cell_coord[1];
    gameStageArch[cellRow][cellCol] = player;
    console.clear();
    console.table(gameStageArch);
}

// win condition
function win_condition() {
    return [draw(), "It's a draw"];
}

// dead heat(draw)
function draw() {
    let occupiedCells = 0;
    let gameStageArchLength = gameStageArch.length * gameStageArch[0].length;
    let my_cells = document.getElementsByClassName('game-cell');
    for(let cell of my_cells){
        if(isCellOccupied(cell)){
            occupiedCells++;
        }
    }
    if(gameStageArchLength === occupiedCells){
        return true;
    }
}

gameLoop();
console.table(gameStageArch);