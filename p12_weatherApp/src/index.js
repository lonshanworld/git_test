import draw from "./background/backgroundcanvas.js";
import getfooteryear from "./footer/footerdate.js";
import getuserlocation from "./getdatafromuser/getuserlocation.js";
import getusersearchfun from "./getdatafromuser/getuserinput.js";

window.onload = function(){
    draw();
    getfooteryear();
};

const erreload = document.getElementById("erreload");
erreload.addEventListener("click",function(){
    location.reload();
});

getuserlocation();
getusersearchfun();


