gsap.registerPlugin(
    ScrollTrigger
);
const heroTL = gsap.timeline();

heroTL

    .from(
        ".reveal-top",
        {
            y: -50,
            opacity: 0,
            duration: 1
        }
    )

    .from(
        ".reveal-title",
        {
            y: 80,
            opacity: 0,
            duration: 1.2
        },
        "-=.6"
    )

    .from(
        ".reveal-bottom",
        {
            y: 50,
            opacity: 0,
            duration: 1
        },
        "-=.8"
    );
gsap.utils.toArray(
    ".stat-item"
).forEach(card => {

    gsap.from(
        card,
        {
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },

            y: 80,
            opacity: 0,
            duration: 1
        }
    );

});
const counters =
    document.querySelectorAll(
        ".counter"
    );

counters.forEach(counter => {

    ScrollTrigger.create({

        trigger: counter,

        start: "top 85%",

        once: true,

        onEnter: () => {

            const target =
                +counter.dataset.target;

            let current = 0;

            const increment =
                target / 100;

            const update = () => {

                current += increment;

                if (current < target) {

                    counter.innerText =
                        Math.floor(current);

                    requestAnimationFrame(
                        update
                    );

                } else {

                    counter.innerText =
                        target.toLocaleString();

                }

            };

            update();

        }

    });

});
gsap.to(
    ".hero-video",
    {
        yPercent: 20,

        ease: "none",

        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    }
);
gsap.utils.toArray(".bento-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },

        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"

    });

});
gsap.from(".research-image", {

    scrollTrigger: {
        trigger: ".research-section",
        start: "top 75%"
    },

    x: -100,
    opacity: 0,
    duration: 1.2

});

gsap.from(".research-content", {

    scrollTrigger: {
        trigger: ".research-section",
        start: "top 75%"
    },

    x: 100,
    opacity: 0,
    duration: 1.2

});

gsap.from(".campus-card", {

    scrollTrigger: {

        trigger: ".campus-tour",

        start: "top 75%"
    },

    opacity: 0,

    y: 100,

    stagger: .15,

    duration: 1.2

});
gsap.from(".global-card", {

    scrollTrigger: {
        trigger: ".global-section",
        start: "top 75%"
    },

    opacity: 0,

    y: 100,

    stagger: 0.2,

    duration: 1.2

});
gsap.from(".life-card", {

    scrollTrigger: {
        trigger: ".life-grid",
        start: "top 80%"
    },

    opacity: 0,

    y: 80,

    stagger: 0.15,

    duration: 1.2

});
gsap.from(".timeline-item", {

    scrollTrigger: {
        trigger: ".journey-section",
        start: "top 70%"
    },

    opacity: 0,

    x: -100,

    stagger: 0.3,

    duration: 1.2

});
gsap.utils.toArray(".research-row").forEach(section => {

    gsap.from(section, {

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        },

        opacity: 0,

        y: 80,

        duration: 1.3

    });

});
gsap.from(".flow-item", {

    scrollTrigger: {

        trigger: ".curriculum-section",

        start: "top 70%"

    },

    opacity: 0,

    scale: .8,

    stagger: .2,

    duration: 1

});
gsap.from(".hub", {

    scale: 0,

    duration: 1,

    scrollTrigger: {
        trigger: ".innovation-section",
        start: "top 75%"
    }

});

gsap.from(".cta-content > *", {

    scrollTrigger: {
        trigger: ".admissions-cta",
        start: "top 75%"
    },

    opacity: 0,

    y: 60,

    duration: 1,

    stagger: 0.2,

    ease: "power3.out"

});