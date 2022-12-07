// import "./stylehome.css";
import "./style.css";
import "./stylemenu.css";
import burger from "./burger.jpg";

const element = document.createElement("div");
function menu(){
    
    element.setAttribute("id","menu");

    const fooddiv = document.createElement("div");
    fooddiv.setAttribute("id","fooddiv");
    element.appendChild(fooddiv);

    let foodstore = [
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
        {
            image: burger,
            title: "Burger 1",
            ingredients : "Meat , Bread, Tomato, Gabbage, Mayonese, Potato",
            price : 2000,
        },
    ];

    for(let i = 0; i < foodstore.length; i ++){
        fooddiv.innerHTML +=
        `
            <div class="food">
                <div class = "foodimg">
                    <img src= ${foodstore[i]["image"]} />
                </div>
                <div class= "info">
                    <span class = "foodname">Title :  ${foodstore[i]["title"]}</span>
                    <span class = "foodigt">Ingredients :  ${foodstore[i]["ingredients"]}</span>
                    <span class = "price">Price :  ${foodstore[i]["price"]}</span>
                </div>
            </div>
        `;
    }

    // element.textContent = "Food Menu";
    // element.classList.add("hello");
    return element;
}

function visiblemenu(){
    element.classList.remove("hidediv");
    element.classList.add("visiblediv");
  
}

function hidemenu(){
    element.classList.remove("visiblediv");
    element.classList.add("hidediv");
   
}


export default menu;
export {visiblemenu, hidemenu};