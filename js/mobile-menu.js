// const mobileMenu = document.querySelector('.mobile-menu');
// const menuBtnOpen = document.querySelector('.menu-btn-open');
// const menuBtnClose = document.querySelector('.menu-btn-close');

// const toggleMenu = () => mobileMenu.classList.toggle('is-open');

// menuBtnOpen.addEventListener('click', toggleMenu);
// menuBtnClose.addEventListener('click', toggleMenu);

// ----------
// if (modalBtnOpen && modalBtnClose && modal) {
//   modalBtnOpen.addEventListener('click', toggleModal);
//   modalBtnClose.addEventListener('click', toggleModal);
// }
// ----------

// =====================
const mobileMenu = document.querySelector('.mobile-menu');
// Находим ВСЕ кнопки открытия
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnsClose = document.querySelectorAll('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
// Перебираем массив кнопок и каждой вешаем слушатель
menuBtnsClose.forEach(btn => {
  btn.addEventListener('click', toggleMenu);
});
// =====================