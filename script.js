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
////////////////////////////////////////////////////
// EFEITO DE CONFETES E BALÕES AO ACERTAR O QUIZ
////////////////////////////////////////////////////

function createCelebration() {

    const celebration =
        document.getElementById("celebration");

    if (!celebration) return;

    celebration.innerHTML = "";


    const colors = [
        "#9cff00",
        "#00e5ff",
        "#ff3cac",
        "#ffd166",
        "#ffffff",
        "#7c4dff",
        "#ff5757"
    ];


    // ==========================================
    // CONFETES
    // ==========================================

    for (let i = 0; i < 90; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");


        // Metade sai da esquerda
        // e metade sai da direita

        const fromLeft = i % 2 === 0;


        if (fromLeft) {

            confetti.style.left =
                `${Math.random() * 12}%`;

        } else {

            confetti.style.left =
                `${88 + Math.random() * 12}%`;

        }


        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        const x = fromLeft
            ? 100 + Math.random() * 450
            : -100 - Math.random() * 450;


        const y =
            -(300 + Math.random() * 550);


        confetti.style.setProperty(
            "--x",
            `${x}px`
        );

        confetti.style.setProperty(
            "--y",
            `${y}px`
        );

        confetti.style.setProperty(
            "--rotation",
            `${360 + Math.random() * 1080}deg`
        );

        confetti.style.setProperty(
            "--duration",
            `${1.8 + Math.random() * 1.8}s`
        );

        confetti.style.setProperty(
            "--spin",
            `${.5 + Math.random()}s`
        );

        confetti.style.setProperty(
            "--delay",
            `${Math.random() * .3}s`
        );


        celebration.appendChild(confetti);

    }


    // ==========================================
    // BALÕES
    // ==========================================

    for (let i = 0; i < 18; i++) {

        const balloon =
            document.createElement("div");

        balloon.classList.add("balloon");


        const fromLeft = i % 2 === 0;


        if (fromLeft) {

            balloon.style.left =
                `${2 + Math.random() * 15}%`;

        } else {

            balloon.style.right =
                `${2 + Math.random() * 15}%`;

        }


        const color =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        balloon.style.background = color;

        balloon.style.color = color;


        const x = fromLeft
            ? 100 + Math.random() * 350
            : -100 - Math.random() * 350;


        const y =
            -(350 + Math.random() * 450);


        balloon.style.setProperty(
            "--x",
            `${x}px`
        );

        balloon.style.setProperty(
            "--y",
            `${y}px`
        );

        balloon.style.setProperty(
            "--rotation",
            `${-20 + Math.random() * 40}deg`
        );

        balloon.style.setProperty(
            "--duration",
            `${3 + Math.random() * 2}s`
        );

        balloon.style.setProperty(
            "--delay",
            `${Math.random() * .5}s`
        );


        const size =
            38 + Math.random() * 22;

        balloon.style.width =
            `${size}px`;

        balloon.style.height =
            `${size * 1.25}px`;


        celebration.appendChild(balloon);

    }


    // Remove os elementos depois da animação

    setTimeout(() => {

        celebration.innerHTML = "";

    }, 5500);

}