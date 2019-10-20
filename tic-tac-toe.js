//Author LRJasmine

var gamebox;
var boards;
var statuses;
var eachboards;
var startTurn;
var attempt;
var gameBtn;
var oldstatus;
var state = new Array();

//Executes as soon as the page starts loading
window.onload = function() {
    boards = document.querySelector("#board");
    eachboards = boards.querySelectorAll("div");
    statuses = document.querySelector("#status");
    oldstatus = statuses.innerHTML;
    for (var i = 0; i < eachboards.length; i++) {
        eachboards[i].classList.add("square");
    }
    for (var i = 0; i < eachboards.length; i++){
        eachboards[i].addEventListener("click", playMove);
        eachboards[i].addEventListener("mouseover", hoverColour);
        eachboards[i].addEventListener("mouseleave", hoverColour2);
    }
    //Prompts user to play X or O, add it to the grid and state array
    function playMove(click){
        startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();
        if (this.textContent === ""){
            switch (startTurn) {
                case "X":
                    this.textContent = "X";
                    state.push("X");
                    winner(statuses);
                    break;
                case "O":
                    this.textContent = "O";
                    state.push("O");
                    winner(statuses);
                    break;
                default:
                    alert("Please play either X or O only.")
                    break;
            }
        } else {
            alert("A play was already made here. Please try somewhere else.");
        }
        
    }
    gameBtn = document.getElementsByClassName("btn")[0];
    gameBtn.addEventListener("click",restartGame);
    //Restarts the game
    function restartGame(click){
        for (var i = 0; i < eachboards.length; i++){
            eachboards[i].textContent = "";
        }
        statuses.classList.remove("you-won");
        statuses.textContent = oldstatus;
        state.length = 0;
    }
    //Changes colour of grid squares when mouse hovers
    function hoverColour(mouseover){
        this.classList.add("hover");
    }
    //Restores the colour of the grid squares when the mouse leaves
    function hoverColour2(mouseleave){
        this.classList.remove("hover");
    }
                 
}
//Declares the winner
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

