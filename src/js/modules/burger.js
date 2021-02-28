const burger = () => {

  // Burger menu
const menuBtn = document.querySelector('.menu-btn'),
      menuTop = document.querySelector('.header__menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuTop.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuTop.classList.remove('active');
        menuOpen = false;
        html.style.overflowY = "auto";
    }
});

}

export default burger;