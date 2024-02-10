//menu
let menu =document.querySelector('.menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick = ()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active')
    login.classList.remove('active')
}

//cart
let cart = document.querySelector('.cart')
document.querySelector('#cart-icon').onclick=()=>{
    cart.classList.toggle("active");
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active')
}

//login form toggle
let login = document.querySelector('.login-form')
document.querySelector('#user-icon').onclick=()=>{
    login.classList.toggle('active')
    cart.classList.remove("active");
    navbar.classList.remove('active');
    menu.classList.remove('move');
}
//onclick on menu Link removed menu
window.onscroll=()=>{
    navbar.classList.remove('active');
    menu.classList.remove('move');
    
}
//change header background color and shadow on scroll
let header  =document.querySelector('header')
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0)
})

//scroll top
let scrolltop  =document.querySelector('.scroll-top')
window.addEventListener('scroll',()=>{
    scrolltop.classList.toggle('active',window.scrollY>0)
})