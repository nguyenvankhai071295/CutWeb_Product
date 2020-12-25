$(document).ready(function () { 
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
    $('html, body').animate({
      scrollTop: 0
    }, duration_ms)
  });
  // scroll top end
  //event click hiden-show start
  $("body").on('click', '.event--click',function(){
    $(this).next().toggleClass("hiden");
    $(this).find(".__shadow").toggleClass("hiden");
    $(".close").addClass("hiden");
  })
  $(".navbar--icon").click(function(){
    $(".navbar__between").toggleClass("hiden");
    $(".__after").toggleClass("hiden");
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
    $(".__general--min992").removeClass("hiden");
    $(".__eventclick--min992").removeClass("event--click");
    $(window).scroll(function () {
      if ($(this).scrollTop() > -1) {
        $('.header__top').removeClass("hiden");
      }
    });
  }
  if (window.matchMedia('(max-width: 991px)').matches) {
    $(".__general--min992").addClass("hiden");
    $(".__eventclick--min992").addClass("event--click");
    $(".toggle--search").removeClass("hiden");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.header__top').addClass("hiden");
      } else {
        $('.header__top').removeClass("hiden");
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
  if ($('.box--slider').find('div').hasClass('slick-slider')) {
      $('.box--slider').css('opacity', '1');
  }
  //handle element when screen change open//
  if (window.matchMedia('(min-width: 992px)').matches) {
    $(".__general--min992").removeClass("hiden");
    $(".__eventclick--min992").removeClass("event--click");
    AOS.init({
      duration: 1000,
    });
  }
  if (window.matchMedia('(max-width: 991px)').matches) {
    $(".__general--min992").addClass("hiden");
    $(".toggle--search").removeClass("hiden");
    $(".__eventclick--min992").addClass("event--click");
  }
//handle element when screen change close//
  }
  window.addEventListener('load', myLoad);
//setup window load close//
});
