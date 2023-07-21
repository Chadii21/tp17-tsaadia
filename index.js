// SELECTEURS
// document.querySelector("h4").style.background = "yellow";
//  const baliseHTML = document.querySelector("h4");

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

console.log(btn1, btn2);

questionContainer.addEventListener("click", () => {
  /* questionContainer.style.background= "red";
    questionContainer.style.border = "3px solid teal";*/
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    console.log("click !");
});

btn2.addEventListener("click", () => {
    console.log("click !");
});

btn1.addEventListener("click", () => {
    response.style.visibility = "visible";
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.style.visibility = "visible"
    response.style.background = "red";
});


btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
});

/*{<div> > #id > .class > baliseHTML}*/

//--------------------------------------------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    console.log(e);
});

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    console.log(e);
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate (-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate (-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background= "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});

//--------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + "./";
    audio.play();
};

document.addEventListener("keypress", (e) => {
   key.textContent = e.key;
   
   if (e.key === "j") {
       keypressContainer.style.background = "pink";
   } else if (e.key === "h") {
       keypressContainer.style.background = "teal";
   } else {
       keypressContainer.style.background = "red";
   }
   if (e.key === "z")
   ring(e.key);
});


//------------------------------------------------------------------------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "Chadii";
let language = "Python";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();


 if(cgv.checked) {
     document.querySelector('form > div').innerHTML = `
     <h3>Pseudo : ${pseudo}</h3>
     <h4>Langage prefere : ${language}</h4>
     `;
 } else {
     alert("Veuillez accepter les CGV")
 }
});


//------------------------------------------------------------------------
// Load event
window.addEventListener("load", () => {
    console.log("Document Charge !");
});

//---------------------------------
// ForEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.getElementsByClassName("box");

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
    box.style.transform = "scale(0.7)";
    });   
});


//-------------------------------------------------------------------------
// addEventListener Vs onclick
document.body.onclick = () => {
    
}

