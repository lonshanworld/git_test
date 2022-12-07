
import "./style.css";
import home from "./home.js";
import { visiblehome,hidehome } from "./home.js";
import menu from "./menu.js"
import { visiblemenu, hidemenu } from "./menu.js";
import contact from "./contact.js";
import { visiblecontact,hidecontact } from "./contact.js";
import burgerIcon from "./burger-solid.svg";
import forkIcon from "./utensils-solid.svg"


function maincomponent(){
    const element = document.createElement("div");
   
    element.appendChild(nav());
    element.appendChild(home());
    element.appendChild(menu());
    element.appendChild(contact());

    visiblehome();
    hidemenu();
    hidecontact();

    return element;
}

function nav(){
    const sectionnav = document.createElement("div");
    const headerdiv = document.createElement("div");
    const header = document.createElement("span");
    const burgerdiv = document.createElement("span");
    const forkdiv = document.createElement("span");
    const navbtnsdiv = document.createElement("div");
    const  homebtn = document.createElement("button");
    const foodmenubtn = document.createElement("button");
    const contactbtn = document.createElement("button");
    
    sectionnav.setAttribute("id","nav");
    headerdiv.setAttribute("id","headerdiv");
    navbtnsdiv.setAttribute("id","navbtnsdiv");
    header.setAttribute("id", "header");
    homebtn.classList.add("navbtns");
    foodmenubtn.classList.add("navbtns");
    contactbtn.classList.add("navbtns");

    sectionnav.appendChild(headerdiv);
    sectionnav.appendChild(navbtnsdiv);
    
    headerdiv.appendChild(burgerdiv);
    headerdiv.appendChild(forkdiv);
    headerdiv.appendChild(header);

    navbtnsdiv.appendChild(homebtn);
    navbtnsdiv.appendChild(foodmenubtn);
    navbtnsdiv.appendChild(contactbtn);

    const BIcon = new Image();
    const FIcon = new Image();
    BIcon.classList.add("navicons");
    FIcon.classList.add("navicons");
    BIcon.src = burgerIcon;
    FIcon.src = forkIcon;
    burgerdiv.appendChild(BIcon);
    burgerdiv.appendChild(FIcon);
    

    header.textContent = "Food Restaurant";
    homebtn.textContent = "Home";
    foodmenubtn.textContent = "Food Menu";
    contactbtn.textContent = "Contact";

    homebtn.addEventListener("click", function(){
        visiblehome();
        hidemenu();
        hidecontact();
        // console.log(home().classList);
    });

    foodmenubtn.addEventListener("click",function(){
        hidehome();
        visiblemenu();
        hidecontact();
    });

    contactbtn.addEventListener("click", function(){
        hidehome();
        hidemenu();
        visiblecontact();
    });

    return sectionnav;
}

function footer(){
    const footer = document.createElement("footer");
    const footerspan = document.createElement("span");
    let date = new Date();
    let year = date.getFullYear();

    footer.appendChild(footerspan);
    footerspan.innerText = `Copyright © ${year}. All rights reserved to Lon Shan.`;

    return footer;
}

document.body.appendChild(maincomponent());
document.body.appendChild(footer());