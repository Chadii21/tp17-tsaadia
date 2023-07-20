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

//--------------------------------------------------------------------------------------

