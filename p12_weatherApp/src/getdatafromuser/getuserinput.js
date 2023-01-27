import { City }  from 'country-state-city';
import { loadingcontrol,errcontrol } from '../uicontrol.js';
import { laglong } from '../datamodel.js';
import { getallcitiesbysearch } from '../service.js';

const searchtext = document.getElementById("searchtext");
const searchbtn = document.getElementById("searchbtn");

function getusersearchfun(){
    searchbtn.addEventListener("click",function(){
        searchcity(searchtext.value.toLowerCase());
        
    });
}

function searchcity(value){
    let arr = [];

    let cityarray = City.getAllCities();
    for(let b = 0; b < cityarray.length; b++){
        // console.log(cityarray[b].name);
        if(cityarray[b].name.toLowerCase() == value){
            let newdata = new laglong;
            newdata.latitude = cityarray[b].latitude;
            newdata.longitude = cityarray[b].longitude;
            arr.push(newdata);
        }

    }
    searchtext.value = "";
    if(arr.length === 0){
        errcontrol(true,"City not found");
    }else{
        loadingcontrol(true);
        getallcitiesbysearch(arr);
    }
}

export default getusersearchfun;

