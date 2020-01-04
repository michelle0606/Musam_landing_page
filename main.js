const imgs = document.querySelectorAll('.img-wrapper>img')
const reason = document.getElementById('reason')
const ingredient = document.getElementById('ingredient')
const offer = document.getElementById('offer')

imgs.forEach(img => {
  img.addEventListener('mouseenter', e => {
    e.stopPropagation()
    e.preventDefault()
    const parentDiv = e.target.parentNode
    img.classList.add('visible')
    parentDiv.classList.remove('transition', 'zoomOut')
    parentDiv.classList.add('transition', 'animated', 'zoomIn')
  })

  img.addEventListener('mouseleave', e => {
    e.stopPropagation()
    e.preventDefault()
    const parentDiv = e.target.parentNode
    parentDiv.classList.add('transition', 'zoomOut')
    parentDiv.classList.remove('transition', 'zoomIn')
  })
  img.addEventListener('touchstart', e => {
    e.stopPropagation()
    e.preventDefault()
    const parentDiv = e.target.parentNode
    img.classList.add('visible')
    parentDiv.classList.remove('transition', 'zoomOut')
    parentDiv.classList.add('transition', 'animated', 'zoomIn')
  })

  img.addEventListener('touchend', e => {
    e.stopPropagation()
    e.preventDefault()
    const parentDiv = e.target.parentNode
    parentDiv.classList.add('transition', 'zoomOut')
    parentDiv.classList.remove('transition', 'zoomIn')
  })
})

document.addEventListener('scroll', () => {
  let height = window.scrollY

  if (height > 250) {
    reason.classList.replace('hidden', 'fadeInLeft')
  }

  if (height > 400) {
    ingredient.classList.replace('hidden', 'fadeInRight')
  }

  if (height > 550) {
    offer.classList.replace('hidden', 'fadeInLeft')
  }
})
