/*============================== Skills Counter Animation ==============================*/

const skillCards=document.querySelectorAll(".skill-card");

const skillObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show-skill");

}

});

},{
threshold:.3
});

skillCards.forEach((card)=>{

skillObserver.observe(card);

});