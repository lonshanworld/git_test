function footer(){
    const curyear = document.getElementById("curyear");

    let date = new Date();
    let year = date.getFullYear();

    curyear.innerText = year;
}

export default footer;