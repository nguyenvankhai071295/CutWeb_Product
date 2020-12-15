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
      $(".header__main--center").css("display","none");
      $(".navbar__between").css("display","none");

      $(".header__main--left").find(".fa-search").click(function(){
        $(".header__main--center").css("display","flex");
        $(".container__allwindow").css("display","block");
      }
      )

      $(".container__allwindow").click(function(){
        $(".header__main--center").css("display","none");
        $(this).css("display","none");
        $(".navbar__between").css("display","none");
      })

      $(".header__main--left").find(".fa-align-justify").click(function(){
        $(".navbar__between").css("display","block");
        $(".container__allwindow").css("display","block");
      })

    }
    if (window.matchMedia('(min-width: 992px)').matches){
      $(".header__main--center").css("display","flex");
      $(".container__allwindow").css("display","none");
      $(".navbar__between").css("display","block");
      
    }
  
  });
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
});

// white-space: nowrap