let menubtn = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
document.querySelector('.fa-bars').onclick = () =>{
    menubtn.classList.toggle('active-btn');
    navbar.classList.toggle('active-navbar');
}

const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function(){
    // window.scrollTo(0,0);
    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth"
    // });
    $("html, body").animate({scrollTop: 0}, "slow");

});

let arrow = document.querySelector(".arrow");
arrow.classList.remove('arrow');
window.onscroll = () =>{
    if(window.scrollY > 250){
        arrow.classList.add('arrow');
    }else{
        arrow.classList.remove('arrow');
    }
}





const swiper = new Swiper('.swiper', {
    speed: 1300,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });