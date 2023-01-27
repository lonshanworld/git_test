function getfooteryear(){
    const footeryear = document.getElementById("footeryear");
    const getdate = new Date();
    const getyear = getdate.getFullYear();
    footeryear.innerText = getyear;
}

export default getfooteryear;