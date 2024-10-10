//Wait for the DOM to finish loading

document.addEventListener("DOMContentLoaded", function () {
    // Select the elements that need to showcase after
    const startQuizButton = document.getElementById("start-quiz");
    const instructionSect = document.querySelector(".instruction-sect");
    const quizContainer = document.querySelector(".quiz-container");
    const answerButtons = document.querySelectorAll(".answer-btn");

    // Variable to store the selected answer
    let selectedAnswer = "";

    //hide the quiz container at first
    quizContainer.style.display = "none";

    //show the instructionSect at first
    instructionSect.style.display = "block";


    //add a click event listener to start quiz button
    startQuizButton.addEventListener("click", function () {

        //hide the instruction section
        instructionSect.style.display = "none";

        //show the quiz container
        quizContainer.style.display = "block";
    })

    //add click event to each answer button
    answerButtons.forEach(button => {
        button.addEventListener("click", function () {
            //remove 'active' class from all buttons
            answerButtons.forEach(btn => btn.classList.remove("active"));

            //add 'active' class to the clicked button
            this.classList.add("active");

            //store THE SELECTED ANSWER (button text or value) -> variable for the selected answer
            selectedAnswer = this.textContent;

        });

    });



    startGame();
});

function startGame() {
    //return index and in order to make the displayQuestionandAnswers work
    let indexRange = Math.floor(Math.random() * 5) + 1;
    let questionIndex = quiz[index].question;
    //we need to make sure that the questions are in order;
    displayQuestionAndAnswers(questionIndex);
};

// lets start by making a question set which contains the answers as well
const quiz = [
    {
        question: "What is AI?",
        options: ["Alien Intelligence", "Artificial Intelligence", "Alien Initiative", "Artificial Interferances"],
        answer: "Artificial Intelligence"
    },

    {
        question: "What is ANNs?",
        options: ["AI", "ANNs", "Artificial Neural Networks", "DNNs"],
        answer: "Artificial Neural Networks"
    }
];

//we need a function that displays the question

function displayQuestionAndAnswers(index) {
    mainQuestion = document.getElementById("question").innerHTML = quiz[index].question;


};

//we need a function that checks the answer and tracks the user's progress
function checkAnswer() {

};

function trackUserProgress() {

};


// a function that can make an analysis section after user has opted to check the analytics
function analyticsDisplay() {

};