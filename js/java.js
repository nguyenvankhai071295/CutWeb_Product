$(document).ready(function () { 
  //  scroll top start
  $("body").scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.tele-top').fadeIn();
    } else {
      $('.tele-top').fadeOut();
    }
  });
  var duration_ms = 800;
  $('.tele-top').click(function () {
    var last_scroll = $("body").scrollTop();
    $('html, body').animate({
      scrollTop: 0
    }, duration_ms)
  });
  // scroll top end
  //event click hide-show start
  $("body").on('click', '.event--click',function(e){
    $(".event--general").addClass("hide");
    $(this).next().toggleClass("hide");
    $(this).find(".__shadow").toggleClass("hide");
    $(".close").addClass("hide");
    e.stopPropagation();
  })
  $(".event--general").click(function(e){
    e.stopPropagation();
  })
  $(document).click(function(){
    $(".event--general").addClass("hide");
  });
  $(".navbar--icon").click(function(){
    $(".navbar__between").toggleClass("hide");
      $(".__after").toggleClass("hide");
      $(".__general--box").toggleClass("mr-100");
  })
  // close top start
  $(".fa-times-circle").click(function () {
    $(".advertise").hide();
  })
  // close top end
  $('.autoplay').each(function () {
    $(this).slick($(this).data())
  }); 

 
//handle element when screen scroll open//
$(window).resize(function () {
  if (window.matchMedia('(min-width: 992px)').matches) {
    $(".title--right").removeClass("event--general");
    $(".__general--min992").removeClass("hide");
    $(".__eventclick--min992").removeClass("event--click");
    $("body").scroll(function () {
      $('.header__top').removeClass("hide");
    });
  }
  if (window.matchMedia('(max-width: 991px)').matches) {
    $(".title--right").addClass("event--general");
    $(".__general--min992").addClass("hide");
    $(".__eventclick--min992").addClass("event--click");
    $(".toggle--search").removeClass("hide");
    
    $("body").scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('.header__top').addClass("hide");
      } else {
        $('.header__top').removeClass("hide");
      }
    });
  }
})
//handle element when screen scroll close//

//add class console-li open//
  function add__clsli(data) {
    $(data).find(".console-ul li").on({
      click: function () {
        $(data).find(".console-ul .console-li").removeClass();
        $(this).addClass("console-li");
        $(data).find("._tab1").removeClass("addcls--block");
        $(data).find("._tab1").eq($(this).index()).addClass("addcls--block")
      }
    })
  }
  add__clsli(".product__consoles");
  add__clsli(".tv-audio");
//add class console-li close//

//setup window load open//
  function myLoad() {
    AOS.init({
      duration: 1000,
    });
      $('.tele-top').fadeOut();
  if ($('.box--slider').find('div').hasClass('slick-slider')) {
      $('.box--slider').css('opacity', '1');
  }
  //handle element when screen change open//
  if (window.matchMedia('(min-width: 992px)').matches) {
    $(".title--right").remove("event--general");
    $(".__general--min992").removeClass("hide");
    $(".__eventclick--min992").removeClass("event--click");
    $("body").scroll(function () {
      $('.header__top').removeClass("hide");
    });
  }
  if (window.matchMedia('(max-width: 991px)').matches) {
    $(".title--right").addClass("event--general");
    $(".__general--min992").addClass("hide");
    $(".toggle--search").removeClass("hide");
    $(".__eventclick--min992").addClass("event--click");
    $("body").scroll(function () {
      if ($(this).scrollTop() >1) {
        $('.header__top').addClass("hide");
      } else {
        $('.header__top').removeClass("hide");
      }
    });
  }
//handle element when screen change close//
  }
  window.addEventListener('load', myLoad);
//setup window load close//
});
