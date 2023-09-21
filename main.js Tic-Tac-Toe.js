



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