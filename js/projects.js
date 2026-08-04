/*============================== Projects Animation ==============================*/

const projectCards=document.querySelectorAll(".project-card");

const projectObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show-project");

}

});

},{
threshold:.25
});

projectCards.forEach((card)=>{

card.style.opacity="0";
card.style.transform="translateY(80px)";
card.style.transition=".8s ease";

projectObserver.observe(card);

});