import {errcontrol, weatherscreencontrol} from "./uicontrol.js"
import { Country, City }  from 'country-state-city';
import weatherdatamodel from "./datamodel.js";
import { laglong } from "./datamodel.js";
import weatherforcurr from "./weatherui/currentweatherui";
import weatherforall from "./weatherui/allweatherui.js";


const minidiv = document.getElementById("minidiv");
const curdiv = document.getElementById("curdiv");

async function getlatlang(lat,long){
    let data = await getlatlangweather(lat,long);
    formatcurdata(data);

}


async function getlatlangweather(latitude, longitute){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitute}&appid=be43bc3c7136e46a94eba91ef7bb120f&units=metric`;
    // console.log(url);
    try{
        let weatherinfo = await fetch(url,{method : "GET",mode :"cors", cache: "default"});
        if(weatherinfo.status == 200){
            let data = await weatherinfo.json();
            // console.log(data);
            // formatdata(data);
            return data;
        }else{
            errcontrol(true,weatherinfo.status);
        }
        
    }catch(error){
        errcontrol(true, error);
    }
}


function formatcurdata(data){
    // console.log(getlatlangweather);
    let weatherdata = new weatherdatamodel;
    weatherdata.city = data.name;

    // weatherdata.country = data.sys.country;
    const cty = Country.getCountryByCode(data.sys.country);
    weatherdata.country = cty.name;
    // console.log(weatherdata.country)

    weatherdata.image = data.weather[0].icon;
    weatherdata.title = data.weather[0].main;
    weatherdata.description = data.weather[0].description;
    weatherdata.temp = data.main.temp;
    weatherdata.humitidy = data.main.humidity;
    weatherdata.pressure = data.main.pressure;
    weatherdata.ws = data.wind.speed;
    weatherdata.wd = data.wind.deg;

    // console.log(weatherdata);
    weatherforcurr(weatherdata);
    getallcities(data.sys.country);
}


async function getallcities(value){
    // let arrayurls = [];
    let arrlaglong =[];

    minidiv.innerHTML ="";
    let cityarray = City.getCitiesOfCountry(value);
 
    for(let a = 0; a < cityarray.length; a++){
        // let citiesvalue = await getlatlangweather(cityarray[a].latitude, cityarray[a].longitude);
        // let singleurl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityarray[a].latitude}&lon=${cityarray[a].longitude}&appid=be43bc3c7136e46a94eba91ef7bb120f&units=metric`;
        // arrayurls.push(singleurl);
        // console.log(citiesvalue);
        // formatalldata(citiesvalue);
        let newvalue = new laglong;
        newvalue.latitude = cityarray[a].latitude;
        newvalue.longitude = cityarray[a].longitude;
        arrlaglong.push(newvalue);
    }
    fetchurlarray(arrlaglong);
    // weatherscreencontrol(true);
}



async function getallcitiesbysearch(arrayvalue){
    curdiv.innerHTML = "";
    minidiv.innerHTML ="";
    let arraypositions = [];
    for(let c = 0; c < arrayvalue.length; c++){
        let newval = new laglong;
        newval.latitude = arrayvalue[c].latitude;
        newval.longitude = arrayvalue[c].longitude;
        arraypositions.push(newval);
    }

    fetchurlarray(arraypositions);
}


function fetchurlarray(arrvalue){
    // console.log(arrvalue);
    Promise.all(arrvalue.map(
        position => getlatlangweather(position.latitude, position.longitude)
    )).then(
        function(responses){
            responses.map(
                res => formatalldata(res)
            );
            weatherscreencontrol(true);
        }
    );
   
}


function formatalldata(data){
    // console.log(getlatlangweather);
    let weatherdata = new weatherdatamodel;
    weatherdata.city = data.name;

    // weatherdata.country = data.sys.country;
    const cty = Country.getCountryByCode(data.sys.country);
    weatherdata.country = cty.name;
    // console.log(weatherdata.country)

    weatherdata.image = data.weather[0].icon;
    weatherdata.title = data.weather[0].main;
    weatherdata.description = data.weather[0].description;
    weatherdata.temp = data.main.temp;
    weatherdata.humitidy = data.main.humidity;
    weatherdata.pressure = data.main.pressure;
    weatherdata.ws = data.wind.speed;
    weatherdata.wd = data.wind.deg;
    // console.log(weatherdata);
    // console.log(weatherdata);
    weatherforall(weatherdata);
}



export {getlatlang, getallcitiesbysearch};