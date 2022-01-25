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

// function checkModeScreen(){
//   const checkbox = document.querySelector('input[type="checkbox"]');
//   const root = document.querySelector("html");

//   function checkSystem() {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
//     if (prefersDark) {
//       root.classList.add("DarkMode");
//     } else {
//       root.classList.remove("DarkMode")
//     }
//   }

//   function initDarkMode() {
//     checkSystem();

//     if (root.classList.contains("DarkMode")) {
//       checkbox.setAttribute("checked", true);
//     }

//     checkbox.addEventListener("change", (event) => {
//       root.classList.toggle("DarkMode");
//       const isDarkMode = root.classList.contains("DarkMode");
//       checkbox.setAttribute("checked", isDarkMode)  
//     });
//   }


//   initDarkMode()
// }
// checkModeScreen()