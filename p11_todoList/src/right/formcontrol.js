import task from "../datamodel.js";

const title = document.getElementById("title");
const description = document.getElementById("description");
const datetime = document.getElementById("datetime");
const typevalue = document.getElementsByName("tasktype");
let curmillitime = Date.now();
function submitform(){
    
    const changedate = new Date(datetime.value);
    const milliseconds = changedate.getTime(); 
    

    if(title.value === "" || description.value === "" || datetime.value === ""){
        window.alert("Please fill all the requirements");
    }else if(Math.floor(milliseconds/10000) <= Math.floor(curmillitime/10000)){
        window.alert("Plase don't fill current time for list.");
    }else{
        let typevalueid;
        for(var i = 0; i < typevalue.length; i++){
            if(typevalue[i].checked){
                typevalueid = typevalue[i].id;
            }
        }

        let newtask = new task();
        newtask.title = title.value;
        newtask.description = description.value;
        newtask.date = datetime.value;
        newtask.tasktype = typevalueid;
        newtask.completed = "notcomplete";
        setitemtolocaldb(newtask);
    }

}

function setitemtolocaldb(taskitem){
    let itemstring = JSON.stringify(taskitem);
    let curtime = Date.now();
    localStorage.setItem(curtime,itemstring); 
    // title.value = "";
    // description.value = "";
    // datetime.value="";
}

export default submitform;