//iniciar variáveis 

let board = ["","","","","","","","","" ]
let playerTime = 0;

let symbols = ["cell circle","cell x"]

function handleMove(position){

  //pegaremos a posição que queremos fazer o move
  
  board[position]= symbols[playerTime]

  if(playerTime == 0){
     playerTime = 1;
  }else{
    playerTime =0;
  }

}