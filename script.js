let menu = document.querySelector('.menu-btn');
let menuContainer = document.querySelector('.menu-container');



menu.addEventListener('click', function(){
    menuContainer.classList.toggle('ativarMenu')
    if(menuContainer.classList.contains('ativarMenu')){
        menuContainer.style.cssText = "right: 0rem; "
        menu.style.cssText = "color: var(--color-5)";      
    }else {
        menuContainer.style.cssText = "right: -25rem; "
        menu.style.cssText = "var(--color-5)";
    }
});