
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("admissionForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let isValid = true;


        document.querySelectorAll(".error").forEach(error => {

            error.textContent = "";

        });


        const fields = [

            {
                id: "name",
                message: "Full name is required."
            },

            {
                id: "dob",
                message: "Date of birth is required."
            },

            {
                id: "gender",
                message: "Please select your gender."
            },

            {
                id: "nationality",
                message: "Nationality is required."
            },

            {
                id: "email",
                message: "Email address is required."
            },

            {
                id: "phone",
                message: "Mobile number is required."
            },

            {
                id: "address",
                message: "Address is required."
            },

            {
                id: "tenth",
                message: "Enter your 10th percentage."
            },

            {
                id: "twelfth",
                message: "Enter your 12th percentage."
            },

            {
                id: "board",
                message: "Board name is required."
            },

            {
                id: "year",
                message: "Passing year is required."
            },

            {
                id: "program",
                message: "Please select a program."
            },

            {
                id: "father",
                message: "Father's name is required."
            },

            {
                id: "mother",
                message: "Mother's name is required."
            },

            {
                id: "parentPhone",
                message: "Parent phone number is required."
            }

        ];

        fields.forEach(field => {

            const input = document.getElementById(field.id);

            const error = input.parentElement.querySelector(".error");

            if (input.value.trim() === "") {

                error.textContent = field.message;

                isValid = false;

            }

        });



        const email = document.getElementById("email");

        const emailError = email.parentElement.querySelector(".error");

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (email.value !== "" && !emailPattern.test(email.value)) {

            emailError.textContent = "Enter a valid email address.";

            isValid = false;

        }



        function validPhone(number) {

            return /^[6-9]\d{9}$/.test(number);

        }

        const phone = document.getElementById("phone");

        const phoneError = phone.parentElement.querySelector(".error");

        if (phone.value !== "" && !validPhone(phone.value)) {

            phoneError.textContent = "Enter a valid 10-digit mobile number.";

            isValid = false;

        }

        const parentPhone = document.getElementById("parentPhone");

        const parentError = parentPhone.parentElement.querySelector(".error");

        if (parentPhone.value !== "" && !validPhone(parentPhone.value)) {

            parentError.textContent = "Enter a valid parent mobile number.";

            isValid = false;

        }


        ["tenth", "twelfth"].forEach(id => {

            const input = document.getElementById(id);

            const error = input.parentElement.querySelector(".error");

            const value = Number(input.value);

            if (value < 0 || value > 100) {

                error.textContent = "Percentage should be between 0 and 100.";

                isValid = false;

            }

        });



        const agree = document.getElementById("agree");

        const agreeError = document.getElementById("agreeError");

        if (!agree.checked) {

            agreeError.textContent = "Please accept the declaration.";

            isValid = false;

        }

        if (!isValid) return;


        const applicationID =

            "NT2026-" +

            Math.floor(

                100000 + Math.random() * 900000

            );



        const application = {

            applicationID,

            name: document.getElementById("name").value,

            dob: document.getElementById("dob").value,

            gender: document.getElementById("gender").value,

            nationality: document.getElementById("nationality").value,

            email: email.value,

            phone: phone.value,

            address: document.getElementById("address").value,

            tenth: document.getElementById("tenth").value,

            twelfth: document.getElementById("twelfth").value,

            board: document.getElementById("board").value,

            year: document.getElementById("year").value,

            program: document.getElementById("program").value,

            father: document.getElementById("father").value,

            mother: document.getElementById("mother").value,

            parentPhone: parentPhone.value

        };

        localStorage.setItem(

            "novatechApplication",

            JSON.stringify(application)

        );

        window.location.href = "submit.html";

    });

});

