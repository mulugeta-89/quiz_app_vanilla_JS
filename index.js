const quizData = [
      {
        "question": "What is the capital city of Australia?",
        "options": [
          "Sydney",
          "Melbourne",
          "Canberra",
          "Brisbane"
        ],
        "answer": "c"
      },
      {
        "question": "What is the largest planet in our solar system?",
        "options": [
          "Venus",
          "Jupiter",
          "Saturn",
          "Mars"
        ],
        "answer": "b"
      },
      {
        "question": "What is the smallest country in the world?",
        "options": [
          "Monaco",
          "Vatican City",
          "San Marino",
          "Liechtenstein"
        ],
        "answer": "b"
      },
      {
        "question": "What is the capital city of Japan?",
        "options": [
          "Kyoto",
          "Osaka",
          "Tokyo",
          "Yokohama"
        ],
        "answer": "c"
      },
      {
        "question": "What is the tallest mammal?",
        "options": [
          "Giraffe",
          "Elephant",
          "Horse",
          "Camel"
        ],
        "answer": "a"
      },
      {
        "question": "Who painted the famous artwork 'The Starry Night'?",
        "options": [
          "Pablo Picasso",
          "Leonardo da Vinci",
          "Claude Monet",
          "Vincent van Gogh"
        ],
        "answer": "d"
      },
      {
        "question": "What is the largest ocean in the world?",
        "options": [
          "Indian Ocean",
          "Atlantic Ocean",
          "Arctic Ocean",
          "Pacific Ocean"
        ],
        "answer": "d"
      },
      {
        "question": "What is the largest desert in the world?",
        "options": [
          "Sahara Desert",
          "Arabian Desert",
          "Gobi Desert",
          "Antarctica"
        ],
        "answer": "d"
      },
      {
        "question": "What is the smallest bone in the human body?",
        "options": [
          "Stapes",
          "Femur",
          "Tibia",
          "Radius"
        ],
        "answer": "a"
      },
{
    "question": "What is the chemical symbol for gold?",
        "options": [
            "Ag",
            "Au",
            "Cu",
            "Fe"
        ],
      "answer": "b"
}
]
window.onload = () => {
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.options[0]
    b_text.innerText = currentQuizData.options[1]
    c_text.innerText = currentQuizData.options[2]
    d_text.innerText = currentQuizData.options[3]
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  function getSelected() {
    let answer
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    })
    return answer
  }

  submitBtn.addEventListener("click", () => {
    let answer = getSelected()
    if (answer) {
      if (answer === quizData[currentQuiz].answer) {
        score++
      }
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2>You have answered ${score}/${quizData.length}</h2><br/> <button onclick="location.reload()">Restart</button>`
    }
  })

  const timerEl = document.getElementById("timer")
  let time = 60
  const runner = setInterval(() => {
    if (time <= 0) {
      clearInterval(runner)
      alert("Time's Up")
      quiz.innerHTML = `<h2>You have answered ${score}/${quizData.length}</h2><br/> <button onclick="location.reload()">Restart</button>`
      // location.reload();
    } else {
      timerEl.innerText = time
      time--
    }
  }, 1000)

}
