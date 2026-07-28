window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.classList.add("hide");

document.body.classList.add("loaded");

},2000);

});