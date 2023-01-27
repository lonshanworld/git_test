const introsec = document.getElementById("introsec");
const loadingsec = document.getElementById("loadingsec");
const weather = document.getElementById("weather");
const errsec = document.getElementById("errsec");
const errormessage = document.getElementById("errormessage")

function introcontrol(value){
    if(value){
        introsec.style.display = "block";
        loadingsec.style.display = "none";
        weather.style.display = "none";
        errsec.style.display = "none";
    }else{
        introsec.style.display = "none";
    }
}

function loadingcontrol(value){
    if(value){
        introsec.style.display = "none";
        loadingsec.style.display = "flex";
        weather.style.display = "none";
        errsec.style.display = "none";
    }else{
        loadingsec.style.display = "none";
    }
}

function weatherscreencontrol(value){
    if(value){
        introsec.style.display = "none";
        loadingsec.style.display = "none";
        weather.style.display = "block";
        errsec.style.display = "none";
    }else{
        weather.style.display = "none";
    }
}

function errcontrol(value, errorstring){
    if(value){
        introsec.style.display = "none";
        loadingsec.style.display = "none";
        weather.style.display = "none";
        errsec.style.display = "block";

        errormessage.innerText = errorstring
    }else{
        errsec.style.display = "none";
    }
}

export {introcontrol, loadingcontrol,weatherscreencontrol,errcontrol};