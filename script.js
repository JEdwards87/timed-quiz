const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const questionTime = 75;//in seconds
let timer;
let currentQuestion = 0;
let timeLeft = 75;//in seconds
let score = 0;
let stopQuiz = questions.length - 1;
//displayQuestion:
function displayQuestion() {
    let quizQuestion = questions[currentQuestion];
    question.innerHTML = quizQuestion.question;
    answer1.innerHTML = quizQuestion.answer1;
    answer2.innerHTML = quizQuestion.answer2;
    answer3.innerHTML = quizQuestion.answer3;
    answer4.innerHTML = quizQuestion.answer4;
}
//Invoke startQuiz when button "start" is clicked
start.addEventListener("click", startQuiz);
//startQuiz: hide "start" and "display", show "quiz".
//startQuiz: invoke functions "displayQuestion" and "displayTimeLeft"
function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    displayQuestion();
    displayTimeLeft();
    timer = setInterval(displayTimeLeft, 1000);//in milliseconds
}
//displayTimeLeft:
function displayTimeLeft() {
    if (timeLeft <= questionTime) {
        counter.innerHTML = timeLeft;
        timeLeft--;
    } 
}
//checkAnswer: if answer correct increase the score
function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score++;
        correctAnswer();
    } else {
        wrongAnswer();
    }
    if (currentQuestion < stopQuiz) {
        currentQuestion++;
        displayQuestion();
    } else {
        clearInterval(timer);//stop timer
        showScore();
    }
}
//correctAnswer: adds 5 seconds
function correctAnswer() {
    timeLeft = timeLeft + 5;
}
//wrongAnswer: subtracts 15 seconds
function wrongAnswer() {
    timeLeft = timeLeft - 15;
}
//showScore: hide quiz, show resultZone, display score 
function showScore() {
    console.log(score);
    quiz.style.display = "none";
}




