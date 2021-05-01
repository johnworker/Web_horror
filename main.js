// GSAP
gsap.to(".fly", {
    scrollTrigger: {
        tigger: ".fly",
        toggleActions: "play reset none play",
        start: "35% 50%",
        end: "45% 20%",
        scrub: 1,
        markers: true
    },
    x: -350,
    duration: 3
});