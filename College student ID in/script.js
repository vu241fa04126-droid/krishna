// =====================================
// GET ELEMENTS
// =====================================

const idCard =
    document.getElementById("idCard");

const flipBtn =
    document.getElementById("flipBtn");

const sideBadge =
    document.getElementById("sideBadge");

const photoInput =
    document.getElementById("photo");

const uploadedImage =
    document.getElementById("uploadedImage");

const cardPhoto =
    document.getElementById("cardPhoto");


// =====================================
// FORM ELEMENTS
// =====================================

const nameInput =
    document.getElementById("name");

const studentIdInput =
    document.getElementById("studentId");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const dobInput =
    document.getElementById("dob");

const genderInput =
    document.getElementById("gender");

const departmentInput =
    document.getElementById("department");

const courseInput =
    document.getElementById("course");

const yearInput =
    document.getElementById("year");

const bloodInput =
    document.getElementById("blood");

const collegeInput =
    document.getElementById("college");

const addressInput =
    document.getElementById("address");

const academicInput =
    document.getElementById("academic");

const emergencyInput =
    document.getElementById("emergency");


// =====================================
// FLIP CARD
// =====================================

function flipCard() {

    idCard.classList.toggle("flipped");

    if (
        idCard.classList.contains("flipped")
    ) {

        sideBadge.textContent =
            "BACK";

        flipBtn.textContent =
            "🔄 Show Front";

    } else {

        sideBadge.textContent =
            "FRONT";

        flipBtn.textContent =
            "🔄 Flip ID";
    }
}


flipBtn.addEventListener(
    "click",
    flipCard
);


// =====================================
// CLICK CARD TO FLIP
// =====================================

idCard.addEventListener(
    "click",
    function(event) {

        if (
            event.target.closest("button")
        ) {
            return;
        }

        flipCard();
    }
);


// =====================================
// UPDATE CARD
// =====================================

function updateCard() {


    // ---------- FRONT ----------

    document.getElementById(
        "cardName"
    ).textContent =
        nameInput.value ||
        "Student Name";


    document.getElementById(
        "cardStudentId"
    ).textContent =
        studentIdInput.value ||
        "STU000000";


    document.getElementById(
        "cardEmail"
    ).textContent =
        emailInput.value ||
        "email@example.com";


    document.getElementById(
        "cardPhone"
    ).textContent =
        phoneInput.value ||
        "+91 0000000000";


    document.getElementById(
        "cardDepartment"
    ).textContent =
        departmentInput.value ||
        "Department";


    document.getElementById(
        "cardCourse"
    ).textContent =
        courseInput.value ||
        "Course";


    document.getElementById(
        "cardYear"
    ).textContent =
        yearInput.value ||
        "Year";


    document.getElementById(
        "cardBlood"
    ).textContent =
        bloodInput.value ||
        "A+";


    document.getElementById(
        "cardCollege"
    ).textContent =
        collegeInput.value ||
        "College Name";


    document.getElementById(
        "cardAcademic"
    ).textContent =
        academicInput.value ||
        "2026 - 2027";


    // ---------- BACK ----------

    document.getElementById(
        "backCollege"
    ).textContent =
        collegeInput.value ||
        "College Name";


    document.getElementById(
        "backName"
    ).textContent =
        nameInput.value ||
        "Student Name";


    document.getElementById(
        "backStudentId"
    ).textContent =
        studentIdInput.value ||
        "STU000000";


    document.getElementById(
        "cardGender"
    ).textContent =
        genderInput.value ||
        "Male";


    document.getElementById(
        "backBlood"
    ).textContent =
        bloodInput.value ||
        "A+";


    document.getElementById(
        "cardEmergency"
    ).textContent =
        emergencyInput.value ||
        "Not Provided";


    document.getElementById(
        "backEmergency"
    ).textContent =
        emergencyInput.value ||
        "Not Provided";


    document.getElementById(
        "cardAddress"
    ).textContent =
        addressInput.value ||
        "College Address";


    // ---------- DATE ----------

    if (dobInput.value) {

        const date =
            new Date(dobInput.value);

        const day =
            String(
                date.getDate()
            ).padStart(2, "0");

        const month =
            String(
                date.getMonth() + 1
            ).padStart(2, "0");

        const year =
            date.getFullYear();

        document.getElementById(
            "cardDob"
        ).textContent =
            `${day}/${month}/${year}`;

    } else {

        document.getElementById(
            "cardDob"
        ).textContent =
            "Not Provided";
    }
}


// =====================================
// LIVE UPDATE
// =====================================

const inputs =
    document.querySelectorAll(
        "#cardForm input, #cardForm select, #cardForm textarea"
    );


inputs.forEach(
    function(input) {

        input.addEventListener(
            "input",
            updateCard
        );

        input.addEventListener(
            "change",
            updateCard
        );

    }
);


// =====================================
// PHOTO UPLOAD
// =====================================

photoInput.addEventListener(
    "change",
    function(event) {

        const file =
            event.target.files[0];

        if (!file) {
            return;
        }

        if (
            !file.type.startsWith("image/")
        ) {

            alert(
                "Please select an image."
            );

            return;
        }


        const reader =
            new FileReader();


        reader.onload =
            function(e) {

                uploadedImage.src =
                    e.target.result;

                cardPhoto.src =
                    e.target.result;

                cardPhoto.style.animation =
                    "photoAnimation .7s ease";
            };


        reader.readAsDataURL(file);
    }
);


// =====================================
// RESET
// =====================================

document.getElementById(
    "resetBtn"
).addEventListener(
    "click",
    function() {


        nameInput.value =
            "Hemanth Kumar";

        studentIdInput.value =
            "STU2026001";

        emailInput.value =
            "hemanth@example.com";

        phoneInput.value =
            "+91 9876543210";

        dobInput.value =
            "2004-05-20";

        genderInput.value =
            "Male";

        departmentInput.value =
            "Computer Science";

        courseInput.value =
            "B.Tech Computer Science";

        yearInput.value =
            "1st Year - 1st Semester";

        bloodInput.value =
            "A+";

        collegeInput.value =
            "ABC Institute of Technology";

        addressInput.value =
            "Guntur, Andhra Pradesh, India";

        academicInput.value =
            "2026 - 2027";

        emergencyInput.value =
            "+91 9000000000";


        uploadedImage.src =
            "https://via.placeholder.com/150";

        cardPhoto.src =
            "https://via.placeholder.com/150";

        photoInput.value =
            "";


        idCard.classList.remove(
            "flipped"
        );

        sideBadge.textContent =
            "FRONT";

        flipBtn.textContent =
            "🔄 Flip ID";


        updateCard();
    }
);


// =====================================
// PRINT
// =====================================

document.getElementById(
    "printBtn"
).addEventListener(
    "click",
    function() {

        window.print();

    }
);


// =====================================
// INITIAL UPDATE
// =====================================

updateCard();