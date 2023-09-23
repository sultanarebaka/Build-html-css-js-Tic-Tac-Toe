



   var originalBoard;
   
   const humanplayer ='0';  
   const aiplayer ='X';
   
   
const cells =document.querySelectorAll('.cell');

const winCombos = [

[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[6, 4, 2]

]

   
   startGame();

   
function startGame(){
       document.querySelector(".endgame").style.display ="none";
   }   
cells[i].innerText ='';



function turnClick(square){
       turn(square.target.id, humanplayer);
       
   }


function turn(squareId, player) { 
         origBoard[squareId] = player; 
         document.getElementById(squareId).innerText = player; 
 }

    for (var i = 0; i < cells.length; i++) 
            cells[i].addEventListener('click', turnClick, false);

 gameWon.player == huPlayer ? "blue" : "red"; 
    
         for (var i = 0; i < cells.length; i++) { 
                 cells[i].removeEventListener('click', turnClick, false);
}
 document.getElementById(squareId).innerText = player; 
         let gameWon = checkWin(origBoard, player) 
         if (gameWon) gameOver(gameWon) 
 }


        for (var i = 0; i < cells.length; i++) { 
                 cells[i].innerText = ''; 
                 cells[i].style.removeProperty('background-color'); 
                 cells[i].addEventListener('click', turnClick, false); 
         } 
 }

function bestSpot() { 
         return emptySquares()[0]; 
 }

function emptySquares() { 
         return origBoard.filter(s => typeof s == 'number'); 
 }





function checkWin(board, player) { 
         let plays = board.reduce((a, e, i) =>  
                 (e === player) ? a.concat(i) : a, []);





function minimax(newBoard, player) { 
         var availSpots = emptySquares();
}


                if (player == aiPlayer) { 
                         var result = minimax(newBoard, huPlayer); 
                         move.score = result.score; 
                 } else { 
                         var result = minimax(newBoard, aiPlayer); 
                         move.score = result.score; 
                 }

}


                        var result = minimax(newBoard, huPlayer);

        var moves = []; 
         for (var i = 0; i < availSpots.length; i++) { 
                 var move = {};
    document.getElementById(squareId).innerText = player;