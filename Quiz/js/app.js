const questions = [
    {
        question: 'Qual é o maior planeta do nosso sistema solar?',
        answers: ['Marte', 'Júpiter', 'Saturno', 'Netuno'],
        correctIndex: 1,
    },
    {
        question: 'Qual é a capital do Brasil?',
        answers: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'],
        correctIndex: 0,
    },
    {
        question: 'Qual elemento químico tem o símbolo O?',
        answers: ['Ouro', 'Oxigênio', 'Ósmio', 'Ozônio'],
        correctIndex: 1,
    },
    {
        question: 'Quem pintou a Mona Lisa?',
        answers: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
        correctIndex: 1,
    },
    {
        question: 'Qual é a principal língua falada na Argentina?',
        answers: ['Português', 'Inglês', 'Espanhol', 'Francês'],
        correctIndex: 2,
    },
    {
        question: 'Em qual continente está localizado o Egito?',
        answers: ['África', 'Europa', 'Ásia', 'Oceania'],
        correctIndex: 0,
    },
    {
        question: 'Qual animal é conhecido como o rei da selva?',
        answers: ['Tigre', 'Elefante', 'Leão', 'Gorila'],
        correctIndex: 2,
    },
    {
        question: 'Qual é a fórmula química da água?',
        answers: ['H2O', 'CO2', 'NaCl', 'O2'],
        correctIndex: 0,
    },
    {
        question: 'Qual invenção ajudou a iniciar a revolução industrial?',
        answers: ['Impressora', 'Motor a vapor', 'Computador', 'Avião'],
        correctIndex: 1,
    },
    {
        question: 'Qual planeta é conhecido como planeta vermelho?',
        answers: ['Vênus', 'Mercúrio', 'Marte', 'Júpiter'],
        correctIndex: 2,
    },
];

const statsElement = document.querySelector('.stats');
const questionText = document.getElementById('question-text');
const cardsGrid = document.querySelector('.quiz-grid');
const restartButton = document.getElementById('btn-reiniciar');
const quizBox = document.querySelector('.quiz-box');

let currentQuestionIndex = 0;
let score = 0;
let answerLocked = false;

function renderQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const current = questions[currentQuestionIndex];
    statsElement.textContent = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
    questionText.textContent = current.question;
    quizBox.classList.remove('quiz-result');

    cardsGrid.innerHTML = '';
    current.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-card';
        button.type = 'button';
        button.textContent = answer;
        button.dataset.index = String(index);
        button.addEventListener('click', handleAnswer);
        cardsGrid.appendChild(button);
    });
}

function handleAnswer(event) {
    if (answerLocked) return;
    answerLocked = true;

    const button = event.currentTarget;
    const selectedIndex = Number(button.dataset.index);
    const current = questions[currentQuestionIndex];
    const buttons = Array.from(cardsGrid.children);

    buttons.forEach((btn) => {
        btn.disabled = true;
        const btnIndex = Number(btn.dataset.index);
        if (btnIndex === current.correctIndex) {
            btn.classList.add('correct');
        }
    });

    if (selectedIndex === current.correctIndex) {
        score += 1;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }

    setTimeout(() => {
        currentQuestionIndex += 1;
        answerLocked = false;
        renderQuestion();
    }, 900);
}

function showResult() {
    statsElement.textContent = 'Quiz finalizado';
    questionText.textContent = 'Parabéns! Aqui está o seu resultado:';
    quizBox.classList.add('quiz-result');

    cardsGrid.innerHTML = `
        <div class="result-summary">
            <p>Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas.</p>
            <p>${getFeedback(score)}</p>
            <button id="btn-reset-final" class="answer-card action-card" type="button">Refazer Quiz</button>
        </div>
    `;

    const resetFinalButton = document.getElementById('btn-reset-final');
    resetFinalButton.addEventListener('click', resetQuiz);
}

function getFeedback(scoreValue) {
    if (scoreValue === questions.length) {
        return 'Excelente! Você dominou todas as perguntas.';
    }
    if (scoreValue >= 7) {
        return 'Muito bom! Continue praticando para alcançar a pontuação máxima.';
    }
    if (scoreValue >= 4) {
        return 'Bom trabalho! Com um pouco mais de revisão, você chega lá.';
    }
    return 'Vamos lá! Revise os temas e tente novamente para melhorar a pontuação.';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answerLocked = false;
    renderQuestion();
}

restartButton.addEventListener('click', resetQuiz);
window.addEventListener('DOMContentLoaded', renderQuestion);
