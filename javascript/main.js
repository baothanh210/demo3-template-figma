const btnMenuMobile = document.querySelector('.btn-mobile-menu');
const mobileMenu = document.querySelector('.header-nav-mobile');
const header = document.querySelector('.header');
const btnCloseMenu = document.querySelector('.btn-close-menu');
const bodyScroll = document.querySelector('.bodyScroll');
btnMenuMobile.addEventListener("click",()=> {
  mobileMenu.style.left="0";
  mobileMenu.style.width="100%";
})
btnCloseMenu.addEventListener("click",()=>{
  mobileMenu.style.left="-100%";
  mobileMenu.style.width="0";
})