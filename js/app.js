const tabs = document.querySelectorAll(".guide-tabs li");
const cards = document.querySelectorAll(".guide-content li");

function showGuide(index) {
  // 1. 전부 on 빼기
  tabs.forEach((tab) => tab.classList.remove("on"));
  cards.forEach((card) => card.classList.remove("on"));
  // 2. 선택한 번호에만 on 붙이기
  tabs[index].classList.add("on");
  cards[index].classList.add("on");
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showGuide(index));
});
cards.forEach((card, index) => {
  card.addEventListener("click", () => showGuide(index));
});

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

const mNavBtn = document.querySelector(".mob-nav-btn");
const navBtns = document.querySelectorAll('nav ul li a');

mNavBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('m-nav-open');
})
/*

navBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()

    const id = btn.getAttribute('herf');
    const target = document.querySelector(id);
    const header = document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: target.offsetTop - headerH,
      behavior: 'smooth'
    })
    // body.classList.remove('m-nav-open');
  })
})

*/