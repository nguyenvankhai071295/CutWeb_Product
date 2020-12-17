$(document).ready(function(){
  //  scroll top start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('#goToTop').fadeIn();
    } else {
        $('#goToTop').fadeOut();
    }
  });
  var duration_ms = 800;
  $('#goToTop').click(function () {
    var last_scroll = $(window).scrollTop();
    $('html, body').animate({ scrollTop: 0 }, duration_ms)
  });
  // scroll top end
  //close top start
  $(".fa-times-circle").click(function(){
    $(".advertise").hide();
  })
  //close top end

  $('.autoplay').each(function () { 
    $(this).slick()
 });
  $(window).resize(function() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      $('.fa-align-justify').click(function(){
        $('.navbar__between').addClass('show');
      })
      $('.navbar__between .fa-w-11').click(function(){
        $('.navbar__between').removeClass('show');
      })
      $('.header__main--left').find('.fa-search').click(function(){
        $('.header__main--center').addClass('show');
        $('.header--bgshow').addClass('show');
      })
      $('.header--bgshow').click(function(){
        $('.header--bgshow').removeClass('show');
        $('.header__main--center').removeClass('show');
      })
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
          $('.header__top').addClass("hiden");
      } else {
          $('.header__top').removeClass("hiden");
      }
     });
  }
  if (window.matchMedia('(min-width: 992px)').matches) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > -1) {
        $('.header__top').removeClass("hiden");
    }
   });
}
})
  $('.featured_products--animation').each(function () { 
    $(this).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 556,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  $('.mostviewed__products--row').each(function () { 
    $(this).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
       
      ]
    });
  });
    $(".brand--logo").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2
          }
        },
      ]
    });
    $('.product_wrapper').each(function () { 
      $(this).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              padding:15
            }
          },
          {
            breakpoint: 556,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
  });
  function add__clsli(){
    $(".console-ul").find("li").on({
      click : function(){
        $(".console-ul").find(".console-li").removeClass();
        $(this).addClass("console-li");
        $(".product__consoles").find("._tab1").removeClass("addcls--block");
        $("._tab1").eq($(this).index()).addClass("addcls--block")
      }
    })
  }
  add__clsli();
  function Load(){
    if($('.box--slider').find('div').hasClass('slick-slider')){
      $('.box--slider').css('opacity','1');
    }
  }
  Load();
});

// white-space: nowrap