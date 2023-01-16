import { arrlist } from "../middle/loaddatafromdb";
import {displayTask, nodataDisplay} from "../middle/displayList";

let middletaskdiv = document.getElementById("middle");

const left = document.getElementById("leftcomponents");
const btns = left.getElementsByTagName("button");

function filtersbtn(){
    left.addEventListener("click",function(e){
        let getid = e.target.id;
        for(let a = 0; a < btns.length; a++){
            const text = btns[a].innerHTML;
            if(btns[a].id == getid){
                
                if(text.includes('<i class="fa-solid fa-circle-check"></i>')){
                    const newtext = text.replace('<i class="fa-solid fa-circle-check"></i>',"")
                    btns[a].innerHTML = newtext;
                    location.reload();
                }else{
                    btns[a].innerHTML += '<i class="fa-solid fa-circle-check"></i>';
                    middletaskdiv.innerHTML = ""
                    filterfun(btns[a]);
                }
            }else{
                const newtext = text.replace('<i class="fa-solid fa-circle-check"></i>',"")
                btns[a].innerHTML = newtext;
            }
        }
    });
}

// function addcheckUI(btn){
//     btn.addEventListener("click",function(){
//         const text = btn.innerHTML;
//         if(text.includes('<i class="fa-solid fa-circle-check"></i>')){
//             const newtext = text.replace('<i class="fa-solid fa-circle-check"></i>',"")
//             btn.innerHTML = newtext;
//             location.reload();
//         }else{
//             btn.innerHTML += '<i class="fa-solid fa-circle-check"></i>';
//             middletaskdiv.innerHTML = ""
//             filterfun(btn);
//         }
//     });
// }

function filterfun(btn){

    const curdate = new Date();
    let day = curdate.getDate();
    let month = curdate.getMonth() + 1;
    let stringmonth = month <= 9 ? `0${month}` : `${month}`;
    let year = curdate.getFullYear();
    let currentFulldate = `${year}-${stringmonth}-${day}`;

    let newarray = [];
    if(btn.id === "todaylist" ){
        for(let k = 0; k < arrlist.length; k++){
            if(arrlist[k].day === currentFulldate){
                newarray.push(arrlist[k]);
            }
        }
    }else if(btn.id === "all"){
        newarray = arrlist;
    }else if(btn.id === "pri"){
        for(let k = 0; k < arrlist.length; k++){
            if(arrlist[k].tasktype === "primary task"){
                newarray.push(arrlist[k]);
            }
        }
    }else if(btn.id === "sec"){
        for(let k = 0; k < arrlist.length; k++){
            if(arrlist[k].tasktype === "secondary task"){
                newarray.push(arrlist[k]);
            }
        }
    }else if(btn.id === "nor"){
        for(let k = 0; k < arrlist.length; k++){
            if(arrlist[k].tasktype === "normal task"){
                newarray.push(arrlist[k]);
            }
        }
    }else if(btn.id === "mini"){
        for(let k = 0; k < arrlist.length; k++){
            if(arrlist[k].tasktype === "mini task"){
                newarray.push(arrlist[k]);
            }
        }
    }else if(btn.id === "cpt"){
        for(let k = 0; k < arrlist.length; k++){
            if(arrlist[k].completed === "yescomplete"){
                newarray.push(arrlist[k]);
            }
        }
    }else if(btn.id === "unf"){
        for(let k = 0; k < arrlist.length; k++){
            if(arrlist[k].completed === "notcomplete"){
                newarray.push(arrlist[k]);
            }
        }
    }


    newarraylist(newarray); 
}


function newarraylist(newarr){
    if(newarr.length === 0){
        nodataDisplay();
    }else{
        for(let m = 0; m < newarr.length; m++){
            displayTask(m,newarr[m].keyvalue,newarr[m].title,newarr[m].description, newarr[m].day, newarr[m].time, newarr[m].tasktype, newarr[m].completed)
        }
    }
}

export default filtersbtn;