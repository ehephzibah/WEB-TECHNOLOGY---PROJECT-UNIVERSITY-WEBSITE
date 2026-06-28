
document.addEventListener("DOMContentLoaded", () => {

    const application = JSON.parse(
        localStorage.getItem("novatechApplication")
    );


    if (!application) {

        window.location.href = "admissions.html";
        return;

    }



    document.getElementById("applicationID").textContent =
        application.applicationID;

    document.getElementById("studentName").textContent =
        application.name;

    document.getElementById("programName").textContent =
        application.program;



    document.getElementById("downloadBtn")
        .addEventListener("click", () => {

            const { jsPDF } = window.jspdf;

            const doc = new jsPDF();

            let y = 20;



            doc.setFont("helvetica", "bold");
            doc.setFontSize(22);
            doc.text("NOVATECH INSTITUTE", 105, y, {
                align: "center"
            });

            y += 10;

            doc.setFontSize(16);
            doc.text("Admission Application Receipt", 105, y, {
                align: "center"
            });

            y += 12;

            doc.setDrawColor(37, 99, 235);
            doc.line(20, y, 190, y);

            y += 12;



            doc.setFontSize(12);

            doc.setFont("helvetica", "bold");
            doc.text("Application ID:", 20, y);

            doc.setFont("helvetica", "normal");
            doc.text(application.applicationID, 70, y);

            y += 10;

            doc.setFont("helvetica", "bold");
            doc.text("Submission Date:", 20, y);

            doc.setFont("helvetica", "normal");
            doc.text(
                new Date().toLocaleDateString(),
                70,
                y
            );

            y += 15;



            doc.setFont("helvetica", "bold");
            doc.setFontSize(15);
            doc.text("Personal Information", 20, y);

            y += 8;

            doc.setFontSize(11);
            doc.setFont("helvetica", "normal");

            const personal = [

                ["Full Name", application.name],

                ["Date of Birth", application.dob],

                ["Gender", application.gender],

                ["Nationality", application.nationality],

                ["Email", application.email],

                ["Phone", application.phone],

                ["Address", application.address]

            ];

            personal.forEach(item => {

                doc.setFont("helvetica", "bold");
                doc.text(item[0] + ":", 20, y);

                doc.setFont("helvetica", "normal");
                doc.text(String(item[1]), 70, y);

                y += 8;

            });

            y += 5;



            doc.setFont("helvetica", "bold");
            doc.setFontSize(15);

            doc.text("Academic Information", 20, y);

            y += 8;

            doc.setFontSize(11);

            const academic = [

                ["10th Percentage", application.tenth + "%"],

                ["12th Percentage", application.twelfth + "%"],

                ["Board", application.board],

                ["Passing Year", application.year],

                ["Program", application.program]

            ];

            academic.forEach(item => {

                doc.setFont("helvetica", "bold");
                doc.text(item[0] + ":", 20, y);

                doc.setFont("helvetica", "normal");
                doc.text(String(item[1]), 70, y);

                y += 8;

            });

            y += 5;



            doc.setFont("helvetica", "bold");
            doc.setFontSize(15);

            doc.text("Parent / Guardian", 20, y);

            y += 8;

            doc.setFontSize(11);

            const parent = [

                ["Father's Name", application.father],

                ["Mother's Name", application.mother],

                ["Parent Contact", application.parentPhone]

            ];

            parent.forEach(item => {

                doc.setFont("helvetica", "bold");
                doc.text(item[0] + ":", 20, y);

                doc.setFont("helvetica", "normal");
                doc.text(String(item[1]), 70, y);

                y += 8;

            });

            y += 15;



            doc.setDrawColor(37, 99, 235);
            doc.line(20, y, 190, y);

            y += 12;

            doc.setFont("helvetica", "italic");
            doc.setFontSize(10);

            doc.text(
                "This document confirms that your admission application has been received by NovaTech Institute.",
                20,
                y,
                { maxWidth: 170 }
            );

            y += 15;

            doc.text(
                "Thank you for applying. Our Admissions Office will contact you soon.",
                20,
                y
            );



            doc.save(
                `NovaTech_Application_${application.applicationID}.pdf`
            );

        });

});

