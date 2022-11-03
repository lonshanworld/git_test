let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let colorBW = false;
let colorRainbow = false;
let erase = false;


// Start theme change Section 
var isDark = false;
let dlbtn = document.querySelector(".dlbtn");
const colorBandW = document.getElementById("colorBandW");

function themeChange(){
    if(isDark){
        document.documentElement.style.setProperty("--varbackground", "white");
        document.documentElement.style.setProperty("--vartext", "black");
        document.documentElement.style.setProperty("--varmoonandsun", "rgb(0, 140, 255)");
        document.documentElement.style.setProperty("--varbtnbg", "rgb(182, 220, 238)");

        dlbtn.innerHTML = "<i id='iconms' class='fa-solid fa-moon'></i>";
        dlbtn.style.boxShadow = "rgba(0, 60, 255, 0.25) 0px 54px 55px, rgba(0, 60, 255, 0.12) 0px -12px 30px, rgba(0, 60, 255, 0.12) 0px 4px 6px, rgba(0, 60, 255, 0.17) 0px 12px 13px, rgba(0, 60, 255, 0.09) 0px -3px 5px";

        colorBandW.textContent = "Color Black"

        isDark = !isDark;
    }else{
        document.documentElement.style.setProperty("--varbackground", "black");
        document.documentElement.style.setProperty("--vartext", "white");
        document.documentElement.style.setProperty("--varmoonandsun", "orange");
        document.documentElement.style.setProperty("--varbtnbg", "rgb(238, 234, 182)");

        dlbtn.style.boxShadow = "rgba(255, 255, 0, 0.25) 0px 54px 55px, rgba(255, 255, 0, 0.12) 0px -12px 30px, rgba(255, 255, 0, 0.12) 0px 4px 6px, rgba(255, 255, 0, 0.17) 0px 12px 13px, rgba(255, 255, 0, 0.09) 0px -3px 5px";
        dlbtn.innerHTML = "<i id='iconms' class='fa-solid fa-sun'></i>";

        colorBandW.textContent = "Color White"

        isDark =! isDark;
    }
}
// End theme change section



// Start sketch section 
let box = document.getElementById("sketchContainer");
function multiplybox(index){
    let num = index * index;
    box.innerHTML = "";
    for(let i = 0; i < num; i++){
        box.innerHTML += "<div class='sketchbox'></div>";
        box.style.border = "";
        box.style.borderRight = "1px solid var(--vartext)";
        box.style.borderBottom = "1px solid var(--vartext)";

        let sketchboxes = document.querySelectorAll(".sketchbox");
        console.log(sketchboxes);
        sketchboxes.forEach(sketchbox => sketchbox.addEventListener("mouseover", changeColor) );
        sketchboxes.forEach(sketchbox => sketchbox.addEventListener("mousedown", changeColor) );
    }
    document.documentElement.style.setProperty("--varTotalbox", `${index}`);
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;

    if(isDark && colorBW){
        e.target.style.backgroundColor = "white";
    }else if(!isDark && colorBW){
        e.target.style.backgroundColor = "black";
    }else if(colorRainbow){
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        
        e.target.style.backgroundColor = `rgb(${x},${y},${z})`;
    }else if(isDark && erase){
        e.target.style.backgroundColor = "black";
    }else if(!isDark && erase){
        e.target.style.backgroundColor = "white";
    }
}    

// End sketch Section



// Start userInput section 
const boxRangeValue = document.querySelector(".boxRangeValue");
const signBW = document.getElementById("signBW");
const signRB = document.getElementById("signRB");
const signeraser = document.getElementById("signeraser");

function boxRange(value){
    boxRangeValue.textContent = `${value} x ${value}`;
    multiplybox(parseInt(value));
}



function changeColorBW(){
    colorBW = !colorBW;
    colorRainbow = false;
   
    if(colorBW){
        signBW.style.display = "inline";
        signRB.style.display = "none";
        signeraser.style.display = "none";
    }else{
        signBW.style.display = "none";
    }
}

function changeColorRainbow(){
    colorRainbow = !colorRainbow;
    colorBW = false;

    if(colorRainbow){
        signRB.style.display = "inline";
        signBW.style.display = "none";
        signeraser.style.display = "none";
    }else{
        signRB.style.display = "none";
    }
}
// End userInput section



// Start eraser function
function eraser(){
    erase = !erase;
    colorBW = false;
    colorRainbow = false;

    if(erase){
        signeraser.style.display = "inline";
        signRB.style.display = "none";
        signBW.style.display = "none";
    }else{
        signeraser.style.display = "none";
    }
}