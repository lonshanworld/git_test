import { deletedata,markComplete } from "./taskfunctions";

let middletaskdiv = document.getElementById("middle");

function displayTask(id ,keyid,title, description,date,time,type,completed){
    middletaskdiv.innerHTML += `
            <div class="task">
                <div class="middletitlediv">
                    <span class="idnum">${id + 1}.  </span>
                    <span class="titletext">  ${title}</span>
                </div>
                <div class="descriptiondiv">
                    <span class="descriptiontitle">Description</span>
                    <br/>
                    <span class="descriptiontext">
                        ${description}
                    </span>
                </div>
                <div class="date">
                    <span class="datetitle">Alert at : </span>
                    <span class="datetext">${date} / ${time}</span>
                </div>
                <div>
                    <span class="tasktypetitle">Task Type - </span>
                    <span class="tasktypetext"> ${type}</span>
                </div>
                <div class="middlebtndiv">
                    <button id="complete|${keyid}" class="completebtn ${completed}">Mark complete</button>
                    <button id="delete|${keyid}" class="deletebtn">Delete task</button>
                </div>
            </div>
        `
    ;
    
        
    const deletebtns = document.getElementsByClassName("deletebtn");
    for(let f = 0; f < deletebtns.length; f++){
        deletebtns[f].addEventListener("click",function(){
            const idvalue = deletebtns[f].id;
            const idvaluearray = idvalue.split("|");
            const keyid = idvaluearray[1];
            deletedata(keyid);
        });
    }

    const completebtns = document.getElementsByClassName("completebtn");
    for(let g = 0; g < completebtns.length; g++){
        completebtns[g].addEventListener("click", function(){
            const idvalue = completebtns[g].id;
            const idvaluearray = idvalue.split("|");
            const keyid = idvaluearray[1];
            markComplete(keyid);
        });
    }
}

function nodataDisplay(){
    middletaskdiv.innerHTML = `
        <div id="nodatabox">
            <span>There is no Data to display.</span>
        </div>
    `;
}

export {displayTask, nodataDisplay};