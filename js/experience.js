

const experienceCards=document.querySelectorAll(".experience-card");

const experienceObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.25
});

experienceCards.forEach((card)=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".8s ease";

experienceObserver.observe(card);

});