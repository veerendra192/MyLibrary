const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "JavaScript",
        b: "C",
        c: "Kotlin",
        d: "Java",
        correct: "a",
    },

    {
        question: "What does HTML stand for?",
        a: "Hyper Txt MAchine Langauage",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hypertext Markup Language",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    
    {
        question: "What year was JavaScript launched?",
        a: "1994",
        b: "1996",
        c: "1995",
        d: "none of the above",
        correct: "c",
    },
];

const quiz = document.getElementById('QUIZ')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const label1 = document.getElementById('label1')
const label2 = document.getElementById('label2')
const label3 = document.getElementById('label3')
const label4 = document.getElementById('label4')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    label1.innerText = currentQuizData.a
    label2.innerText = currentQuizData.b
    label3.innerText = currentQuizData.c
    label4.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})