// eslint-disable-next-line no-undef
jQuery( document ).ready(function( $ ) {


	// "use strict";


    
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                autoplay: true,
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplaySpeed:2000,
                speed:600,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });
        }
        if ($('.owl-partners').length) {
            $('.owl-partners').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 4,
                        margin: 30
                    }
                }
            });
        }

        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:7000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            fade: true,
            infinite: true,
            cssEase:'ease-in-out',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                // eslint-disable-next-line no-undef
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

    //     $(window).on("scroll",function(){

    //       if(visible($('.count-digit')))
    //         {
    //           if($('.count-digit').hasClass('counter-loaded')) return;
    //           $('.count-digit').addClass('counter-loaded');
              
    //     $('.count-digit').each(function () {
    //       var $this = $(this);
    //       // eslint-disable-next-line no-undef
    //       jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    //         duration: 3000,
    //         easing: 'swing',
    //         step: function () {
    //           $this.text(Math.ceil(this.Counter));
    //         }
    //       });
    //     });
    //     }
    // })
 
});
