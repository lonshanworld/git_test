let library = [
    {
        image :"https://static.remove.bg/sample-gallery/graphics/fresh-thumbnail.jpg",
        title : "Harry Potter 1",
        author : "Justin",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        pages : 357
    },
    {
        image : "./assets/images/harry_potter_1.jpg",
        title : "Harry Potter 2",
        author : "Justin",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        pages : 246
    },
    {
        image : "./assets/images/harry_potter_1.jpg",
        title : "Harry Potter 3",
        author : "Justin",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        pages : 680
    },
    {
        image : "./assets/images/harry_potter_1.jpg",
        title : "Harry Potter 4",
        author : "Justin",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        pages : 680
    },
    {
        image : "./assets/images/harry_potter_1.jpg",
        title : "Harry Potter 5",
        author : "Justin",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        pages : 680
    }
];

function book(image, title, author, description, pages){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.image = image
}

render();

function render(){
    let booksection = document.getElementById("booksec");

    booksection.innerHTML = "";
    for(let i = 0; i < library.length; i ++){
        booksection.innerHTML += 
        `
            <div class="books">
                <div class="bookimg">
                    <img src= ${library[i]["image"]} />
                </div>
                <div class="booktitle">
                    <span class="bookbigText">Title :&nbsp;&nbsp;&nbsp;</span>
                    <span class="booksmallText">${library[i]["title"]}</span>
                </div>
                <div class="bookauthor">
                    <span class="bookbigText">Author :&nbsp;&nbsp;&nbsp;</span>
                    <span class="booksmallText">${library[i]["author"]}</span>
                </div>
                <div class="bookdpt" style="text-align : justify">
                    <span class="bookbigText">Description :&nbsp;&nbsp;&nbsp;</span>
                    <span class="booksmallText" >${library[i]["description"]}</span>
                </div>
                <div class="bookpage">
                    <span class="bookbigText">Number of Pages :&nbsp;&nbsp;&nbsp;</span>
                    <span class="booksmallText">${library[i]["pages"]}</span>
                </div>
                <div class="bookbtns">
                    <button class="bookreadbtn">Read</button>
                    <button class="bookdeletebtn">Delete</button>
                </div>
            </div>
        `;
    }

    let deleteBtns = document.querySelectorAll(".bookdeletebtn");
    console.log(deleteBtns);
    for(let a = 0; a < deleteBtns.length; a++){
        deleteBtns[a].addEventListener("click",function(e){
            console.log(library.length);
            library.splice(a,1);
            console.log(library.length);
            render();
        });
    }

}

let errortext = document.getElementById("errortext");


const formsec = document.getElementById("formsec");
formsec.style.display = "none";
function addbookform(){
    errortext.textContent = "";
    formsec.style.display = "flex";
}


const cancelformbtn = document.getElementById("cancelformbtn");
function cancelform(){
    formsec.style.display = "none";
}


let formtitle = document.getElementById("formtitle");
let formauthor = document.getElementById("formauthor");
let formdes = document.getElementById("formdes");
let formpage = document.getElementById("formpage");
let formimage = document.getElementById("formimage");
let submitbtn = document.getElementById("submitbtn");
let tagnameinputs = document.getElementsByTagName("input");

submitbtn.addEventListener("click", function (e){
    errortext.textContent = "";
    e.preventDefault();
    // console.log(formtitle.value);
    // console.log(formauthor.value);
    // console.log(formdes.value);
    // console.log(formpage.value);
    // console.log(formimage.value);
    // console.log(formtitle.validity.valid);
    if(formtitle.validity.valid || formauthor.validity.valid || formdes.validity.valid || formpage.validity.valid || formimage.validity.valid){
        console.log(formimage.validity.typeMismatch);
        if(formimage.validity.typeMismatch){
            errortext.textContent = "Please enter valid Image URL";
        }else{
            formimage.setCustomValidity("");
            const newbook = new book(formimage.value, formtitle.value, formauthor.value, formdes.value, formpage.value);
            library.push(newbook);
            // library.splice(library.length - 1,newbook);

            render();
            formsec.style.display = "none";
        }
    }else{
        errortext.textContent = "Please enter valid value";
    }
});




// window.addEventListener("click",function(e){
//     // console.log(e.target.parentNode.parentNode);
//     // console.log(e.target.className);
//     if(e.target.className == "bookdeletebtn"){
//         // e.target.parentNode.parentNode.style.display = "none";
//         console.log(e);
//     }
// })