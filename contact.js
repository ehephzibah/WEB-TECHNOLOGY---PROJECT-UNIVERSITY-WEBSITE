document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const modal = document.getElementById("successModal");
    const closeBtn = document.getElementById("closeModal");


    const fields = form.querySelectorAll("input, textarea");

    fields.forEach(field => {

        const error = document.createElement("small");
        error.className = "error-message";

        field.parentNode.insertBefore(error, field.nextSibling);

    });




    function validateField(field) {

        const error =
            field.nextElementSibling;

        const value =
            field.value.trim();

        let message = "";

        if (field.hasAttribute("required") && value === "") {

            message = "This field is required.";

        }

        else if (field.type === "email") {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(value)) {

                message = "Please enter a valid email address.";

            }

        }

        else if (field.type === "tel") {

            const phonePattern =
                /^[6-9]\d{9}$/;

            if (!phonePattern.test(value)) {

                message = "Please enter a valid 10-digit mobile number.";

            }

        }

        if (message !== "") {

            field.classList.add("input-error");

            error.textContent = message;

            return false;

        }

        field.classList.remove("input-error");

        error.textContent = "";

        return true;

    }




    fields.forEach(field => {

        field.addEventListener("input", () => {

            validateField(field);

        });

    });



    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let valid = true;

        fields.forEach(field => {

            if (!validateField(field)) {

                valid = false;

            }

        });

        if (!valid) return;




        form.reset();

        modal.classList.add("active");

    });




    closeBtn.addEventListener("click", () => {

        modal.classList.remove("active");

    });


    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

        }

    });


    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            modal.classList.remove("active");

        }

    });

});