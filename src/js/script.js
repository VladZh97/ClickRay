const searchIcon = document.querySelector('.fa-search');
const searchInput = document.querySelector('.search__input');


const showInput = () => {
  searchInput.classList.toggle('active')
}

searchIcon.addEventListener('click', showInput)