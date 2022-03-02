document.addEventListener('DOMContentLoaded',() => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click",handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){

        setTimeout(()=>{
            lastStream();
        },10)
        
    };
    updateSquares();

}

function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol!= ""){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

function lastStream(){
    let scream = document.getElementById("lastScream")
    let word = document.getElementsByClassName("winner")[0]


    scream.innerHTML = `<div class = 'lastScream'></div>`
    if(playerTime == 0){
        if(counter < 8){
            word.innerHTML = `<h1 class='word'>Player 1 é o ganhador!</h1><br><button onclick="window.location.href=window.location.href">Recomeçar Game</button>`
        }
        else{
            word.innerHTML = `<h1 class='word'>Não houve ganhador!</h1><br><button onclick="window.location.href=window.location.href">Recomeçar Game</button>`
        }    
    }
    else if(playerTime == 1){
            word.innerHTML = `<h1 class='word'>Player 2 é o ganhador!</h1><br><button onclick="window.location.href=window.location.href">Recomeçar Game</button>`
   
    }

    
}