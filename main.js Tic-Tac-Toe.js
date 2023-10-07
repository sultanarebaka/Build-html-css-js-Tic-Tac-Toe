


const winningCombos = [ 
     [0, 1, 2], 
     [3, 4, 5], 
     [6, 7, 8], 
     [0, 3, 6],  
     [1, 4, 7], 
     [2, 5, 8], 
     [0, 4, 8], 
     [2, 4, 6] 
     ];
  
 let board; 
 let turn = 'X'; 
 let win; 
 
  
 
const squares = Array.from(document.querySelectorAll('#board div'));   
    document.getElementById('reset-button').addEventListener('click', init);         



function init() { 
     board = [ 
     '', '', '', 
     '', '', '', 
     '', '', '' 
     ]; 
     render(); 
 };

init();




function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] &&
        });
      
};



function handleTurn() { 
     let idx =squaress;
 squares.findIndex(function(square) {
        return square === event.target;
    });
};

function render() {
    board.forEach(function(mark, index) {
     item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    };

board[idx] = turn;


document.getElementById('reset-button').addEventListener('click', init);

document.getElementById('board').addEventListener('click', handleTurn);

board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
  