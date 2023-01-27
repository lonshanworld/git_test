import "../style.css";

const minidiv = document.getElementById("minidiv");

function weatherforall(weatherdata){
    minidiv.innerHTML += `
        <div class="miniweatherdiv">    
            <span class="minilocationtxt">${weatherdata.city} / ${weatherdata.country}</span>
            <div class="miniimgdiv">
                <img src="https://openweathermap.org/img/wn/${weatherdata.image}@2x.png" />
            </div>
            <span class="minicloudtxt">${weatherdata.title} | ${weatherdata.description}</span>
            <div class="miniinfodivs">
                <span>Temperature = </span>
                <span> ${weatherdata.temp} °C</span>
            </div>
            <div class="miniinfodivs">
                <span>Humidity = </span>
                <span> ${weatherdata.humitidy} %</span>
            </div>
            <div class="miniinfodivs">
                <span>Pressure = </span>
                <span> ${weatherdata.pressure} hPa</span>
            </div>
            <div class="miniinfodivswind">
                <div class="curinfodivs">
                    <span>Wind Speed = </span>
                    <span> ${weatherdata.ws} m/s</span>
                </div>
                <div class="miniinfodivs">
                    <span>Wind Direction = </span>
                    <span> ${weatherdata.wd} °WSW</span>
                </div>
            </div>
        </div>
    `;
}

export default weatherforall;