gsap.from(".program-card", {

    scrollTrigger: {
        trigger: ".programs-grid",
        start: "top 80%"
    },

    y: 100,

    opacity: 0,

    duration: 1.2,

    stagger: .2

});