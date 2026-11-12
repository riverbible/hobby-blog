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