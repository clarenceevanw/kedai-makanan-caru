import {products, insertProduct} from "./product.js";

const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener('click', ()=> {
    navbarNav.classList.toggle('active');
});

document.addEventListener('click', (e) =>{
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    };
});

insertProduct();
