const popup = () => {

  // SHOW POPUP VIDEO
  const videoBtn = document.querySelectorAll('.testimonial__item-btn'),
        popupBody = document.querySelectorAll('.testimonial__video'),
        html = document.querySelector('html');

  videoBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      const target = e.target,
            parentEl = target.parentNode.parentNode.parentNode,
            videoPopupActive = parentEl.querySelector('.testimonial__video');
      videoPopupActive.classList.add('active')
      html.style.overflowY = 'hidden';
    })
  })

  // CLOSE POPUP ON CLICK OUTSIDE
  popupBody.forEach(item => {
    item.addEventListener('click', (e) => {
      if(e.target === item) {
        popupBody.forEach(item => {
          item.classList.remove('active')
          html.style.overflowY = 'visible';
        })
      }
    })
  })

}

export default popup;