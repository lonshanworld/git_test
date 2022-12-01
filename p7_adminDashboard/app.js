const yeartext = document.getElementById("yeartext");
let getdate = new Date();
let getyear = getdate.getFullYear();
yeartext.innerText = getyear;


const hidemenubtn = document.getElementById("hidemenu");
const menubar = document.getElementById("menubar");


// Start hide menu function
hidemenubtn.addEventListener("click", function(){
    if(window.getComputedStyle(menubar).display === "block"){
        menubar.style.setProperty("display", "none");
    }else{
        menubar.style.setProperty("display", "block");
    }
});


// End hide menu function




// Start hide announcement function 
const announcementdiv = document.getElementById("announcementdiv");
const announcementbtn = document.getElementById("announcementbtn");

announcementbtn.addEventListener("click", function(){
    if(window.getComputedStyle(announcementdiv).display === "block"){
        announcementdiv.style.setProperty("display", "none");
        announcementbtn.style.transform ="rotate(90deg)"
    }else{
        announcementdiv.style.setProperty("display", "block");
        announcementbtn.style.transform ="rotate(0deg)"
    }
});
// End hide announcement function



// Start hide trending function 
const trendingsdiv = document.getElementById("trendingsdiv");
const trendingbtn = document.getElementById("trendingbtn");

trendingbtn.addEventListener("click", function(){
    if(window.getComputedStyle(trendingsdiv).display === "block"){
        trendingsdiv.style.setProperty("display", "none");
        trendingbtn.style.transform ="rotate(90deg)"
    }else{
        trendingsdiv.style.setProperty("display", "block");
        trendingbtn.style.transform ="rotate(0deg)"
    }
});
// End hide trending function





// hide with window innerWidth
function hidefunction(){
    var w = window.innerWidth;
    if(w > 800){
        menubar.style.setProperty("display","block");
    }else{
        menubar.style.setProperty("display","none");
    }

    if(w >430){
        announcementdiv.style.setProperty("display", "block");
        trendingsdiv.style.setProperty("display", "block");
    }else{
        announcementdiv.style.setProperty("display", "none");
        trendingsdiv.style.setProperty("display", "none");
    }
}

window.addEventListener("resize", hidefunction);