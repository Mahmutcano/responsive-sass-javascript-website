const navItems = document.querySelector("#nav_items");
const openNavBtn = document.querySelector("#open_nav_btn");
const closeNavBtn = document.querySelector("#close_nav_btn");

openNavBtn.addEventListener("click", () => {
    navItems.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
})

const closeNav = () => {
    navItems.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
}

closeNavBtn.addEventListener("click", closeNav);



// SWİPER SLİDE
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        // RESPONSİVE BREAKPOİNTS
        breakpoi̇nts: {
            // Window width is >= 600px
            600: {
                slidesPerView: 1,
    
            },
    
            // Window width is >= 1024px
            1024: {
                slidesPerView: 2,
    
            }
        }
  });