class dbtask{
    constructor (keyvalue,title, description, day,time, tasktype,completed){
        this.keyvalue = keyvalue;
        this.title = title;
        this.description = description;
        this.day = day;
        this.time = time;
        this.tasktype = tasktype;
        this.completed = completed;
    }
}

export default dbtask;