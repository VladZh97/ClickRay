import tabs from './modules/tabs';
import popup from './modules/popup';

window.addEventListener("DOMContentLoaded", () => {

// HEADER SEARCH
const searchIcon = document.querySelector('.fa-search'),
      searchInput = document.querySelector('.search__input');

      
document.addEventListener('click', (e) => {
  if(e.target !== searchIcon && 
     e.target !== searchInput) {
    searchInput.classList.remove('active')
  }
})

const showInput = () => searchInput.classList.toggle('active');
searchIcon.addEventListener('click', showInput)


// MODULES
tabs('.testimonial__people', '.testimonial__person-image', '.testimonial__item');
popup();

})


