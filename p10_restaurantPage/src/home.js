import "./stylehome.css";
import "./style.css";
import foodhomeimg from "./foodhome.jpg";


const element = document.createElement("div");
function home(){
    
    element.setAttribute("id","home");

    const paradiv = document.createElement("div");
    paradiv.setAttribute("id","paradiv");
    const bigText = document.createElement("p");
    bigText.setAttribute("id","bigText");
    const smallText = document.createElement("p");
    smallText.setAttribute("id","smallText");

    paradiv.appendChild(bigText);
    paradiv.appendChild(smallText);

    bigText.innerHTML ="We served for Customers <br/> We exist for Customers <br/> Our service is the Best <br/> We provide the Best Meals ";
    smallText.innerHTML = "<p>History</p><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>"




    const textlistdiv = document.createElement("div");
    textlistdiv.setAttribute("id","textlistdiv");
    textlistdiv.innerHTML = "<ol><li>Our Meals are clean and Healthy. </li><li>Customers must be Satisfied .</li><li>We sell Vegan Foods .</li><li>All religions can eat without Worries .</li></ol>";




    const imagediv = document.createElement("div");
    imagediv.setAttribute("id","imagediv");
    const myImg = new Image();
    myImg.src = foodhomeimg;
    imagediv.appendChild(myImg);

    const btn = document.createElement("button");
    btn.textContent = "Order Now";
    imagediv.appendChild(btn);



    element.appendChild(paradiv);
    element.appendChild(textlistdiv);
    element.appendChild(imagediv);
    
    // element.classList.add("hello");
    return element;
}

function visiblehome(){
    element.classList.remove("hidediv");
    element.classList.add("visiblediv");
    
}

function hidehome(){
    element.classList.remove("visiblediv");
    element.classList.add("hidediv");
 
}

export default home;
export {visiblehome, hidehome};