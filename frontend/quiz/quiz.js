const quiz = [
  {
    question: "Which dance form is from Tamil Nadu?",
    options: ["Kathak", "Bharatanatyam", "Odissi", "Kuchipudi"],
    answer: "Bharatanatyam"
  },
  {
    question: "Tabla is a?",
    options: ["String instrument", "Wind instrument", "Percussion instrument", "Electronic"],
    answer: "Percussion instrument"
  }
];

let current = 0;
let score = 0;
let selected = "";

function loadQuestion() {
  document.getElementById("question").innerText = quiz[current].question;

  let optionsHTML = "";
  quiz[current].options.forEach(opt => {
    optionsHTML += `<button onclick="selectOption('${opt}')">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;
}

function selectOption(option) {
  selected = option;
}

function nextQuestion() {
  if (selected === quiz[current].answer) {
    score++;
  }

  current++;
  selected = "";

  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText = "Your Score: " + score;
  }
}

loadQuestion();