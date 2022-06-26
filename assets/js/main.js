$(document).ready(function(){

	if($('body').hasClass( "home" )){
		new WOW().init();
	}


	//-------------------------------------------------
    // Menu Mobile
    //-------------------------------------------------
    $.fn.dnmenu = function( options ) {

        let thiz = this
        let menu = $(this).attr('data-id')
        let menu_id = '#'+menu

        // Default options
        var settings = $.extend({
            name: 'Menu'
        }, options );

        // get ScrollBar Width
        function getScrollBarWidth () {
            var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
                widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
            $outer.remove();
            return 100 - widthWithScroll;
        };
        let ScrollBarWidth = getScrollBarWidth() + 'px';

        // Create wrap
        // Button click
        thiz.click(function(e){

            e.preventDefault()
            console.log(this)
            if($(this).hasClass('active')){
                $(this).removeClass('active')
                $('body').removeClass('modal-open')
                $(menu_id).removeClass('active')

            } else {
                $(this).addClass('active')
                $('body').addClass('modal-open')
                $(menu_id).addClass('active')

            }
        });

        // Custom close
        $('.js-menu__close').click(function(){
            $('body').removeClass('modal-open')
            $(thiz).removeClass('active')
            $(menu_id).removeClass('active')
        })

        // Menu
        var el= $(menu_id).find(".nav-mobile--ul");
        el.find(".menu-item-has-children>a").after('<button class="nav-mobile__btn"><i class="icon-arrow-down"></i></button>'),

        el.find(".nav-mobile__btn").on("click",function(e){
            e.stopPropagation(),
            $(this).parent().find('.sub-menu').first().is(":visible")?$(this).parent().removeClass("sub-active"):
            $(this).parent().addClass("sub-active"),
            $(this).parent().find('.sub-menu').first().slideToggle()
        })

        $('.nav-mobile, .navbar-toggler').mousedown(function(e){ e.stopPropagation(); });
        $(document).mousedown(function(e){ $('.nav-mobile').removeClass('active'); $(thiz).removeClass('active'); $("body").removeClass('modal-open') });

        // Apply options
        return;
    };

    $('.navbar-toggler').dnmenu()
    /*=====  End of Menu  ======*/



});