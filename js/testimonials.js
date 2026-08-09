/*============================== Testimonials Animation ==============================*/

const testimonialCards=document.querySelectorAll(".testimonial-card");

const testimonialObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.25
});

testimonialCards.forEach((card)=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".8s ease";

testimonialObserver.observe(card);

});