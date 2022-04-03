"use strict";

const btnClick = document.getElementById("btn-click");
const btnClose = document.getElementById("btn-close");

const navBar = document.getElementById("mobile");

btnClick.addEventListener("click",()=>{
  navBar.classList.add("show");
  
});
btnClose.addEventListener("click",()=>{
  navBar.classList.remove("show")
});
