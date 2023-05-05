const button=document.querySelector('button');
const nav=document.querySelector('nav');
const path=document.querySelector('p');
button.addEventListener('mouseout',()=>{
    nav.classList.remove('nav-slide');
    path.classList.add('fade');
})

button.addEventListener('mouseenter',()=>{
    nav.classList.add('nav-slide');
    path.classList.remove('fade');
})
