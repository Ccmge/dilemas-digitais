// =====================================
// MENU MOBILE
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Fecha o menu quando um link é clicado

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =====================================
// MODAL DE SOLUÇÕES
// =====================================

const modal = document.getElementById("modal");

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const closeModal = document.getElementById("closeModal");

const modalButton = document.getElementById("modalButton");

const solutionButtons =
    document.querySelectorAll(".solution-button");


solutionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const title = button.dataset.title;

        const solution = button.dataset.solution;

        modalTitle.textContent = title;

        modalText.textContent = solution;

        modal.classList.add("active");

    });

});


function closeModalFunction() {

    modal.classList.remove("active");

}


closeModal.addEventListener(
    "click",
    closeModalFunction
);


modalButton.addEventListener(
    "click",
    closeModalFunction
);


// Fecha clicando fora da janela

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModalFunction();

    }

});


// Fecha com ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModalFunction();

    }

});


// =====================================
// CHECKLIST
// =====================================

const checkboxes =
    document.querySelectorAll(
        '.check-container input[type="checkbox"]'
    );

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");


function updateProgress() {

    const total = checkboxes.length;

    let completed = 0;

    checkboxes.forEach(checkbox => {

        if (checkbox.checked) {

            completed++;

        }

    });

    const percentage =
        Math.round((completed / total) * 100);

    progressBar.style.width =
        percentage + "%";

    progressText.textContent =
        percentage + "% concluído";

}


checkboxes.forEach(checkbox => {

    checkbox.addEventListener(
        "change",
        updateProgress
    );

});


// =====================================
// QUIZ
// =====================================

const answers =
    document.querySelectorAll(".answer");

const quizResult =
    document.getElementById("quizResult");


answers.forEach(answer => {

    answer.addEventListener("click", () => {

        // Desativa todas as respostas

        answers.forEach(item => {

            item.disabled = true;

        });


        const correct =
            answer.dataset.correct === "true";


        if (correct) {

            answer.classList.add("correct");

            quizResult.textContent =
                "✓ Correto! A autenticação em dois fatores aumenta a segurança das suas contas.";

            quizResult.style.color =
                "#9cff00";

        } else {

            answer.classList.add("wrong");

            quizResult.textContent =
                "✕ Essa não é a melhor opção. Reveja as práticas de segurança.";

            quizResult.style.color =
                "#ff5555";


            // Destaca a resposta correta

            answers.forEach(item => {

                if (
                    item.dataset.correct === "true"
                ) {

                    item.classList.add("correct");

                }

            });

        }

    });

});


// =====================================
// ANIMAÇÃO DOS CARDS
// =====================================

const animatedElements =
    document.querySelectorAll(
        ".card, .solution-item, .check-container"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// CSS da animação criado pelo JavaScript

const style =
    document.createElement("style");


style.textContent = `

    .hidden {

        opacity: 0;

        transform: translateY(30px);

        transition:
            opacity .7s ease,
            transform .7s ease;

    }

    .hidden.show {

        opacity: 1;

        transform: translateY(0);

    }

`;


document.head.appendChild(style);