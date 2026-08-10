/*==============================
Copy Email
==============================*/

const copyButton=document.getElementById("copyEmail");

if(copyButton){

copyButton.addEventListener("click",()=>{

const email="yourmail@gmail.com";

navigator.clipboard.writeText(email);

copyButton.innerHTML='<i class="fa-solid fa-check"></i> Copied';

setTimeout(()=>{

copyButton.innerHTML='<i class="fa-regular fa-copy"></i> Copy Email';

},2000);

});

}

/*==============================
Contact Reveal
==============================*/

const contactElements=document.querySelectorAll(".contact-card,.contact-form");

const contactObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

contactElements.forEach((item)=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition=".8s ease";

contactObserver.observe(item);

});