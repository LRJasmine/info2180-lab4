var gamebox;
var boards;
var statuses;
var eachboards;
var startTurn;
var attempt;
var state = new Array();

window.onload = function() {
    boards = document.querySelector("#board");
    eachboards = boards.querySelectorAll("div");
    for (var i = 0; i < eachboards.length; i++) {
        eachboards[i].classList.add('square');
    }
    for (var i = 0; i < eachboards.length; i++){
        eachboards[i].addEventListener("click", playMove);          
    }
    function playMove(click){
        var attempt = document.getElementsByClassName("square")
        startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();
        switch (startTurn) {
            case "X":
                this.textContent= "X";
                state.push("X");
                break;
            case "O":
                this.textContent = "O";
                state.push("O");
                break;
            default:
                break;
        }
    }   
}
