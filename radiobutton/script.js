"use strict"
let cont = document.querySelector(".outer");
cont.addEventListener("click", (e)=>{
    cont.classList.toggle("outertoggled");
    // cont.firstElementChild.classList.toggle("innertoggled");    
});