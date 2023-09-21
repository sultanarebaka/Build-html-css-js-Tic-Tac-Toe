



   var originalBoard;
   
   const humanplayer ='0';  
   const aiplayer ='X';
   
   
const cells =document.querySelectorAll('.cell');
   
   startGame();

   
function startGame(){
       document.querySelector(".endgame").style.display ="none";
   }   
cells[i].innerText ='';



function turnClick(square){
       turn(square.target.id, humanplayer);
       
   }


        for (var i = 0; i < cells.length; i++) 
            cells[i].addEventListener('click', turnClick, false);

 gameWon.player == huPlayer ? "blue" : "red"; 
    
         for (var i = 0; i < cells.length; i++) { 
                 cells[i].removeEventListener('click', turnClick, false);
}


function turn(squareId, player) { 
         origBoard[squareId] = player; 
         document.getElementById(squareId).innerText = player; 
         let gameWon = checkWin(origBoard, player) 
         if (gameWon) gameOver(gameWon) 
 }