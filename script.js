const quizData = [
    {
        question: "What is your girlfriend's favorite color?",
        a: "Red",
        b: "Blue",
        c: "Green",
        d: "Yellow",
        correct: "b"
    },
    {
        question: "What is her favorite hobby?",
        a: "Reading",
        b: "Cooking",
        c: "Traveling",
        d: "Dancing",
        correct: "c"
    },
    {
        question: "Where did you first meet?",
        a: "School",
        b: "Work",
        c: "Party",
        d: "Online",
        correct: "d"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <div class="quiz-question">${currentQuizData.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
}

submitBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer && answer.value === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        results.innerHTML = `<h2>You scored ${score}/${quizData.length}</h2>`;
    }
});
