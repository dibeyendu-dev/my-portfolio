const scrollProgressBar=document.querySelector(".scroll-progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const documentHeight=document.documentElement.scrollHeight-window.innerHeight;

const scrollPercent=(scrollTop/documentHeight)*100;

scrollProgressBar.style.width=scrollPercent+"%";

});