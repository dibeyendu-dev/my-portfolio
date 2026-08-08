/*============================== Services Animation ==============================*/

const serviceCards=document.querySelectorAll(".service-card");

const serviceObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.25
});

serviceCards.forEach((card)=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".8s ease";

serviceObserver.observe(card);

});