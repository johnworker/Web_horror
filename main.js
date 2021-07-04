// youtube
$(document).ready(function() {
  $('[data-youtube]').youtube_background();
});
// door
$(document).ready(function() {
  $(".enter").click(function() {
     unlock($(".enter"));
  });
});

function open(left, right, button) {
  TweenLite.to(left, 1.5, { width: 0 });
  TweenLite.to(right, 1.5, { width: 0 });
  TweenLite.to(button, 1.5, { "margin-left" : "-60px" , onComplete: function(){
     // Remove doors and button
     left.parent().remove();
     button.remove();
  }});
}

function unlock(el){
  TweenLite.to(el, 0.5, { transform: "rotate(90deg)", onComplete: function(){
     open($(".door .left"), $(".door .right"), el);
  }})
}
// 選單效果
$(".menu-btn").click(function () {
  $(".menu-wrap").toggleClass("active");
  $(this).toggleClass("active");
});
// 下拉選單
$(function () {

  // Dropdown toggle
  $('.dropdown-toggle').click(function () {
    $(this).next('.dropdown').toggle();
  });

  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
      $('.dropdown').hide();
    }
  });

});

// 下拉選單2
$(function () {

  // Dropdown toggle
  $('.dropdown_togglebt').click(function () {
    $(this).next('.dropdownbt').toggle();
  });

  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.dropdown_togglebt') && !$(target).parents().is('.dropdown_togglebt')) {
      $('.dropdownbt').hide();
    }
  });

});

// 置頂按鈕
 //滑動至指定位置
 $('.menu a').click(function () {
  // E.preventDefault();是為了取消a的預設值
  var btn = $(this).attr('href');
  var pos = $(btn).offset();/* pos自己命名的名稱 */
  $('html,body').animate({ scrollTop: pos.top }, 1000);
});

  //捲動至top0的位置
  $("#gotop").click(function () {
      $("html,body").animate({
          scrollTop: 0
      }, 1000);
  });
  //指定捲軸位置淡出淡入
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('#gotop').stop().fadeTo('fast', 1);
      } else {
          $('#gotop').stop().fadeOut('fast');
      }
  });

//輪播調整  
// owl-carousel
$('.owl-carousel').owlCarousel({
  stagePadding: 100,
  loop: true,
  margin: 400,
  nav: false,
  items: 1,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});


// 喪屍區輪播
// $(".zombie_card").owlCarousel({
//   stagePadding: 10,
//   loop: true,
//   margin: 10,
//   dots: false,
//   navigator: false,
//   nav: false,
//   items: 1,
//   autoplay: false,
//   autoplaySpeed: 2000,
//   // 響應式 RWD
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 1
//     },
//     1000: {
//       items: 1
//     }
//   }
// });
// GSAP
// Ghost
// gsap.to(".fly", {
//   scrollTrigger: {
//     tigger: ".fly",
//     toggleActions: "restart none resume none",
//     start: "18% 50%",
//     end: "25% 20%",
//     scrub: 1,
//     markers: true
//   },

//   x: 1225,
//   y: 10,
//   duration: 3
// }

// );

// Ghost_hang
gsap.to(".hang", {
  scrollTrigger: {
    tigger: ".hang",
    toggleActions: "restart none resume none",
    start: "18% 50%",
    end: "25% 20%",
    scrub: 1,
    // markers: true
  },

  x: 1225,
  y: 10,
  duration: 3
}

);

// zombie walk
gsap.to(".zombie_go", {
  scrollTrigger: {
    tigger: ".zombie_go",
    toggleActions: "restart none resume none",
    start: "16% 50%",
    end: "25% 20%",
    scrub: 1,
    // markers: true
  },

  x: -800,
  duration: 3
}

);

// zombie jump
gsap.to(".zombie_gojump", {
  scrollTrigger: {
    tigger: ".zombie_gojump",
    toggleActions: "restart none resume none",
    start: "16% 50%",
    end: "25% 20%",
    scrub: 1,
    // markers: true
  },

  x: 800,
  duration: 3
}

);
