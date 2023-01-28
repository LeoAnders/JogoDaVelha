//DOMContentLoaded e executado quando o documento for carregado
document.addEventListener("DOMContentLoaded",()=>{

  let cell= document.querySelectorAll(".cell")

    cell.forEach((cell)=>{
      cell.addEventListener("click",handleClick)
  })

})

function handleClick(event){
  console.log(event.target);

  let cell = event.target;
  let position = cell.id;


  handleMove(position);
  updateCell()

}


function updateCell(){

  let cell= document.querySelectorAll(".cell")

  cell.forEach((cell)=>{
    let position = cell.id;
    let symbol = board[position]

   if(symbol != ""){
    cell.innerHTML = `<div class = "${symbol}"></div>`
   }
  })

}