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

    let index = 0; //I will look for another logic later

    //Display the first question and its answers
    displayQuestionAndAnswers(index);
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
    document.getElementById("question").innerHTML = quiz[index].question;

    const answerButtons = document.querySelectorAll(".answer-btn");

    // Display the answer options by updating button text
    quiz[index].options.forEach((option, i) => {
        answerButtons[i].innerHTML = option;
        answerButtons[i].classList.remove("active"); // Reset active class
        answerButtons[i].addEventListener("click", function () {
            // Add 'active' class when an option is selected
            answerButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
}

// Submit function to move to the next question and track score
document.getElementById("submit").addEventListener("click", function () {
    const selectedOption = document.querySelector(".answer-btn.active");

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    // Check if the selected answer is correct
    let selectedAnswer = selectedOption.innerHTML;
    if (selectedAnswer === quiz[currentQuestionIndex].answer) {
        score++; // Increment score if the answer is correct
    }

    currentQuestionIndex++; // Move to the next question

    // Check if there are more questions
    if (currentQuestionIndex < totalQuestions) {
        displayQuestionAndAnswers(currentQuestionIndex);
    } else {
        displayResults(); // All questions answered, show results
    }
});

// Function to display the results and analytics
function displayResults() {
    // Hide the quiz container
    document.querySelector(".quiz-container").style.display = "none";

    // Display the results section
    const resultSection = document.getElementById("result-section");
    resultSection.style.display = "block";

    // Update the score display
    document.getElementById("score").innerHTML = `${score} / ${totalQuestions}`;

    // Display analytics (you can customize this)
    const analyticsMessage = `You answered ${score} out of ${totalQuestions} questions correctly.`;
    document.getElementById("analytics").innerHTML = analyticsMessage;
}


// Start the game when the page loads
startGame();
