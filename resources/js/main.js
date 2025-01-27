import axios from "axios";

// Humburger
let humburgerDashboard = document.getElementById("humburger-dashboard");
let sidebar = document.getElementById("sidebar");

if (humburgerDashboard) {
    humburgerDashboard.addEventListener("click", () => {
        humburgerDashboard.classList.toggle("humburger-active");
        sidebar.classList.toggle("-translate-x-96");
        // setTimeout(() => {
        //     sidebar.classList.toggle("absolute");
        // }, 250);
    });
}

const openSidebar = document.getElementById("openSidebar");

if (openSidebar) {
    openSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-96");
    });
}

// Sidebar
let closeSidebar = document.getElementById("close");

if (closeSidebar) {
    closeSidebar.addEventListener("click", () => {
        humburgerDashboard.classList.toggle("humburger-active");
        sidebar.classList.toggle("-translate-x-96");
        console.log("close");
    });
}

// Modal
let modalCreate = document.getElementById("modalCreate");
let addLesson = document.getElementById("addLesson");

if (modalCreate) {
    modalCreate.addEventListener("click", (event) => {
        if (event.target == modalCreate) {
            modalCreate.classList.add("hidden");
            modalCreate.classList.remove("flex");
        }
    });
}

if (addLesson) {
    addLesson.addEventListener("click", () => {
        modalCreate.classList.remove("hidden");
        modalCreate.classList.add("flex");
    });
}

let modalEdit = document.getElementById("modalEdit");

if (modalEdit) {
    modalEdit.addEventListener("click", (event) => {
        if (event.target == modalEdit) {
            modalEdit.classList.add("hidden");
            modalEdit.classList.remove("flex");
        }
    });
}

// Manipulasi Form Lesson
let editLesson = document.querySelectorAll("#editLesson");
let inputLesson = document.getElementById("inputLesson");
let deleteForm = document.getElementById("deleteForm");
let editForm = document.getElementById("editForm");

editLesson.forEach((lesson) => {
    lesson.addEventListener("click", () => {
        inputLesson.value = lesson.getAttribute("data-name");

        deleteForm.action =
            "/teacher/class/" +
            lesson.getAttribute("data-classId") +
            "/lesson/delete/" +
            lesson.getAttribute("data-lessonId");

        editForm.action =
            "/teacher/class/" +
            lesson.getAttribute("data-classId") +
            "/edit/" +
            lesson.getAttribute("data-lessonId");

        modalEdit.classList.remove("hidden");
        modalEdit.classList.add("flex");
    });
});

// Manipulasi Content
const lessons = document.querySelectorAll("#lesson");

lessons.forEach((lesson) => {
    lesson.addEventListener("click", () => {
        const lessonId = lesson.getAttribute("data-lesson-id");
        const content = document.getElementById(`content${lessonId}`);

        lesson.children[1].classList.toggle("rotate-90");
        lesson.classList.toggle("rounded-xl");
        lesson.classList.toggle("rounded-t-xl");
        content.classList.toggle("hidden");
    });
});

// badge tooltip

const badge = document.querySelectorAll("#badge");
const tooltip = document.querySelectorAll(".tooltip");

badge.forEach((badge, index) => {
    badge.addEventListener("mouseover", () => {
        console.log("mouseover");
        tooltip[index].classList.remove("hidden");
    });
    badge.addEventListener("mouseout", () => {
        tooltip[index].classList.add("hidden");
    });
});

// quiz modal
const parentQuizOverlay = document.getElementById("parent_quiz_overlay");
const quizOverlay = document.getElementById("quiz_overlay");
const quizModal = document.getElementById("quiz_modal");
const addQuiz = document.getElementById("addQuiz");
const quizClose = document.getElementById("quiz_close");

if (quizOverlay && quizModal) {
    quizOverlay.addEventListener("click", (event) => {
        if (event.target == quizOverlay) {
            parentQuizOverlay.classList.toggle("hidden");
        }
    });
}

if (addQuiz) {
    addQuiz.addEventListener("click", () => {
        parentQuizOverlay.classList.toggle("hidden");
    });
}

if (quizClose) {
    quizClose.addEventListener("click", () => {
        parentQuizOverlay.classList.toggle("hidden");
    });
}

// manipulasi question

const quizzes = document.querySelectorAll("#quiz");

quizzes.forEach((quiz) => {
    quiz.addEventListener("click", () => {
        const quizId = quiz.getAttribute("data-quizId");
        const quizOption = document.getElementById(`quizOption${quizId}`);

        quiz.children[1].classList.toggle("rotate-90");
        quiz.classList.toggle("rounded-2xl");
        quiz.classList.toggle("rounded-t-2xl");
        quizOption.classList.toggle("hidden");
    });
});

// manupalasi quiz
const editQuiz = document.getElementById("editQuiz");

if (editQuiz) {
    editQuiz.addEventListener("click", () => {
        modalEdit.classList.toggle("hidden");
        modalEdit.classList.toggle("flex");
    });
}

// manipulasi edit quiz
const parentEditQuiz = document.getElementById("parent_edit_quiz_overlay");
const editQuizOverlay = document.getElementById("edit_quiz_overlay");

if (editQuizOverlay && parentEditQuiz) {
    editQuizOverlay.addEventListener("click", (event) => {
        if (event.target == editQuizOverlay) {
            parentEditQuiz.classList.toggle("hidden");
        }
    });
}

const formEditQuiz = document.getElementById("formEditQuiz");
const questionInput = document.getElementById(`editQuestion`);
const a = document.getElementById(`editA`);
const b = document.getElementById(`editB`);
const c = document.getElementById(`editC`);
const d = document.getElementById(`editD`);
const e = document.getElementById(`editE`);
const answareInput = document.getElementById(`editAnsware`);
const editQuestion = document.querySelectorAll(`.buttonEditQuestion`);
const editQuizClose = document.getElementById(`edit_quiz_close`);

if (editQuizClose) {
    editQuizClose.addEventListener("click", () => {
        parentEditQuiz.classList.add("hidden");
    });
}

if (editQuestion) {
    editQuestion.forEach((question) => {
        question.addEventListener("click", () => {
            let options = JSON.parse(question.getAttribute("data-options"));

            formEditQuiz.action =
                "/quiz/question/edit/" + question.getAttribute("data-quizId");
            questionInput.value = question.getAttribute("data-question");
            a.value = options.a;
            b.value = options.b;
            c.value = options.c;
            d.value = options.d;
            e.value = options.e;
            answareInput.value = question.getAttribute("data-answare");
        });
        question.addEventListener("click", () => {
            parentEditQuiz.classList.remove("hidden");
        });
    });
}

// modal create essay
const addEssay = document.getElementById("addEssay");
const essayClose = document.getElementById("essay_close");
const parrentEssayOverlay = document.getElementById("parent_essay_overlay");
const essayOverlay = document.getElementById("essay_overlay");

if (addEssay) {
    addEssay.addEventListener("click", () => {
        parrentEssayOverlay.classList.remove("hidden");
    });
}

if (essayClose) {
    essayClose.addEventListener("click", () => {
        parrentEssayOverlay.classList.add("hidden");
    });
}

if (essayOverlay) {
    essayOverlay.addEventListener("click", (event) => {
        if (event.target == essayOverlay) {
            parrentEssayOverlay.classList.add("hidden");
        }
    });
}

// manipulasi essay
const essays = document.querySelectorAll("#essay");

essays.forEach((essay) => {
    essay.addEventListener("click", () => {
        const essayId = essay.getAttribute("data-essayId");
        document.getElementById(`essay${essayId}`).classList.toggle("hidden");
        essay.children[1].children[0].classList.toggle("rotate-90");
    });
});

// manipulasi edit essay
const buttonEditEssay = document.querySelectorAll("#buttonEditEssay");
const parentEditEssayOverlay = document.getElementById(
    "parent_edit_essay_overlay"
);
const editEssayOverlay = document.getElementById("edit_essay_overlay");
const editEssayClose = document.getElementById("edit_essay_close");
const inputEditEssay = document.getElementById("inputEditEssay");
const formEditEssay = document.getElementById("formEditEssay");

if (buttonEditEssay) {
    buttonEditEssay.forEach((essay) => {
        essay.addEventListener("click", () => {
            inputEditEssay.value = essay.getAttribute("data-question");
            formEditEssay.action =
                "/essay/question/edit/" + essay.getAttribute("data-essayId");
            console.log(essay.getAttribute("data-essayId"));
            parentEditEssayOverlay.classList.toggle("hidden");
            parentEditEssayOverlay.classList.toggle("flex");
        });
    });
}

if (editEssayOverlay) {
    editEssayOverlay.addEventListener("click", (event) => {
        if (event.target == editEssayOverlay) {
            parentEditEssayOverlay.classList.add("hidden");
        }
    });
}

if (editEssayClose) {
    editEssayClose.addEventListener("click", () => {
        parentEditEssayOverlay.classList.add("hidden");
    });
}

// manipulasi edit task essay
const editEssay = document.getElementById("editEssay");
const modalEditTaskEssay = document.getElementById("modalEditTaskEssay");

if (editEssay) {
    editEssay.addEventListener("click", () => {
        modalEditTaskEssay.classList.toggle("hidden");
        modalEditTaskEssay.classList.toggle("flex");
    });
}

// manipulasi add upload
const addUpload = document.getElementById("addUpload");
const parentUploadOverlay = document.getElementById("parent_upload_overlay");
const uploadOverlay = document.getElementById("upload_overlay");
const closeUpload = document.getElementById("upload_close");

if (addUpload) {
    addUpload.addEventListener("click", () => {
        parentUploadOverlay.classList.remove("hidden");
    });
}

if (uploadOverlay) {
    uploadOverlay.addEventListener("click", (event) => {
        if (event.target == uploadOverlay) {
            parentUploadOverlay.classList.add("hidden");
        }
    });
}

if (closeUpload) {
    closeUpload.addEventListener("click", () => {
        parentUploadOverlay.classList.add("hidden");
    });
}

// manipulasi edit upload modal
const editUploadTask = document.getElementById("editUploadTask");
const modalEditUpload = document.getElementById("modalEditUpload");
const buttonEditUpload = document.getElementById("buttonEditUpload");
const parent_edit_upload_overlay = document.getElementById(
    "parent_edit_upload_overlay"
);
const edit_upload_overlay = document.getElementById("edit_upload_overlay");
const edit_upload_close = document.getElementById("edit_upload_close");

if (editUploadTask) {
    editUploadTask.addEventListener("click", () => {
        modalEditUpload.classList.remove("hidden");
        modalEditUpload.classList.add("flex");
    });
}

if (modalEditUpload) {
    modalEditUpload.addEventListener("click", (event) => {
        if (event.target == modalEditUpload) {
            modalEditUpload.classList.add("hidden");
            modalEditUpload.classList.remove("flex");
        }
    });
}

if (buttonEditUpload) {
    buttonEditUpload.addEventListener("click", () => {
        parent_edit_upload_overlay.classList.remove("hidden");
    });
}

if (edit_upload_overlay) {
    edit_upload_overlay.addEventListener("click", (event) => {
        if (event.target == edit_upload_overlay) {
            parent_edit_upload_overlay.classList.add("hidden");
        }
    });
}

if (edit_upload_close) {
    edit_upload_close.addEventListener("click", () => {
        parent_edit_upload_overlay.classList.add("hidden");
    });
}

// hideshow multipleChoice
document.addEventListener("DOMContentLoaded", () => {
    function hideshow(hide, show) {
        console.log(hide, show);
        let element = document.getElementById(show);
        if (element) {
            document.getElementById(hide).style.display = "none";
            element.style.display = "flex";
        } else {
            document.getElementById(hide).style.display = "none";
            document.getElementById("end").style.display = "flex";
        }
    }
    window.hideshow = hideshow;
});

// datatable
import DataTable from "datatables.net-dt";

document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("#example");
    if (table) {
        new DataTable(table, {
            paging: true,
            searching: true,
            responsive: true,
            order: [[0, "asc"]],
            language: {
                search: "Find:",
                lengthMenu: "Show _MENU_ entries",
            },
        });
    }
});

// manipulasi updateScore
const updateScore = document.getElementById("updateScore");
const parentScoreOverlay = document.getElementById("parent_score_overlay");
const scoreOverlay = document.getElementById("score_overlay");
const scoreClose = document.getElementById("score_close");

if (updateScore) {
    updateScore.addEventListener("click", () => {
        parentScoreOverlay.classList.remove("hidden");
    });
}

if (scoreOverlay) {
    scoreOverlay.addEventListener("click", (event) => {
        if (event.target == scoreOverlay) {
            parentScoreOverlay.classList.add("hidden");
        }
    });
}

if (scoreClose) {
    scoreClose.addEventListener("click", () => {
        parentScoreOverlay.classList.add("hidden");
    });
}

// modal confirm class
const deleteClass = document.getElementById("deleteClass");
const confirmOverlay = document.getElementById("confirm_overlay");
const confirmModal = document.getElementById("confirm_modal");
const unconfirm = document.getElementById("unconfirm");
const leaveClass = document.getElementById("leaveClass");

if (deleteClass) {
    deleteClass.addEventListener("click", () => {
        confirmOverlay.classList.remove("hidden");
    });
}

if (leaveClass) {
    leaveClass.addEventListener("click", () => {
        confirmOverlay.classList.remove("hidden");
    });
}

if (confirmModal) {
    confirmModal.addEventListener("click", (event) => {
        if (event.target == confirmModal) {
            confirmOverlay.classList.add("hidden");
        }
    });
}

if (unconfirm) {
    unconfirm.addEventListener("click", () => {
        confirmOverlay.classList.add("hidden");
    });
}

// manipulasi type password
const passwordInput = document.querySelectorAll(".passwordInput");

// manipulasi game modal
const addChallenge = document.getElementById("addChallenge");
const challenge_overlay = document.getElementById("challenge_overlay");
const modal_challenge = document.getElementById("modal_challenge");
const challenge_close = document.getElementById("challenge_close");

if (addChallenge) {
    addChallenge.addEventListener("click", () => {
        challenge_overlay.classList.remove("hidden");
    });
}

if (challenge_close) {
    challenge_close.addEventListener("click", () => {
        challenge_overlay.classList.add("hidden");
    });
}

if (modal_challenge) {
    modal_challenge.addEventListener("click", (event) => {
        if (event.target == modal_challenge) {
            challenge_overlay.classList.add("hidden");
        }
    });
}

// manipulasi modal edit task
const ButtonEditTask = document.getElementById("ButtonEditTask");
const modalEditTask = document.getElementById("modalEditTask");

if (ButtonEditTask) {
    ButtonEditTask.addEventListener("click", () => {
        modalEditTask.classList.remove("hidden");
        modalEditTask.classList.add("flex");
    });
}

if (modalEditTask) {
    modalEditTask.addEventListener("click", (even) => {
        if (even.target == modalEditTask) {
            modalEditTask.classList.add("hidden");
            modalEditTask.classList.remove("flex    ");
        }
    });
}

// manipulasi edit challenge
const buttonEditChallenge = document.getElementById("buttonEditChallenge");
const edit_challenge_overlay = document.getElementById(
    "edit_challenge_overlay"
);
const modal_edit_challenge = document.getElementById("modal_edit_challenge");
const edit_challenge_close = document.getElementById("edit_challenge_close");

if (buttonEditChallenge) {
    buttonEditChallenge.addEventListener("click", () => {
        edit_challenge_overlay.classList.remove("hidden");
    });
}

if (modal_edit_challenge) {
    modal_edit_challenge.addEventListener("click", (event) => {
        if (event.target == modal_edit_challenge) {
            edit_challenge_overlay.classList.add("hidden");
        }
    });
}

if (edit_challenge_close) {
    edit_challenge_close.addEventListener("click", () => {
        edit_challenge_overlay.classList.add("hidden");
    });
}

// memory game
const cards = document.querySelectorAll(".memory-card");
const gameScore = document.getElementById("gameScore");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle("flip");

    const audio = new Audio("/sounds/tap-card.mp3");
    audio.play();

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch =
        firstCard.dataset.game === secondCard.dataset.game &&
        firstCard.id != secondCard.id;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    setTimeout(() => {
        const audio = new Audio("/sounds/card-match.mp3");
        audio.play();
        gameScore.innerHTML = parseInt(gameScore.innerHTML) + 100 + " XP";
    }, 500);

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        lockBoard = false;
    }, 500);
}

if (cards) {
    cards.forEach((card) => card.addEventListener("click", flipCard));
}

// manipulasi content modal game

let content = [
    {
        image: "/image/tutor-game-1.png",
        title: "Cara Mencocokan Gambar",
        description:
            "pilih 2 card dari 12 card yang ada dan cari gambar yang sama di kedua gambar tersebut",
    },
    {
        image: "/image/tutor-game-2.png",
        title: "Jika ada gambar yang cocok",
        description:
            "Jika kedua gambar cocok maka 2 gambar tersebut akan terbuka dua duanya",
    },
    {
        image: "/image/tutor-game-3.png",
        title: "Mendapatkan XP",
        description:
            "Kalian akan mendapatkan XP jika berhasil mencocokan gambar",
    },
];

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let contentPosition = 0;

function buildModal() {
    modalImage.src = content[contentPosition].image;
    modalTitle.innerHTML = content[contentPosition].title;
    modalDescription.innerHTML = content[contentPosition].description;

    prevButton.disabled = contentPosition === 0;
    // nextButton.disabled = contentPosition === content.length - 1;
}

if (modalImage) {
    buildModal();
    prevButton.addEventListener("click", () => {
        if (contentPosition > 0) {
            contentPosition--;
            buildModal();
        }
    });

    nextButton.addEventListener("click", () => {
        if (contentPosition < content.length - 1) {
            contentPosition++;
            buildModal();
        }

        if (contentPosition >= 2) {
            contentPosition++;
        }

        if (contentPosition === 4) {
            gameOverlay.classList.add("hidden");
            gameOverlay.classList.remove("flex");
            contentPosition = 0;
            buildModal();
        }
    });
}

// manipulasi modal game

const closeGameModal = document.getElementById("closeGameModal");
const gameOverlay = document.getElementById("gameOverlay");
const gameModal = document.getElementById("gameModal");
const tutorialButton = document.getElementById("tutorialButton");

if (tutorialButton) {
    tutorialButton.addEventListener("click", () => {
        gameOverlay.classList.remove("hidden");
        gameOverlay.classList.add("flex");
    });
}

if (gameOverlay) {
    gameOverlay.addEventListener("click", (event) => {
        if (event.target == gameOverlay) {
            gameOverlay.classList.add("hidden");
            gameOverlay.classList.remove("flex");
        }
    });
}

if (closeGameModal) {
    closeGameModal.addEventListener("click", () => {
        gameOverlay.classList.add("hidden");
        gameOverlay.classList.remove("flex");
        contentPosition = 0;
        buildModal();
    });
}
