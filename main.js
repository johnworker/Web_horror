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

    x: -630,
    y: 0,
    duration: 3
    }

);
