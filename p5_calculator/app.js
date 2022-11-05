// Start theme change section
var isDark = false;
let dlbtn = document.querySelector(".dlbtn");
const calculator = document.getElementById("calculator");

function themeChange() {
    if (isDark) {
        document.documentElement.style.setProperty("--varbackground", "white");
        document.documentElement.style.setProperty("--vartext", "black");
        document.documentElement.style.setProperty("--varmoonandsun", "rgb(0, 140, 255)");
        document.documentElement.style.setProperty("--varbtnbg", "rgb(182, 220, 238)");
        document.documentElement.style.setProperty("--varsign", "orange");


        dlbtn.innerHTML = "<i id='iconms' class='fa-solid fa-moon'></i>";
        dlbtn.style.boxShadow = "rgba(0, 60, 255, 0.25) 0px 54px 55px, rgba(0, 60, 255, 0.12) 0px -12px 30px, rgba(0, 60, 255, 0.12) 0px 4px 6px, rgba(0, 60, 255, 0.17) 0px 12px 13px, rgba(0, 60, 255, 0.09) 0px -3px 5px";

        calculator.style.boxShadow = "rgba(255, 165, 0, 0.25) 0px 24px 60px, rgba(255, 165, 0, 0.12) 0px -12px 50px, rgba(255, 165, 0, 0.12) 0px 4px 6px, rgba(255, 165, 0, 0.17) 0px 12px 13px, rgba(255, 165, 0, 0.09) 0px -10px 5px";

        isDark = !isDark;
    } else {
        document.documentElement.style.setProperty("--varbackground", "black");
        document.documentElement.style.setProperty("--vartext", "white");
        document.documentElement.style.setProperty("--varmoonandsun", "orange");
        document.documentElement.style.setProperty("--varbtnbg", "rgb(238, 234, 182)");
        document.documentElement.style.setProperty("--varsign", "blue");

        dlbtn.style.boxShadow = "rgba(255, 255, 0, 0.25) 0px 54px 55px, rgba(255, 255, 0, 0.12) 0px -12px 30px, rgba(255, 255, 0, 0.12) 0px 4px 6px, rgba(255, 255, 0, 0.17) 0px 12px 13px, rgba(255, 255, 0, 0.09) 0px -3px 5px";
        dlbtn.innerHTML = "<i id='iconms' class='fa-solid fa-sun'></i>";

        calculator.style.boxShadow = "rgba(0, 0, 255, 0.25) 0px 24px 60px, rgba(0, 0, 255, 0.12) 0px -12px 50px, rgba(0, 0, 255, 0.12) 0px 4px 6px, rgba(0, 0, 255, 0.17) 0px 12px 13px, rgba(0, 0, 255, 0.09) 0px -10px 5px";

        isDark = !isDark;
    }
}
// End theme change section




// Start calculator 
const btns = document.querySelectorAll(".cal");
const textnumber = document.getElementById("textnumber");

let unseentext = [];
let textarr = [];
let changedunseentext;
let filtertext = [];


btns.forEach(btn => btn.addEventListener("click", function () {

    let caltext = textnumber.innerHTML;
    if (caltext.length > 11) {
        window.alert("Please don't over than total number of 12");
        window.location.reload();
    }

    if (!isNaN(btn.value) || btn.value === ".") {
        textnumber.innerText += btn.value;

        unseentext = textnumber.innerText;
        changetext(unseentext);

    } else if (btn.value === "delete") {
        let detext = textnumber.innerText;
        detext = detext.split("");
        detext.pop();
        textnumber.innerText = detext.join("");

        unseentext = textnumber.innerText;
        changetext(unseentext);

    } else if (btn.value === "%" || btn.value === "/" || btn.value === "*" || btn.value === "-" || btn.value === "+" || btn.value === "√" || btn.value === "±") {
        textnumber.innerText += btn.value;


        unseentext = textnumber.innerText;
        changetext(unseentext);

    } else if (btn.value === "=") {
        textarr = changedunseentext.split(" ");
        console.log(textarr);
        for (let a = 0; a < textarr.length; a++) {
            if (!isNaN(parseFloat(textarr[a]))) {
                filtertext.push(textarr[a]);
            } else if (textarr[a] === "%" || textarr[a] === "/" || textarr[a] === "*" || textarr[a] === "-" || textarr[a] === "+" || textarr[a] === "√" || textarr[a] === "±") {
                filtertext.push(textarr[a]);
            }
        }

        for (let i = 0; i < filtertext.length; i++) {
            if (filtertext[i] === "") {
                filtertext.splice(i, 1);
            }
        }

        for (let p = 0; p < filtertext.length; p++) {
            if (filtertext[p] === "±") {
                filtertext[p - 1] = parseFloat(filtertext[p - 1]) * -1;
                filtertext.splice(p, 1);
            }
        }

        for (let h = 0; h < filtertext.length; h++) {
            if (filtertext[h] === "√") {
                filtertext[h] = Math.sqrt(filtertext[h + 1]);
                filtertext.splice(h + 1, 1);
            }
        }

        for (let l = 0; l < filtertext.length; l++) {
            if (filtertext[l] === "%") {
                filtertext[l - 1] = parseFloat(filtertext[l - 1]) % parseFloat(filtertext[l + 1]);
                filtertext.splice(l, 2);
            }
        }

        for (let k = 0; k < filtertext.length; k++) {
            if (filtertext[k] === "/") {
                filtertext[k - 1] = parseFloat(filtertext[k - 1]) / parseFloat(filtertext[k + 1]);
                filtertext.splice(k, 2)
            }
        }

        for (let j = 0; j < filtertext.length; j++) {
            if (filtertext[j] === "*") {
                filtertext[j - 1] = parseFloat(filtertext[j - 1]) * parseFloat(filtertext[j + 1]);
                filtertext.splice(j, 2)
            }
        }


        for (let n = 0; n < filtertext.length; n++) {
            if (filtertext[n] === "-") {
                filtertext[n - 1] = parseFloat(filtertext[n - 1]) - parseFloat(filtertext[n + 1]);
                filtertext.splice(n, 2)
            }
        }

        for (let m = 0; m < filtertext.length; m++) {
            if (filtertext[m] === "+") {
                filtertext[m - 1] = parseFloat(filtertext[m - 1]) + parseFloat(filtertext[m + 1]);
                filtertext.splice(m, 2)
            }
        }

        textnumber.innerText = filtertext;
        filtertext =[];
    }
}));



function changetext(unseentext) {
    unseentext = unseentext.split("");
    for (let b = 0; b < unseentext.length; b++) {
        if (unseentext[b] === "%" || unseentext[b] === "/" || unseentext[b] === "*" || unseentext[b] === "-" || unseentext[b] === "+" || unseentext[b] === "√" || unseentext[b] === "±") {
            unseentext[b] = ` ${unseentext[b]} `;
        }
    }
    console.log("Before :" + unseentext);
    changedunseentext = unseentext.join("");
    console.log("After :" + unseentext);
}


const year = document.getElementById("year");
let date = new Date();
let curyear = date.getFullYear();
year.innerText = curyear;
