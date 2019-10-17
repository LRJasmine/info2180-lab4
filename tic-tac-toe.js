var gamebox;
var boards;
var statuses;
var eachboards;

window.onload = function() {
    boards = document.querySelector("#board");
    eachboards = boards.querySelectorAll("div");
    for (var i = 0; i < eachboards.length; i++) {
        eachboards[i].classList.add('square');
    }
    
    statuses = document.querySelector("#status");
    statuses.addEventListener("click", function(){
        
    });
}