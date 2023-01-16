import {leftdisplaychange,rightdisplaychange} from "./uicontrol";
import submitform from "./right/formcontrol";
import middleData from "./middle/loaddatafromdb";
import filtersbtn from "./left/filters"; 
import alarmtime from "./alert.js";
import "./style.css";

window.onload = middleData;

const leftbtn = document.getElementById("btnmenu");
leftbtn.addEventListener("click",function(){
    leftdisplaychange();
});

const rightbtn = document.getElementById("btnadd");
rightbtn.addEventListener("click", function(){
    rightdisplaychange();
});

const addnowbtn = document.getElementById("addnowbtn");
addnowbtn.addEventListener("click",function(){
    submitform();
});

filtersbtn();

setInterval(alarmtime,60000);