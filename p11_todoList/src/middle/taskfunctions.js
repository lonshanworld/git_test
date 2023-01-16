import task from "../datamodel";

function deletedata(keyid){
    localStorage.removeItem(keyid);
    location.reload();
}

function markComplete(keyid){
    const data = JSON.parse(localStorage.getItem(keyid));
    // console.log(data);

    const completetask = new task();
    completetask.title = data["title"];
    completetask.description = data["description"];
    completetask.date = data["date"];
    completetask.tasktype = data["tasktype"];
    completetask.completed = "yescomplete";

    const stringdata = JSON.stringify(completetask);
    // console.log(stringdata);
    localStorage.setItem(keyid, stringdata);
    location.reload();
}

export {deletedata, markComplete};