window.onload = function () {
    const menu_btn = document.querySelector('.header__hamburger-container');
    const mobile_menu = document.querySelector('.headernav__headernav-mobile');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
};