const body = document.querySelector('body');
const topBtn = document.querySelector('.top');

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

window.addEventListener('scroll', () => {
  console.log(window.scrollY);                                      
  if (window.scrollY > 100) {
    body.classList.add('scroll');
  } else {
    body.classList.remove('scroll');
  }
})