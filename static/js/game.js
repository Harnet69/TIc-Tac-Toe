// alert('You should write code into "static/js/game.js" to make it work');
const player1 = 'X';
const player2 = 'O';
let pl = true;

function player_turn(){
let my_cells = document.getElementsByClassName('game-cell');
    for(let cell of my_cells){
        cell.addEventListener('click', function () {
            my_click(cell);
        } );
    }
}


function my_click (cell) {
    if (pl) {
        cell.textContent = player1;
        cell.classList.add('selected');
        pl = false;
    } else {
        cell.textContent = player2;
        cell.classList.add('selected');
        pl = true;
    }
}

player_turn();