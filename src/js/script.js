import sal from 'sal.js'

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


  // SAL INIT
  sal();


  // SET STYLE TO BANER TITLE
  const title = document.querySelector('.baner__title'),
      subtitle = document.querySelector('.baner__subtitle');

      setTimeout(() => {
        title.classList.add('active');
        subtitle.classList.add('active');
      }, 1000)



  // REMOVE ITEMS FROM DOM
  if(window.innerWidth <= 768) {

    const searchContainer = document.querySelector('.header__search').remove();
    const footerContact = document.querySelector('.footer-bottom__container .contact__icons').remove();
  }

})


