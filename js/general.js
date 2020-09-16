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

$('.js-office-model').click(function(e){
    e.preventDefault();

    $('.model').addClass('active');

    let _length = $('.js-office-model').length;
    let _scr = $(this).find('img').attr('data-model');
    let _name = $(this).find('img').attr('alt');
    let _state = $('.js-office-model').index(this) + 1;

    var _modelName = $('.model__name');
    var _modelState = $('.model__state');
    var _modelImg = $('.model__img');

    _modelName.text(_name);
    _modelState.text(_state +'/'+ _length);
    _modelImg.attr({
        'src': _scr 
    });


    // let _scr = $(this).find('img').attr('src');
    console.log(_scr, _name,_length,_state);
});

$('.model__close').click(function(){
    $('.model').removeClass('active');
});