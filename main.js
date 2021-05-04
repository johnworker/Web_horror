// 選單效果
$(".menu-btn").click(function(){
    $(".menu-wrap").toggleClass("active");
    $(this).toggleClass("active");
});

// GSAP
// Ghost
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
