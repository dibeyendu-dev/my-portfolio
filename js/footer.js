/*==============================
Back To Top
==============================*/

const backTop=document.querySelector(".back-top");

if(backTop){

backTop.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==============================
Footer Reveal
==============================*/

const footer=document.querySelector(".footer");

const footerObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.1
});

footer.style.opacity="0";
footer.style.transform="translateY(80px)";
footer.style.transition=".8s ease";

footerObserver.observe(footer);