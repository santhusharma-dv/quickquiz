const questions = [
  {
    q: "Which CS50 topic introduces web apps with routes and templates?",
    choices: ["C", "Flask", "SQL", "Binary"],
    answer: 1
  },
  {
    q: "Which statement creates a table in SQLite?",
    choices: [
      "CREATE TABLE users (...);",
      "MAKE users TABLE (...);",
      "new table users {...}",
      "INSERT INTO users VALUES (...);"
    ],
    answer: 0
  },
  {
    q: "In Python, which keyword defines a function?",
    choices: ["func", "def", "lambda", "define"],
    answer: 1
  }
];

let current = 0;
let selected = null;
let score = 0;

const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const progressEl = document.getElementById("progress");
const scoreText = document.getElementById("scoreText");

startBtn.addEventListener("click", () => {
  home.classList.add("hidden");
  quiz.classList.remove("hidden");
  current = 0; score = 0; selected = null;
  renderQuestion();
});

restartBtn.addEventListener("click", () => {
  result.classList.add("hidden");
  home.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  if (selected === null) return;
  if (selected === questions[current].answer) score++;
  current++;
  selected = null;
  nextBtn.disabled = true;

  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

function renderQuestion() {
  const { q, choices } = questions[current];
  questionEl.innerHTML = `<h3>${q}</h3>`;
  choicesEl.innerHTML = "";
  choices.forEach((text, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = text;
    btn.addEventListener("click", () => {
      selected = idx;
      [...choicesEl.children].forEach(c => c.classList.remove("selected"));
      btn.classList.add("selected");
      nextBtn.disabled = false;
    });
    choicesEl.appendChild(btn);
  });
  progressEl.textContent = `Question ${current + 1} of ${questions.length}`;
}

function showResult() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  const pct = Math.round((score / questions.length) * 100);
  const message =
    pct === 100 ? "Perfect! CS50 mastery on display." :
    pct >= 67 ? "Nice work! Solid understanding." :
    "Keep going — revisit notes and try again.";

  scoreText.textContent = `Score: ${score}/${questions.length} (${pct}%). ${message}`;
}
