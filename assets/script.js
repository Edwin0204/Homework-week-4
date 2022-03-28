const question= document.getElementById("question");
const choices= Array.from (document.getElementsByClassName("choice-text"));
var timeEl = document.querySelector(".time");


let currentQuestion ={};
let correctAnswer = false;
let questionCounter = 0;


let questions = [
    {
        question: "Commonly used data types DO NOT include:" ,
        choice1: "1: Strings",
        choice2: "2: Booleans",
        choice3: "3: Alerts",
        choice4: "4: Numbers",
        answer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed within ___." ,
        choice1: "1: Quotes",
        choice2: "2: Curly brackets",
        choice3: "3: Parenthesis",
        choice4: "4: Square brackets",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store ___." ,
        choice1: "1: Numbers and strings",
        choice2: "2: Other arrays",
        choice3: "3: booleans",
        choice4: "4: all of the above",
        answer: 4
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables." ,
        choice1: "1: Commas",
        choice2: "2: Curly brackets",
        choice3: "3: Quotes",
        choice4: "4: Parenthesis",
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:" ,
        choice1: "1: JavaScript",
        choice2: "2: Terminal / bash",
        choice3: "3: For loops",
        choice4: "4: Console.log",
        answer: 4
    }
];

let numberOfQuestions = questions.length
var secondsLeft = 75;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "time: " + secondsLeft;

      if(secondsLeft === 0) {
        return window.location.assign("./end.html");
      }

    }, 1000);
  }
  
function playGame() {
    questionCounter=0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
};

function getNewQuestion(){
    if(questionCounter==numberOfQuestions){
       localStorage.setItem("score", secondsLeft);
       return window.location.assign("./end.html");
        
    }
questionCounter++;
let questionIndex = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions [questionIndex];
question.innerText = currentQuestion.question;

choices.forEach(choice => {
const number = choice.dataset ["number"];
choice.innerText =currentQuestion ["choice"+number]
});

availableQuestions.splice (questionIndex,1);
correctAnswer = true;
};

choices. forEach (choice =>{
    choice.addEventListener("click", e =>{

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    if(selectedAnswer == currentQuestion.answer){
    document.getElementById("wrong-answer").style.display = "none";
    document.getElementById("correct-answer").style.display = "block";
    } 
    else{
    document.getElementById("correct-answer").style.display = "none";
    document.getElementById("wrong-answer").style.display = "block";
    secondsLeft = secondsLeft-10;
    }
    getNewQuestion();

    });
});

setTime();
playGame();

