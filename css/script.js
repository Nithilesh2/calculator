let calci = document.querySelector(".calci");
let toggle1 = document.querySelector(".tog1");
let toggle2 = document.querySelector(".tog2");
let display = document.querySelector(".display");


window.addEventListener("load",()=>{
    calci.style.background = "rgb(201 201 201)";
    display.style.background = "rgb(53, 53, 53)";
    display.style.color = "white";
})
toggle1.addEventListener("click",()=>{
    toggle1.style.display = "none";
    toggle2.style.display = "block";
    calci.style.background = "rgb(201 201 201)";
    display.style.background = "rgb(53, 53, 53)";
    display.style.color = "white";
})

toggle2.addEventListener("click",()=>{
    toggle1.style.display = "block";
    toggle2.style.display = "none"; 
    calci.style.background = "rgb(53, 53, 53)";
    display.style.background = "rgb(201 201 201)";
    display.style.color = "black";
})