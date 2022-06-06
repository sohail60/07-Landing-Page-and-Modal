const navBtn=document.querySelector('.nav-btn');
const nav=document.querySelector('.nav');
const signup=document.querySelector('.signup');
const close=document.querySelector('.close');
const modalContainer=document.querySelector('.modal-container');

signup.addEventListener('click',function(){
    modalContainer.style.display='flex';
})

close.addEventListener('click',function(){
    modalContainer.style.display='none';
})

navBtn.addEventListener('click',function(){
    nav.classList.toggle('show');
})
