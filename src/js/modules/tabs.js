// TESTIMONIAL TABS
const tabs = (tabBody, tabSelector, tabContent) => {
  const body = document.querySelector(tabBody),
        tab = [...document.querySelectorAll(tabSelector)],
        content = [...document.querySelectorAll(tabContent)];
  
  function hideContent() {
    content.forEach(item => {
      item.classList.remove('active');
    })

    tab.forEach(item => {
      item.classList.remove('active')
    })
  }

  function showContent(i = 2) {
    content[i]?.classList.add('active');
    tab[i]?.classList.add('active')
  }


  hideContent();
  showContent();

  body.addEventListener('click', (e) => {
    const target = e.target;
    if(target &&
       target.classList.contains(tabSelector.replace(/\./, "")) ||
       target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
        tab.forEach((item, i) => {
          if(target == item || target.parentNode == item) {
            hideContent();
            showContent(i);
          }
        })
    }
  })
}

export default tabs;