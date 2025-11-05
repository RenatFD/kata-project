const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.25,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const button = document.querySelector('.show-more__text');
const wrapperBrands = document.querySelector('.software-table');
const arrow = document.querySelector('.show-more__picture');


button.addEventListener('click', function () {
     wrapperBrands.classList.toggle('software-table-height');
     
     arrow.classList.toggle('show-more__picture-rotate');
     if (button.textContent === 'Показать все') {
        button.innerHTML = 'Скрыть'
     } else{
        button.innerHTML = 'Показать все'
     }
     if (window.innerWidth >= 1120) {
    wrapperBrands.classList.toggle('software-table-height-laptop');
}
    })

