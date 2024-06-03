const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Who is the President of the United States in 2021?",
        a: "Donald Trump",
        b: "Joe Biden",
        c: "Barack Obama",
        d: "George Bush",
        correct: "b",
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "What is the chemical symbol for water?",
        a: "O2",
        b: "H2O",
        c: "CO2",
        d: "HO",
        correct: "b",
    },
    {
        question: "How many continents are there on Earth?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c",
    },
    {
        question: "Which is the longest river in the world?",
        a: "Nile",
        b: "Amazon",
        c: "Yangtze",
        d: "Mississippi",
        correct: "a",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Platinum",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "J.K. Rowling",
        c: "William Shakespeare",
        d: "Mark Twain",
        correct: "c",
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Liechtenstein",
        correct: "b",
    },
    {
        question: "Which ocean is the largest?",
        a: "Atlantic",
        b: "Indian",
        c: "Arctic",
        d: "Pacific",
        correct: "d",
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Kangchenjunga",
        c: "Mount Everest",
        d: "Lhotse",
        correct: "c",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        a: "Osmium",
        b: "Oxygen",
        c: "Gold",
        d: "Silver",
        correct: "b",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Claude Monet",
        correct: "c",
    },
    {
        question: "What is the capital city of Japan?",
        a: "Beijing",
        b: "Seoul",
        c: "Bangkok",
        d: "Tokyo",
        correct: "d",
    },
    {
        question: "What is the primary ingredient in traditional Japanese miso soup?",
        a: "Tofu",
        b: "Soybean paste",
        c: "Seaweed",
        d: "Fish",
        correct: "b",
    },
    {
        question: "Which scientist is known for the theory of relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Nikola Tesla",
        correct: "b",
    },
    {
        question: "What is the largest desert in the world?",
        a: "Sahara Desert",
        b: "Arabian Desert",
        c: "Gobi Desert",
        d: "Antarctic Desert",
        correct: "d",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "South Korea",
        c: "Thailand",
        d: "Japan",
        correct: "d",
    },
    {
        question: "What is the most widely spoken language in the world?",
        a: "Spanish",
        b: "Mandarin Chinese",
        c: "English",
        d: "Hindi",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz-container');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
