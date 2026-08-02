/*==============================
About Counter Animation
==============================*/

const aboutCards=document.querySelectorAll(".info-card h3");

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

const counter=entry.target;

const value=counter.innerText;

if(value.includes("+")){

let end=parseInt(value);

let start=0;

const speed=30;

const update=()=>{

if(start<end){

start++;

counter.innerText=start+"+";

setTimeout(update,speed);

}else{

counter.innerText=value;

}

};

update();

}

}

});

},{threshold:.6});

aboutCards.forEach((card)=>{

observer.observe(card);

});