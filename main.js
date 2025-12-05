// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Typing Animation
const roles = ["Web Developer","Frontend Enthusiast","JavaScript Learner"];
let i=0,j=0;
const typingElement=document.getElementById('typing');
function type(){
    if(i<roles.length){
        if(j<roles[i].length){
            typingElement.innerHTML+=roles[i][j];
            j++;
            setTimeout(type,100);
        } else {
            setTimeout(erase,1500);
        }
    } else { i=0; type(); }
}
function erase(){
    if(j>=0){
        typingElement.innerHTML=roles[i].substring(0,j);
        j--;
        setTimeout(erase,50);
    } else { i++; type(); }
}
type();

// Projects
const projects=[
{title:"Portfolio Website",desc:"Interactive and modern portfolio.",link:"#"},
{title:"Digital Resume Builder",desc:"JS form to PDF generator.",link:"#"},
{title:"E-Commerce Page",desc:"Product listing page with filters.",link:"#"},
{title:"Startup Landing Page",desc:"Clean landing page design.",link:"#"},
{title:"Student Dashboard",desc:"CRUD app using localStorage.",link:"#"}];
const list=document.getElementById('projectList');
projects.forEach(p=>{
  const card=document.createElement('div');
  card.className='project-card';
  card.innerHTML=<h3>${p.title}</h3><p>${p.desc}</p><p><a href="${p.link}" target="_blank">View</a></p>;
  list.appendChild(card);
});

// Animate Skill Bars
window.addEventListener('scroll',()=>{
  const skillBars=document.querySelectorAll('.fill');
  skillBars.forEach(bar=>{
    const rect=bar.getBoundingClientRect();
    if(rect.top < window.innerHeight){
      bar.style.width=bar.getAttribute('data-width');
    }
  });
});

// Hamburger Menu
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>{navLinks.classList.toggle('show');});

// Back to Top
const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>{if(window.scrollY>300){backTop.style.display='block';}else{backTop.style.display='none';}});
backTop.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});

// Contact Form
document.getElementById('contactForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    e.target.reset();
});