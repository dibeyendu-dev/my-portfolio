/*============================== GitHub Reveal Animation ==============================*/

const githubCard=document.querySelector(".github-card");

const githubObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.3
});

githubCard.style.opacity="0";
githubCard.style.transform="translateY(60px)";
githubCard.style.transition=".8s ease";

githubObserver.observe(githubCard);