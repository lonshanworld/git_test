import "../style.css";

const curdiv = document.getElementById("curdiv");

function weatherforcurr(weatherdata){
    curdiv.innerHTML = `
    <div class="curweatherdiv">    
        <span class="curlocationtxt">${weatherdata.city} / ${weatherdata.country}</span>
        <div class="curimgdiv">
            <img src="https://openweathermap.org/img/wn/${weatherdata.image}@4x.png" />
        </div>
        <span class="curcloudtxt">${weatherdata.title} | ${weatherdata.description}</span>
        <div class="curinfodivs">
            <span>Temperature = </span>
            <span> ${weatherdata.temp} °C</span>
        </div>
        <div class="curinfodivs">
            <span>Humidity = </span>
            <span> ${weatherdata.humitidy} %</span>
        </div>
        <div class="curinfodivs">
            <span>Pressure = </span>
            <span> ${weatherdata.pressure} hPa</span>
        </div>
        <div class="curinfodivswind">
            <div class="curinfodivs">
                <span>Wind Speed = </span>
                <span> ${weatherdata.ws} m/s</span>
            </div>
            <div class="curinfodivs">
                <span>Wind Direction = </span>
                <span> ${weatherdata.wd} °WSW</span>
            </div>
        </div>
    </div>
    `;
}

export default weatherforcurr;