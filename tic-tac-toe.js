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
        eachboards[i].classList.add("square");
    }
    for (var i = 0; i < eachboards.length; i++){
        eachboards[i].addEventListener("click", playMove);
        eachboards[i].addEventListener("mouseover", hoverColour);
        eachboards[i].addEventListener("mouseleave", hoverColour2);
    }
    function playMove(click){
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

    function hoverColour(mouseover){
        this.classList.add("hover");
    }
    function hoverColour2(mouseleave){
        this.classList.remove("hover");
    }
        
            
}
