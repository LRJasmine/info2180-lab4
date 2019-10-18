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
    statuses = document.querySelector("#status");
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
                winner(statuses);
                break;
            case "O":
                this.textContent = "O";
                state.push("O");
                winner(statuses);
                break;
            default:
        
        }
    }
    function hoverColour(mouseover){
        this.classList.add("hover");
    }
    function hoverColour2(mouseleave){
        this.classList.remove("hover");
    }
                 
}

function winner(statuses){
    state.sort();
    var resultO = state.filter(i => i === "O").length;
    var resultX = state.filter(i => i === "X").length;
    
    if (resultO >= 3 && resultO > resultX){
        statuses.classList.add("you-won");
        statuses.textContent = "Congratulations! O is the Winner!";
    }else if (resultX >= 3 && resultX > resultO){
        statuses.classList.add("you-won");
        statuses.textContent = "Congratulations! X is the Winner!";
    }
}
