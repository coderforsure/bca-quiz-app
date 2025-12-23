const quiz = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "None"],
    answer: 0
  },
  {
    question: "Which language is used for styling?",
    options: ["HTML", "Java", "CSS", "Python"],
    answer: 2
  },
  {
    question: "Which is a programming language?",
    options: ["CSS", "HTML", "JavaScript", "HTTP"],
    answer: 2
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[current].question;
  let buttons = document.querySelectorAll("#answers button");

  buttons.forEach((btn, index) => {
    btn.innerText = quiz[current].options[index];
  });
}

function checkAnswer(index) {
  if (index === quiz[current].answer) {
    score++;
  }
  current++;

  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-box").innerHTML =
      `<h2>Quiz Finished</h2><p>Your Score: ${score}</p>`;
  }
}

loadQuestion();
