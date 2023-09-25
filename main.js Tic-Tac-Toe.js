


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

