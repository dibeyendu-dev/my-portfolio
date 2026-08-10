/*============================== FAQ Accordion ==============================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach((faq)=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/*==============================
FAQ Reveal Animation
==============================*/

const faqObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

faqItems.forEach((item)=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition=".8s ease";

faqObserver.observe(item);

});