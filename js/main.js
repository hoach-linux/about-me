// Меню бургера
const BURGER = document.querySelector('.burger')
if (BURGER) {
    const menuBar = document.querySelector('.menu-bar')
    BURGER.addEventListener('click', function () {
        menuBar.classList.toggle('active')
    })
}