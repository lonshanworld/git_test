import {arrlist} from "./middle/loaddatafromdb";

function alarmtime(){
    let currentdate = new Date();
    let day = currentdate.getDate();
    let month = currentdate.getMonth() + 1;
    let stringmonth = month <= 9 ? `0${month}` : `${month}`;
    let year =currentdate.getFullYear();
    let hour = currentdate.getHours();
    let minute = currentdate.getMinutes();

    let stringDate = `${year}-${stringmonth}-${day}`;
    let stringTime = `${hour}:${minute}`;

    for(let a = 0; a < arrlist.length; a++){
        if(arrlist[a].day === stringDate && arrlist[a].time === stringTime){
            window.alert(`Task -- ${arrlist[a].title}`);
        }
    }
};

export default alarmtime;