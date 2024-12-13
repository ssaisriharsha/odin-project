"use strict";
let btn = document.querySelector(".catch");
btn.addEventListener("mouseover", (e)=>{
    btn.classList.toggle("toggler")
    console.log(e.target);  
});

btn.addEventListener("click", (e)=>{
    alert("You won!");
    e.target.classList.toggle("toggler", false);
});