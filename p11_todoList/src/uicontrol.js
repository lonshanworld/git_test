const left = document.getElementById("left");
const right = document.getElementById("right");

function windowchange(){
    if(window.innerWidth > 930){
        right.style.display = "block"
        left.style.display = "block"
    }else if(window.innerWidth > 450){
        left.style.display = "block";
        right.style.display = "none"
    }else{
        left.style.display = "none";
        right.style.display = "none";
    }
}



function leftdisplaychange(){
    if(left.style.display == "block"){
        left.style.display = "none";
    }else{
        left.style.display = "block";
    }
}

function rightdisplaychange(){
    if(right.style.display == "block"){
        right.style.display = "none";
    }else{
        right.style.display = "block";
    }
}

export {leftdisplaychange, rightdisplaychange};
window.addEventListener("resize",windowchange);