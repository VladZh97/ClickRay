// TESTIMONIAL TABS
const tabs = () => {
  const body = document.querySelector('.testimonial__people'),
        tab = document.querySelectorAll('.testimonial__person-image'),
        content = document.querySelectorAll('.testimonial__item');
  
  const hideContent = () => {
    content.forEach(item => {
      item.classList.remove('active');
    })

    tab.forEach(item => {
      item.classList.remove('active')
    })
  }

  const showContent = (i = 2) => {
    content[i]?.classList.add('active');
    tab[i]?.classList.add('active')
  }


  hideContent();
  showContent();

  body.addEventListener('click', (e) => {
    const target = e.target;
    if(target &&
       target.classList.contains('testimonial__person-image') ||
       target.parentNode.classList.contains('testimonial__person-image')) {
         
        tab.forEach((item, i) => {
          if(target === item || target.parentNode === item) {
            hideContent();
            showContent(i);
          }
        })
    }
  })
}

export default tabs;