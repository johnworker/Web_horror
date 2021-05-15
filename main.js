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
$(".zombie_card").owlCarousel({
  stagePadding: 10,
  loop: true,
  margin: 10,
  dots: false,
  navigator: false,
  nav: false,
  items: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  // 響應式 RWD
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
// GSAP
// Ghost_fly
gsap.to(".fly", {
  scrollTrigger: {
    tigger: ".fly",
    toggleActions: "restart none none none",
    start: "35% 50%",
    end: "45% 20%",
    // scrub: 1,
    // markers: true
  },

  x: -700,
  y: -100,
  duration: 3
}

);

// Ghost_hang
gsap.to(".hang", {
  scrollTrigger: {
    tigger: ".hang",
    toggleActions: "restart none resume none",
    start: "13% 50%",
    end: "25% 20%",
    scrub: 1,
    // markers: true
  },

  x: 1225,
  y: 10,
  duration: 3
}

);
