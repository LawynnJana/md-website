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

    // $('body').on('mouseover', function(e){
    //   if($(window).width() > 480){
    //       $('#intro-text').slideDown("slow");
    //   }
    //   if($(window).width() <= 480){
    //       $('#intro-text').slideDown("fast");
    //   }
    //
    // });

    if($(window).width() > 0){

      //set timer to 5 seconds, after that, load the magic animation
        setTimeout(function(){
          	$('.p1').addClass('magictime-p tinDownIn-mod show');
        }, 100);
        setTimeout(function(){
          	$('.p2').addClass('magictime-p tinDownIn-mod show');
        }, 500);
        setTimeout(function(){
          	$('.p3').addClass('magictime-p spaceInDown show');
        }, 1300);
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
