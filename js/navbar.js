const header=document.querySelector(".header");
const menu=document.querySelector(".nav-menu");
const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

menuToggle.addEventListener("click",()=>{

menu.classList.toggle("show-menu");

menuToggle.querySelector("i").classList.toggle("fa-bars");
menuToggle.querySelector("i").classList.toggle("fa-xmark");

});

navLinks.forEach((link)=>{

link.addEventListener("click",()=>{

menu.classList.remove("show-menu");

menuToggle.querySelector("i").classList.remove("fa-xmark");
menuToggle.querySelector("i").classList.add("fa-bars");

});

});

const sections=document.querySelectorAll("section[id]");

window.addEventListener("scroll",()=>{

const scrollY=window.pageYOffset;

sections.forEach((section)=>{

const sectionHeight=section.offsetHeight;
const sectionTop=section.offsetTop-100;
const sectionId=section.getAttribute("id");

const navLink=document.querySelector(".nav-menu a[href*="+sectionId+"]");

if(scrollY>=sectionTop&&scrollY<sectionTop+sectionHeight){

navLink.classList.add("active");

}else{

navLink.classList.remove("active");

}

});

});