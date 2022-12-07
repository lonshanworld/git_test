// import "./stylehome.css";
import "./style.css";
import "./stylecontact.css"

const element = document.createElement("div");
function contact(){
    
    element.setAttribute("id","contact");

    
    const alldiv = document.createElement("div");
    alldiv.setAttribute("id", "alldiv");

    const maintitle = document.createElement("p");
    maintitle.setAttribute("id", "maintitle");
    maintitle.textContent = "Contact Us"

    const contactbox = document.createElement("div");
    contactbox.setAttribute("id", "contactbox");
    contactbox.innerHTML = `
        <div>
            <span><i class="fa-solid fa-location-dot"></i>  2222 hahahaha</span>
            <br/>
            <span>London, United State </span>
        </div>
        <div>
            <span><i class="fa-regular fa-clock"></i>  Mon - Fri  =>  8am - 8pm</span>
            <br/>
            <span>Sat - Sun  =>  24 hr <span>
        </div>
        <div>
            <span><i class="fa-solid fa-phone"></i>  (099) - 222-4444</span>
        </div>
        <div>
            <span><i class="fa-regular fa-message"></i>  Message Us </span>
        </div>
        <div>
            <form action="" method = "">
                <div>
                    <label for="name">Name<input type="text" name="name" id="name" placeholder="Enter Your Name" required /></label>
                    
                </div>
                <div>
                    <label for="email">Email<input type="email" name="email" id="email" placeholder="Enter Your Email" required /></label>
                </div>
                <div>
                    <label for="para">Type Message<input type="textarea" name="para" id="para" placeholder="Enter Your Message" required/></label>
                </div>
            </form>
            <div id="btndiv">
                <button id="btn" type="button">Send</button>
            </div>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49903.107556634575!2d96.19227512198769!3d16.888024761954256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193e2511a91a3%3A0x34fbc65c8ef67bfa!2z4YCA4YCU4YC64YCe4YCs4YCa4YCsIOGAleGAlOGAuuGAuOGAgeGAvOGAtg!5e0!3m2!1smy!2smm!4v1670399383872!5m2!1smy!2smm" 
        style="border:0;"
        allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    `;



    element.appendChild(alldiv);
    alldiv.appendChild(maintitle);
    alldiv.appendChild(contactbox);
    // element.textContent = "Contact";
    // element.classList.add("hello");
    return element;
}

function visiblecontact(){
    element.classList.remove("hidediv");
    element.classList.add("visiblediv");
   
}

function hidecontact(){
    element.classList.remove("visiblediv");
    element.classList.add("hidediv");
   
}

export default contact;
export {visiblecontact, hidecontact};