var data = ` 
{
  "lesson1": {
    "questions": [
      {
        "question": "what is 1 + 1?",
        "answers": {
          "a": 2,
          "b": 3,
          "c": 4,
          "d": 5
        },
        "correctAnswer": "a"
      },
      {
        "question": "what is 2 + 1?",
        "answers": {
          "a": 2,
          "b": 3,
          "c": 4,
          "d": 5
        },
        "correctAnswer": "b"
      },
      {
        "question": "what is 2 + 3?",
        "answers": {
          "a": 2,
          "b": 3,
          "c": 4,
          "d": 5
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
  var answers;
  console.log(questions)
  for (var i = 0; i < questions.length; i++) {
    answers = []
    for (letter in questions[i].answers) {
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
      answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[i].style.color = 'red'
    }
  }

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
function generateQuiz(lessonName, quizContainer, resultsContainer, submitButton) {
  var questions = lessonsObj[lessonName]["questions"]
  showQuestions(questions, quizContainer)
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer)
  }
}

const quizContainer = document.getElementsByClassName("questionsContainer")[0]
const resultsContainer = document.getElementsByClassName("resultsContainer")[0]
const submitButton = document.getElementById("submit")
generateQuiz("lesson1", quizContainer, resultsContainer, submitButton)
console.log(quizContainer)

