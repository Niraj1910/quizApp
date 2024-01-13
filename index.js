const allQuestions = [
  [
    "1. What is the captial of India ?",
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Delhi",
  ],
  [
    "2. Who is Kabir das ?",
    "Saint",
    "Revolutionary",
    "Warrior",
    "Artist",
    "Saint",
  ],
  [
    "3. Which bird cannot fly ?",
    "Peacock",
    "Ostrich",
    "Hummingbird",
    "Crane",
    "Ostrich",
  ],
  [
    "4. Which animal we consider as a King",
    "Rhino",
    "Tiger",
    "Wolf",
    "Lion",
    "Lion",
  ],
];

let index = 0;
let correctans = 0;
const question = document.querySelector(".question");
const p_1 = document.querySelector(".p-1");
const p_2 = document.querySelector(".p-2");
const p_3 = document.querySelector(".p-3");
const p_4 = document.querySelector(".p-4");

function loadQuestions() {
  question.innerHTML = allQuestions[index][0];
  p_1.innerHTML = allQuestions[index][1];
  p_2.innerHTML = allQuestions[index][2];
  p_3.innerHTML = allQuestions[index][3];
  p_4.innerHTML = allQuestions[index][4];

  const ans = allQuestions[index][5];

  p_1.addEventListener("click", function () {
    if (p_1.innerHTML === ans) {
      p_1.classList = "correct";
      correctans++;
    } else {
      p_1.classList = "wrong";
      if (p_2.innerHTML === ans) p_2.classList = "correct";
      else if (p_3.innerHTML === ans) p_3.classList = "correct";
      else if (p_4.innerHTML === ans) p_4.classList = "correct";
    }
  });

  p_2.addEventListener("click", function () {
    if (p_2.innerHTML === ans) {
      p_2.classList = "correct";
      correctans++;
    } else {
      p_2.classList = "wrong";
      if (p_1.innerHTML === ans) p_1.classList = "correct";
      else if (p_3.innerHTML === ans) p_3.classList = "correct";
      else if (p_4.innerHTML === ans) p_4.classList = "correct";
    }
  });

  p_3.addEventListener("click", function () {
    if (p_3.innerHTML === ans) {
      p_3.classList = "correct";
      correctans++;
    } else {
      p_3.classList = "wrong";
      if (p_2.innerHTML === ans) p_2.classList = "correct";
      else if (p_1.innerHTML === ans) p_1.classList = "correct";
      else if (p_4.innerHTML === ans) p_4.classList = "correct";
    }
  });

  p_4.addEventListener("click", function () {
    if (p_4.innerHTML === ans) {
      p_4.classList = "correct";
      correctans++;
    } else {
      p_4.classList = "wrong";
      if (p_2.innerHTML === ans) p_2.classList = "correct";
      else if (p_3.innerHTML === ans) p_3.classList = "correct";
      else if (p_1.innerHTML === ans) p_1.classList = "correct";
    }
  });
}

document.querySelector("button").addEventListener("click", function () {
  index += 1;

  question.innerHTML = "";
  p_1.classList = "";
  p_1.innerHTML = "";
  p_2.classList = "";
  p_2.innerHTML = "";
  p_3.classList = "";
  p_3.innerHTML = "";
  p_4.classList = "";
  p_4.innerHTML = "";

  if (index === allQuestions.length) {
    const result = document.querySelector(".card");
    result.innerHTML = `<h1>Your total score is ${correctans}/${allQuestions.length}</h1>`;
  } else {
    loadQuestions();
  }
});

console.log(correctans);

loadQuestions();
