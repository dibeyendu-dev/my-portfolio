/*==============================
Tech Stack Animation
==============================*/

const techCards=document.querySelectorAll(".tech-card");

const techObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show-tech");

}

});

},{
threshold:.3
});

techCards.forEach((card)=>{

card.classList.remove("show-tech");

techObserver.observe(card);

});