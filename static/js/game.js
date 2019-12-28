// alert('You should write code into "static/js/game.js" to make it work');
const player1 = 'O';
const player2 = 'X';
let pl = 2;

function player_turn(){
let my_cells = document.getElementsByClassName('game-cell');
    for(let cell of my_cells){
        cell.addEventListener('click', function () {
            if (isCellOccupied(cell)) {
                let player = myClick(cell);
                let cell_coord = getCellCoord(cell);
                console.log(player, cell_coord);
            }
            else{
                alert('This cell is occupied. Try another!')
            }
        } );
    }
}


function myClick (cell) {
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

function getCellCoord(cell){
    let dataCoordinateX = cell.getAttribute('data-coordinate-x');
    let dataCoordinateY = cell.getAttribute('data-coordinate-y');
    return [+dataCoordinateX, +dataCoordinateY];
}

// check is the cell occupied
function isCellOccupied(cell){
    if(cell.classList.contains('selected')){
        return false;
    }
    return true;
}

player_turn();