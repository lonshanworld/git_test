// Start footer section 
let curdate = new Date();
let curyear = curdate.getFullYear();
const year = document.getElementById("year");
year.innerText = curyear;
// End footer section


// const boxes = document.getElementsByClassName("boxes");
// for(let i = 0 ; i < boxes.length; i ++){
//     boxes[i].addEventListener("click",function(){
//         console.log(boxes[i].id);
//         boxes[i].innerHTML = '<i class="fa-regular fa-circle"></i>';
//         boxes[i].innerHTML = '<i class="fa-solid fa-xmark"></i>';
//     });
// }

var board;
const human = "<i class='fa-solid fa-xmark'></i>";
const cpt = "<i class='fa-regular fa-circle'></i>";
let levelmode;
let twohumanturn = true;
let score1 = 0;
let score2 = 0;

const winCombos = [
    [1,4,7],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const boxes = document.querySelectorAll(".boxes");
const endgame = document.getElementById("endgame");
const clearbtn = document.getElementById("clearbtn");
const playagain = document.getElementById("playagain");
const inputform = document.getElementById("inputform");
let twocpt = 1;
let result1inend = document.getElementById("result1inend");
let result2inend = document.getElementById("result2inend"); 
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

startGame();
clearbtn.addEventListener("click",startGame);
playagain.addEventListener("click",startGame);

function startGame(){
    endgame.style.setProperty("display","none");
    board = Array.from(Array(9).keys());

    for(var i = 0; i < boxes.length; i ++){
        boxes[i].innerHTML = "";
        boxes[i].style.removeProperty("background-color");
        boxes[i].addEventListener("click",turnClick);
    }
}

function turnClick(box){
    
    if(twocpt != 2){
        if(typeof board[box.target.id] === "number"){        // check already clicked or not
            if(!checkTie()) turn(box.target.id, human);
            if(!checkTie()) turn(bestSpot(),cpt);  // ai start 
        }
    }else{
        if(typeof board[box.target.id] === "number"){        // check already clicked or not

            if(twohumanturn){
                if(!checkTie()) turn(box.target.id, human);
                twohumanturn = !twohumanturn;
                
            }else{
                if(!checkTie()) turn(box.target.id, cpt);
                twohumanturn = !twohumanturn;
            }
        }
    }
    
}

function turn(boxId, player){
    board[boxId] = player;
    boxes[boxId].innerHTML = player;
    let gameWon = checkWin(board,player);
    if(gameWon) gameOver(gameWon);
}

function checkWin(board, player){
    let plays= board.reduce((a,e,i) =>
    (e === player) ? a.concat(i) : a, []) ;
    let gameWin = null;
    for(let [index, win] of winCombos.entries()){
        if(win.every(ele => plays.indexOf(ele) > -1)){
            gameWin = {index : index,player : player};
            break;
        }
    }
    return gameWin;
}


function gameOver(gameWon){
    for (let index of winCombos[gameWon.index]){        // if win
        document.getElementById(index).style.backgroundColor= gameWon.player == human ? "lightgreen" : "lightcoral";
    }
    for(var i = 0; i < boxes.length; i ++){
        boxes[i].removeEventListener("click",turnClick);
    }
    if(twocpt == 1){
        declareResult(gameWon.player == human ? "Player WIN" : "Player LOSE");
    }else{
        declareResult(gameWon.player == human ? "Player 1 WIN" : "Player 2 WIN");
    }

    if(gameWon.player == human){
        score1++;
        result1inend.innerText = score1;
        result1.innerText = score1;
        result2inend.innerText = score2;
        result2.innerText = score2;
        console.log(score1);
    }else if(gameWon.player == cpt){
        score2++;
        result1inend.innerText = score1;
        result1.innerText = score1;
        result2inend.innerText = score2;
        result2.innerText = score2;
        console.log(score2);
    }
}

function declareResult(result){
    endgame.style.setProperty("display","flex");
    const announcement = document.getElementById("announcement");
    announcement.innerText= result;
}


function emptyBoxes(){
    return board.filter(id => typeof id =="number");
}


function bestSpot(){
    if(levelmode === "easy"){
        return emptyBoxes()[0];     // => for easy mode
    }
    if(levelmode === "hard"){
        return minimax(board, cpt).index;      // => for hard mode
    }
    // return minimax(board, cpt).index; 
    // return emptyBoxes()[0];    
}


function checkTie(){
    if(emptyBoxes().length == 0){
        for(var i = 0; i < boxes.length; i ++){
            boxes[i].style.backgroundColor = "grey";
            boxes[i].removeEventListener("click", turnClick);
        }
        declareResult("Tie Game!");
        return true;
    }
    return false;
}



// Start minimax function 
function minimax(newboard, player){
    var availablebox = emptyBoxes(newboard);

    if(checkWin(newboard, human)){
        return {score : -10};
    }else if (checkWin(newboard, cpt)){
        return {score : 10};
    }else if( availablebox.length === 0){
        return {score : 0};
    }

    var moves = [];
    for(var i = 0; i < availablebox.length; i++){
        var move = {};
        move.index = newboard[availablebox[i]];
        newboard[availablebox[i]] = player;
        if(player == cpt){
            var result = minimax(newboard, human);
            move.score = result.score;
        }else {
            var result = minimax(newboard, cpt);
            move.score = result.score;
        }

        newboard[availablebox[i]] = move.index;

        moves.push(move);
    }

    var bestMove;
    if(player === cpt){
        var bestScore = -10000;
        for(var i = 0; i < moves.length; i++){
            if(moves[i].score > bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }else{
        var bestScore = 10000;
        for(var i = 0; i < moves.length; i++){
            if(moves[i].score < bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

// End minimax function




// // Start inputform section 
const player2div = document.getElementById("player2div");
const cptdiv = document.getElementById("cptdiv");
player2div.style.display = "none";

function radfun(value){
    twocpt = value;
    if(twocpt == 1){
        player2div.style.display = "none";
        cptdiv.style.display = "block"
    }else if(twocpt == 2){
        player2div.style.display = "block";
        cptdiv.style.display = "none"
    }
}


const startbtn = document.getElementById("startbtn");
const cancelbtn = document.getElementById("cancelbtn");
const mode = document.getElementById("mode");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player1name = document.getElementById("player1name");
const player2name = document.getElementById("player2name");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name1inend = document.getElementById("name1inend");
const name2inend = document.getElementById("name2inend");

function inputstart(){
    if(mode.value == " easy"){
        levelmode = "easy";
    }else if(mode.value == "hard"){
        levelmode = "hard";
    }else{
        levelmode = "easy";
    }
    inputform.style.display = "none"

    player1name.innerText = player1.value === "" ? "PLAYER ONE" : player1.value;
    
    if(player2.value === ""){
        if(twocpt == 1){
            player2name.innerText = "COMPUTER";
        }else if(twocpt == 2){
            player2name.innerText = "PLAYER TWO";
        }
    }else{
        player2name.innerText = player2.value;
    }

    name1.innerText = player1name.innerText;
    name2.innerText = player2name.innerText;
    name1inend.innerText = player1name.innerText;
    name2inend.innerText = player2name.innerText;
}
// End inputform section