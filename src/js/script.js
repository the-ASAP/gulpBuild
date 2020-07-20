// удаляемпрелодер при загрузке страницы
const contentFadeInOnReady = () => {
    $('.preloader').fadeOut(150, ()=>{
        $('.preloader').remove();
    });
};

// Открытие модальных окон
const modalOpen = (trigger, modal) => {
    $(trigger).on('click', function () {
        // стопаем скролл у боди
        stopScroll('body');
        // показываем модалку
        $(modal).addClass('active');
    })
}
// Закрытие  модалок
const modalClose = (btn = '.modal__close', modal = '.modal') =>{
    $(btn).on('click', () => {
        $(this).closest(modal).removeClass('active')
        // возвращаем скролл для бади
        $('body').attr("style", '');
    });
}

// Закрытие модалок на  ESCAPE
const closeOnEscape = () =>{
    $(document).keydown((e) => {
        // 27 = escape
        if (e.keyCode === 27) {
            $('.modal').removeClass('active')
             // возвращаем скролл для бади
            $('body').attr("style", '');
            return false;
        }
    });
}
// Запрещаем скролл для бади 
const stopScroll = (item) => {
    let documentWidth = parseInt(document.documentElement.clientWidth),
        windowsWidth = parseInt(window.innerWidth),
        scrollbarWidth = windowsWidth - documentWidth;
    $(item).attr("style", 'overflow: hidden; padding-right: ' + scrollbarWidth + 'px');
}

// возвращаем скролл для бади
const freeScroll = (item) => {
    $(item).attr("style", '');
}

$().ready(() => {
    contentFadeInOnReady()
    modalClose();
});


