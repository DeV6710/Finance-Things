var data = ` 
{
  "lesson1": {
    "questions": [
      {
        "question": "What is the 50-30-20 rule?",
        "answers": {
          "a": "A guideline for budgeting",
          "b": "A specific investment strategy",
          "c": "A rule used specifically for debt repayment",
          "d": "A guideline for spending your free time"
        },
        "correctAnswer": "a"
      },
      {
        "question": "What would be part of the 50 in the 50-30-20 rule?",
        "answers": {
          "a": "Concert Tickets",
          "b": "Rent",
          "c": "Mario Cart World",
          "d":  "Apple Stock" 
        },
        "correctAnswer": "b"
      },
      {
        "question": "What is a limitation of the 50-30-20 rule?",
        "answers": {
          "a": "It encourages more spending than anything else",
          "b": "It might not be right for specific situations",
          "c": "It has high levels of financial risk",
          "d": "It doesn't encourage any investing"
        },
        "correctAnswer": "b"
      },
      {
        "question": "Why is the 50-30-20 rule useful?",
        "answers": {
          "a": "It guarantees immediate financial success",
          "b": "It might not be right for specific situations",
          "c": "It has high levels of financial risk",
          "d": "It helps balance spending, investing, and necessities"
        },
        "correctAnswer": "d"
      }
    ]
  }
}
`
lessonsObj = JSON.parse(data)
function showQuestions(questions, quizContainer) {
  var output = [];

  for (var i = 0; i < questions.length; i++) {
    if (!questions[i] || !questions[i].question || !questions[i].answers) {
      continue; // skip empty or invalid entries
    }

    var answers = [];
    for (var letter in questions[i].answers) {
      answers.push(
        '<label>'
        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
        + letter + ': '
        + questions[i].answers[letter]
        + '</label>'
      );
    }

    output.push(
      '<div class="question">' + questions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
    );
  }

  quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer) {

  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');
  resultsContainer.style.display = "inherit";
  // keep track of user's answers
  var userAnswer = '';
  var numCorrect = 0;

  // for each question...
  for (var i = 0; i < questions.length; i++) {

    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
    // if answer is correct
    if (userAnswer === questions[i].correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[i].style.color = "#027148";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[i].style.color = 'red'
    }
  }

  // show number of correct answers out of total
  resultsContainer.innerHTML = "Score: " + numCorrect + ' out of ' + questions.length;
}
function generateQuiz(lessonName, quizContainer, resultsContainer, submitButton) {
  var questions = lessonsObj[lessonName]["questions"]
  showQuestions(questions, quizContainer)
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer)
  }
}
function loadLesson(lessonName) {
  const quizContainer = document.getElementsByClassName("questionsContainer")[0]
  const resultsContainer = document.getElementsByClassName("resultsContainer")[0]
  const submitButton = document.getElementById("submit")
  const lessonHeader = document.getElementsByClassName("lessonHeader")[0]
  const lessonSummary = document.getElementById("lessonSummary")
  generateQuiz(lessonName, quizContainer, resultsContainer, submitButton)
  console.log(quizContainer)
}


const quizContainer = document.getElementsByClassName("questionsContainer")[0]
const resultsContainer = document.getElementsByClassName("resultsContainer")[0]
const submitButton = document.getElementById("submit")
generateQuiz("lesson1", quizContainer, resultsContainer, submitButton)
console.log(quizContainer)




let menu = document.getElementById("menu")
let navLinks = document.querySelector(".nav-links")

menu.onclick = function(){
    navLinks.classList.toggle("menuitmes")
}