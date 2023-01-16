import {displayTask, nodataDisplay} from "./displayList";
import dbtask from "../dbdatamodel";

let middletaskdiv = document.getElementById("middle");
let arrlist = [];

function middleData(){
    middletaskdiv.innerHTML = "";
    const keys = Object.keys(localStorage);
    if(keys.length === 0){
        nodataDisplay();
    }else{
        keys.sort((a,b) => {
            if(a > b){
                return -1;
            }else if(a < b){
                return 1;
            }else{
                return 0;
            }
        });
    
        for(let i=0; i< keys.length; i++){
            const values = JSON.parse(localStorage.getItem(keys[i]));
            
            const arrvalue = new dbtask();
            arrvalue.keyvalue = keys[i];
            arrvalue.title = values["title"];
            arrvalue.description = values["description"];

            let datetime = values["date"];
            const datearray = datetime.split("T");
            arrvalue.day = datearray[0];
            arrvalue.time = datearray[1];

            arrvalue.tasktype = values["tasktype"];
            arrvalue.completed = values["completed"];
            
            arrlist.push(arrvalue);
                    
        }

        arraylist(arrlist);
    }

}

function arraylist(arr){
    for(let h = 0; h < arr.length; h++){
        displayTask(h,arr[h].keyvalue,arr[h].title,arr[h].description,arr[h].day,arr[h].time,arr[h].tasktype,arr[h].completed);
    }
}



export default middleData;
export {arrlist};