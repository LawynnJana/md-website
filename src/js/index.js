$(document).ready(function () {
    $("a").click(function (e) {
        var href = $(e.currentTarget).attr("href");
        if (href[0] === "#") {
            var target = $(href);
            //e.preventDefault();
            var offset = window.innerWidth <= 992 ? $(".navbar-brand").height() : 0;
            //var offset = 0;
            console.log("Scroll top = " + (target.offset().top - offset));
            $("html, body").stop().animate({
                scrollTop: target.offset().top - offset
            }, 500, "swing");
        }
    });

    if($(window).width() > 0){

        $('#about .jumbotron h1').animate({ opacity: 1 });

        setTimeout(function(){
            $('.p1').addClass('magictime-slower tinRightInMain show');
        }, 100);
        setTimeout(function(){
            $('.p2').addClass('magictime-slower tinLeftInMain show');
        }, 600);
        setTimeout(function(){
            $('.p3').addClass('magictime-slower tinRightInMain show');
        }, 1300);
        setTimeout(function(){
            $('#about a span').removeClass('hide');
        }, 3500);
          // $('.intro').animate(function(){
          //   $(this).addClass('slideLeft');
          // });
    }
    if($(window).width() <= 480){
        $('#intro-text').slideDown("fast");
    }



    $('.box').mouseenter(function(){
      if ($(window).width() > 480){
        $(this).find('img').fadeTo(200, 0);
        $(this).find('.description').fadeIn(1000);
      }
    }).mouseleave(function(){
      if ($(window).width() > 480){
        $(this).find('.description').fadeOut(200, 0);
        $(this).find('img').fadeTo(1000, 1);
      }
      if ($(window).width() <= 480){
        $(this).find('.description').fadeOut(200, 0);
        $(this).find('img').fadeTo(1000, 1);
      }

    });

    $('.box').on('click', function(){
      if($(window).width()<=480){
        console.log("Gang");
        $(this).find('img').fadeTo(200, 0);
        $(this).find('.description').fadeIn(1000);
      }
    })



})
