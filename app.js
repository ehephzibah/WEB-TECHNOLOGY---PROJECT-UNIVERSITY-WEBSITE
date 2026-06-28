document
    .querySelectorAll(
        ".bento-card"
    )
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;

                card.style.transform =
                    `
translate(
${x * 0.03}px,
${y * 0.03}px
)
`;

            });

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translate(0,0)";

            });

    });
window.addEventListener("load", () => {

    if (document.getElementById("loader")) {

        gsap.to("#loader", {

            opacity: 0,

            duration: 0.8,

            onComplete: () => {
                document.getElementById("loader").remove();
            }

        });

    }

});
window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    document.querySelector(".progress-bar")
        .style.width = progress + "%";

});
