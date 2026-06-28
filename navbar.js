const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    });


const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

    const link = dropdown.querySelector("a");

    link.addEventListener("click", function (e) {

        if (window.innerWidth <= 992) {

            e.preventDefault();

            dropdown.classList.toggle("active");

        }

    });

});