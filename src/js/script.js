import tabs from './modules/tabs';
import popup from './modules/popup';
import burger from './modules/burger';
import toggleSubMenu from "./modules/menu"

window.addEventListener("DOMContentLoaded", () => {

// HEADER SEARCH
const searchIcon = document.querySelector('.search__icon'),
      searchInput = document.querySelector('.search__input');


document.addEventListener('click', (e) => {
  if(e.target !== searchIcon &&
     e.target !== searchInput) {
    searchInput.classList.remove('visible')
  }

  console.log(e.target.tagName)
})

const showInput = () => searchInput.classList.toggle('visible');
searchIcon.addEventListener('click', showInput)

// CAROUSEL
if(window.innerWidth <= 768) {
  const carouselList = document.querySelector('.companies__list');
  carouselList.classList.add('owl-carousel')


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items: 2,
    dotsEach: 2,
})
}




// MODULES
tabs();
popup();
burger();
toggleSubMenu('#pages a', '.header-sub');
toggleSubMenu('#about-sub a', '.about-sub');




})


