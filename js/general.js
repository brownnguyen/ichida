/**
 * var
 */
var _menuIsOpen = -1,_header = document.querySelector('.header');

$(window).on('load resize scroll', function() {

    let _scroll = $(window).scrollTop();
    let _toTopButton = $('.to-top-button');
    let _wh = $(window).height();

    if(_scroll == 0 && _menuIsOpen ==-1){
        _menuIsOpen==-1?_header.classList.remove('active'):null
    }
    else{
        _menuIsOpen==1?null:_header.classList.add('active')
    }

    //--------to top button
    if (_scroll > 400) {
        _toTopButton.addClass('active');
        
    } else {
        _toTopButton.removeClass('active');
    }
    return false;
});


$('.hambuger-button').click(function(e) {
    e.preventDefault();
    _menuIsOpen *= -1;

    var _menu = document.querySelector('.header__menu');
   
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');

    _menu.classList.contains('active') ? _menu.classList.remove('active') : _menu.classList.add('active')
    // _header.classList.contains('active') ? _header.classList.remove('active') : _header.classList.add('active')
    
    if(_menuIsOpen==-1){
        if(e.pageY ==0){
            _header.classList.remove('active');
        }
    }
    else{
        _header.classList.add('active')
    }
});

$('.to-top-button').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0//$($.attr(this, 'href')).offset().top
    }, 'slow', 'linear');
});

$('.footer__decor').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0//$($.attr(this, 'href')).offset().top
    }, 'slow', 'linear');
});

$('.faq__row').on('click', function(){
    ($(this).is('.active'))?$(this).removeClass('active'):$(this).addClass('active');
});
