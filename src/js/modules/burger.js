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
    }
});

document.addEventListener('click', (e) => {
    const targetName = e.target.tagName;
    if(e.target !== menuTop &&
        e.target !== menuBtn &&
        targetName !== "INPUT" &&
        targetName !== "A" &&
        targetName !== "I") {
        menuBtn.classList.remove('open');
        menuTop.classList.remove('active');
        menuOpen = false;
    }

    console.log(e.target)
})

}

export default burger;