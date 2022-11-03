let getinput = document.getElementById("textinput");

let getbtn = document.getElementById("submit");

let computervalue;

let computer = document.getElementById("computer");

let playerresult = document.getElementById("playerresult");
let computerresult = document.getElementById("computerresult");

let pn = 0;
let cn = 0;

let playground = document.getElementById("playground");

let restartbtn = document.getElementById("restartbtn");
let restarttext = document.getElementById("restarttext");

let resulttextbox = document.getElementById("result");


function generatecpt(){
    let randomnum = Math.floor(Math.random() * 3);

    if(randomnum == 0){
        computervalue = "Rock";
        computer.innerText = computervalue;

    }else if(randomnum == 1){
        computervalue ="Paper";
        computer .innerText= computervalue;

    }else if(randomnum == 2){
        computervalue ="Scissors";
        computer.innerText = computervalue;

    }else{
        computervalue = "Submit Again";
        computer.innerText = computervalue;

    }
}


getbtn.addEventListener("click",function(){
    
    resulttextbox.style.display = "inline-block";

    let getinputvalue = getinput.value;
    getinputfinal = getinputvalue.trim().toLowerCase();

    generatecpt();

    let computervaluelower = computervalue.toLowerCase();

    if(getinputfinal === computervaluelower){
        resulttextbox.innerText = "Draw";
        resulttextbox.style.color = "black";
        resulttextbox.style.borderColor = "black";
        getinput.style.borderColor = "black";
        computer.style.borderColor = "black";

    }else if(getinputfinal ==="rock" && computervaluelower ==="paper"){
        resulttextbox.innerText ="You Lose!! .. Rock loses Paper.";
        resulttextbox.style.color = "red";
        resulttextbox.style.borderColor = "red";
        getinput.style.borderColor = "red";
        computer.style.borderColor = "rgb(71, 252, 0)";
        cn++;
        computerresult.innerText = cn;

    }else if(getinputfinal ==="rock" && computervaluelower ==="scissors"){
        resulttextbox.innerText = "You Win!! .. Rock wins Scissors.";
        resulttextbox.style.color = "rgb(71, 252, 0)";
        resulttextbox.style.borderColor = "rgb(71, 252, 0)";
        getinput.style.borderColor = "rgb(71, 252, 0)";
        computer.style.borderColor = "red";
        pn++;
        playerresult.innerText = pn;

    }else if(getinputfinal ==="paper" && computervaluelower ==="rock"){
        resulttextbox.innerText = "You Win!! .. Paper wins Rock.";
        resulttextbox.style.color = "rgb(71, 252, 0)";
        resulttextbox.style.borderColor = "rgb(71, 252, 0)";
        getinput.style.borderColor = "rgb(71, 252, 0)";
        computer.style.borderColor = "red";
        pn++;
        playerresult.innerText = pn;

    }else if(getinputfinal ==="paper" && computervaluelower ==="scissors"){
        resulttextbox.innerText = "You Lose!! .. Paper loses Scissors.";
        resulttextbox.style.color = "red";
        resulttextbox.style.borderColor = "red";
        getinput.style.borderColor = "red";
        computer.style.borderColor = "rgb(71, 252, 0)";
        cn++;
        computerresult.innerText = cn;

    }else if(getinputfinal ==="scissors" && computervaluelower ==="rock"){
        resulttextbox.innerText = "You Lose!! .. Scissors loses Rock.";
        resulttextbox.style.color = "red";
        resulttextbox.style.borderColor = "red";
        getinput.style.borderColor = "red";
        computer.style.borderColor = "rgb(71, 252, 0)";
        cn++;
        computerresult.innerText = cn;

    }else if(getinputfinal ==="scissors" && computervaluelower ==="paper"){
        resulttextbox.innerText = "You Win!! .. Scissors wins Paper.";
        resulttextbox.style.color = "rgb(71, 252, 0)";
        resulttextbox.style.borderColor = "rgb(71, 252, 0)";
        getinput.style.borderColor = "rgb(71, 252, 0)";
        computer.style.borderColor = "red";
        pn++;
        playerresult.innerText = pn;

    }else{
        alert("Please enter only One of them( Rock or Paper or Scissors.");

        resulttextbox.innerText = "Error";
        resulttextbox.style.color = "white";
        resulttextbox.style.borderColor = "white";
        getinput.style.borderColor = "white";
        computer.style.borderColor = "white";

        computer.innerText = "Good Luck";
        getinput.value = "";
    }

    getinput.value = "";


    if(cn == 5){
        playground.style.display = "none";
        restartbtn.style.display = "block"
        restarttext.innerText = "You Lose";
        restarttext.style.color = "red";
        restarttext.style.borderColor = "red";
    }else if(pn ==5){
        playground.style.display = "none";
        restartbtn.style.display = "block"
        restarttext.innerText = "You Win";
        restarttext.style.color = "rgb(71, 252, 0)";
        restarttext.style.borderColor = "rgb(71, 252, 0)";
    }

});



let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    pn = 0;
    cn = 0;
    computerresult.innerText = cn;
    playerresult.innerText = pn;


    playground.style.display = "block";
    restartbtn.style.display = "none"
    resulttextbox.style.display = "none";
    getinput.style.borderColor = "black";
    computer.style.borderColor = "black";

    computer.innerText = "Good Luck";
    getinput.value = "";
});





// Start footerdate
const footerdate = document.getElementById("footeryear");
let date = new Date();
let currentyear = date.getFullYear();
footerdate.innerText = currentyear;
