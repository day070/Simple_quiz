const quizData = [
  {
    quistion: "WHat does HtML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer aTW",
      "Buat kah",
      "asuw",
    ],
    correct: 0,
  },
  {
    quistion: "Tag CSS untuk membuat Jarak dalam element",
    options: ["margin", "padding", "postion", "text"],
    correct: 1,
  },
  {
    quistion: "Tag CSS untuk ",
    options: ["margin", "padding", "postion", "text"],
    correct: 1,
  },
  {
    quistion: " Jarak dalam element",
    options: ["margin", "padding", "postion", "text"],
    correct: 1,
  },
];

// insialisasi

const answerElm = document.querySelectorAll(".answert");
const [quistionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#quistion, .option_1, .option_2, .option_3, .option_4"
  );

const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

// tahap 3

const LoadQuiz = () => {
  const { quistion, options } = quizData[currentQuiz];
  quistionElm.innerText = `${currentQuiz + 1}: ${quistion}`;
  // option.forEach((curOption, index) =>((option_1.innerHTML = curOption)));
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerHTML = curOption)
  );
};

LoadQuiz();

// tahap 4

const getSeletedOption = () => {
  let ans_index;
  answerElm.forEach((curOption, index) => {
    if (curOption.checked) {
      ans_index = index;
    }
  });
  return ans_index;
};

const deselectedAnswer = () => {
  return answerElm.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectOptionIndex = getSeletedOption();
  if (selectOptionIndex == quizData[currentQuiz].correct) {
    score = score + 1;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    LoadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2 class="">🏆 your sucsess ${score}/${quizData.length}Coreect Answer</h2>
    <p>Congratulastios on the completinng the quiz</p>
    <button class="btn-reload" onclick="location.reload()">Play again🔄</button>
    </div>
    `;
  }
});
