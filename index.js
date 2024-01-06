/* Add li tag to HTML
  function addLiElement() {  
  const output = document.querySelector('ul');
  let li = document.createElement('li');
  output.appendChild(li);
}; 

list.forEach(addLiElement);*/
import {list} from "./data.js";
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.querySelector('#questions');
const answerElement = document.querySelector('#answers');
const backButton = document.querySelector('#back');
const nextButton = document.querySelector('#next');
const mainHeader = document.querySelector('#main-header');
const header = document.querySelector('#header');
const answerBtn = document.querySelector('.answer-btn');

const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', startQuiz);

let randomQuestion, currentQuestion

function startQuiz() {
  startButton.classList.add('hide');
  //backButton.classList.remove('hide');
  nextButton.classList.remove('hide');
  quizContainer.classList.remove('hide');
  mainHeader.classList.add('hide');
  header.classList.remove('hide');
  randomQuestion = Math.floor(Math.random() * 10);
  currentQuestion = 0;
  nextQuestion();
};

// backButton.addEventListener('click' previousQuestion)
// nextButton.addEventListener('click' nextQuestion);

function nextQuestion() {
  resetState()
  displayQuestion(randomQuestion[currentQuestion])
}

//function secondQuestion(){
//  displayQuestion(randomQuestion)}

function displayQuestion(list) {
  questionElement.innerText = list.question;
  list.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text;
    button.classList.add('answer-btn')
    if(answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerElement.appendChild(button)
  })
}

function secondQuestion() {
  mainHeader.classList.add('hide');
  header.classList.remove('hide');
  randomQuestion = Math.floor(Math.random() * 10);
  currentQuestion = 0;
  nextQuestion();
};

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  Array.from(answerElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if(randomQuestion.lenght > currentQuestionIndex + 1){
  nextButton.classList.remove('hide')
}else{
  nextButton.classList.remove('hide')
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
}

function resetState() {
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild)
  }
}
nextButton.addEventListener('click', secondQuestion);

let currentQuizIndex = 0;
let score = 0;

