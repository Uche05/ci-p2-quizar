/**
 * Wait for the DOM to finish loading
 */

//Tip from Love Maths Lesson

document.addEventListener("DOMContentLoaded", function () {
    // Select the elements that need to be showcased after loading
    const startQuizButton = document.getElementById("start-quiz");
    const instructionSect = document.querySelector(".instruction-sect");
    const quizContainer = document.querySelector(".quiz-container");
    const answerButtons = document.querySelectorAll(".answer-btn");
    const submitButton = document.getElementById("submit");

    // Variables to store the selected answer, score, and question index
    let selectedAnswer = "";
    let score = 0;
    let currentQuestionIndex = 0;

    // Array of quiz questions
    const quiz = [
        {
            question: "What is AI?",
            options: ["Alien Intelligence", "Artificial Intelligence",
                "Alien Initiative", "Artificial Interferences"],
            answer: "Artificial Intelligence"
        },
        {
            question: "What is ANNs?",
            options: ["Artifiical Nation of Networks", "Ants Nomads are Natural",
                "Artificial Neural Networks", "Analytical Neural Networks"],
            answer: "Artificial Neural Networks"
        },
        {
            question: "When was the first AI Summit held?",
            options: ["2020", "2010", "2023", "2024"],
            answer: "2023"
        },
        {
            question: "Machine learning is a ____ of AI",
            options: ["subset", "member", "mother", "art"],
            answer: "subset"
        },
        {
            question: "Which does not belong to the group?",
            options: ["Supervised learning", "network learning",
                "reinforcement learning", "semi-supervised learning"],
            answer: "network learning"
        },
        {
            question: "What is the process of discovering patterns and knowledge from large amounts of data",
            options: ["Machine learning", "Data mining",
                "Artificial Intelligence", "Artificial Interferences"],
            answer: "Data Mining"
        },
        {
            question: "What is ML?",
            options: ["Alien Intelligence", "Machine Learning",
                "Monster Learning", "Mechanical Levitation"],
            answer: "Machine Learning"
        },
        {
            question: "ML utilizes algorithms and data?",
            options: ["No", "Yes", "Maybe", "I don't know"],
            answer: "Yes"
        },
        {
            question: "Is a clear distinction between AI and Robots?",
            options: ["No", "Yes", "Maybe", "I don't know"],
            answer: "Yes"
        },
        {
            question: 'Is your boss right when he says, "Automation and AI are the same thing"',
            options: ["No", "Yes", "Maybe", "I don't know"],
            answer: "No"
        }
    ]

    // show the instruction section at first
    instructionSect.style.display = "block";

    // hide the quiz container at first
    quizContainer.style.display = "none";

    // add a click event listener to the start quiz button
    startQuizButton.addEventListener("click", function () {
        // hide the instruction section
        instructionSect.style.display = "none";
        // show the quiz container
        quizContainer.style.display = "block";
        // start the quiz by displaying the first question
        displayQuestionAndAnswers(currentQuestionIndex);
    });

    // add click event to each answer button
    answerButtons.forEach(button => {
        button.addEventListener("click", function () {
            // remove 'active' class from all buttons
            answerButtons.forEach(btn => btn.classList.remove("active"));
            // add 'active' class to the clicked button
            this.classList.add("active");
            // store the selected answer
            selectedAnswer = this.textContent;
        });
        
    });

//Tip from the Love Maths Lesson
    // add an event listener to handle pressing the Enter key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();  // Call the checkAnswer function when Enter is pressed
        }
    });

    /** Function to display the current question and its answers
     *  */
    function displayQuestionAndAnswers(index) {
        // display the question
        document.getElementById("question").innerText = quiz[index].question;

        // Display the answer options by updating button text
        quiz[index].options.forEach((option, i) => {
            answerButtons[i].innerHTML = option;
            answerButtons[i].classList.remove("active"); // Reset active class
        });
    }

    /** Function to check the user's answer
     */
    function checkAnswer() {
        const selectedOption = document.querySelector(".answer-btn.active");

        // Check if an answer was selected
        if (!selectedOption) {
            alert("Please select an answer!");
            return; // Don't proceed if no answer is selected
        }

        // Get the selected answer
        let selectedAnswer = selectedOption.innerHTML;

        // Check if the selected answer is correct
        if (selectedAnswer === quiz[currentQuestionIndex].answer) {
            ++score; // Increment score if the answer is correct
        }

        // Update the score display
        document.getElementById("score-text").innerText = `Score: ${score}`;

        // Move to the next question
        nextQuestion();
    }

    /**Function to move to the next question
     */
    function nextQuestion() {
        currentQuestionIndex++; // Increment the question index

        // Check if there are more questions to display
        if (currentQuestionIndex < quiz.length) {
            displayQuestionAndAnswers(currentQuestionIndex); // Show the next question
        } else {
            displayResults(); // If no more questions, show the results
        }
    }

    /**Function to display the results after the quiz ends
     */
    function displayResults() {
        // Hide the quiz container
        quizContainer.style.display = "none";
        // Display the results section
        const resultSection = document.getElementById("result-section");
        resultSection.style.display = "flex";
        // Update the score display in the results section
        document.getElementById("analytics").innerText = `Your final score is ${score} out of ${quiz.length}`;
    }

    // Add event listener to the submit button to check the answer
    submitButton.addEventListener("click", checkAnswer);
});

