const cursor=document.querySelector(".cursor");
const cursorBlur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

cursorBlur.style.left=e.clientX+"px";
cursorBlur.style.top=e.clientY+"px";

});

const links=document.querySelectorAll("a,button,.btn");

links.forEach((link)=>{

link.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

link.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});