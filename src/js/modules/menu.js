const toggleSubMenu = (anchor, toggleBody) => {

      const pagesAnchor = document.querySelector(anchor),
            pagesBody = document.querySelector(toggleBody);

     const togglePagesBody = () => pagesBody.classList.toggle('active');
      pagesAnchor.addEventListener('click', togglePagesBody);

}

export default toggleSubMenu;