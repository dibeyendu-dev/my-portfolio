/*============================== Achievement Counter ==============================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.getAttribute("data-target");

let count=0;

const speed=target/80;

const updateCounter=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText=target;

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

},{
threshold:.5
});

counters.forEach((counter)=>{

counterObserver.observe(counter);

});