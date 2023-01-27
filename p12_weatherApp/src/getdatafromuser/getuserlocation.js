import { introcontrol,loadingcontrol,weatherscreencontrol,errcontrol } from "../uicontrol";
import { getlatlang } from "../service.js";

const currentgps = document.getElementById("currentgps");

function getuserlocation(){
    currentgps.addEventListener("click",function(){
        loadingcontrol(true);
        requestuserpermission();
    });
}

function requestuserpermission(){
    const ifsuccess = (position) => {
        getlatlang(position.coords.latitude, position.coords.longitude);
    };

    const iffail = (error) => {
        errcontrol(true, error.message);
    };

    navigator.geolocation.getCurrentPosition(ifsuccess, iffail);
}


export default getuserlocation;
