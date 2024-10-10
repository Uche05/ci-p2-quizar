/**
 * Wait for the DOM to finish loading
 */

//Tip from Love Maths Lesson

document.addEventListener("DOMContentLoaded", function () {

    const startQuizButton = document.getElementById("start-quiz");
    const instructionSect = document.querySelector(".instruction-sect");
    const quizContainer = document.querySelector(".quiz-container");
    const answerButtons = document.querySelectorAll(".answer-btn");
    const submitButton = document.getElementById("submit");


    let selectedAnswer = "";
    let score = 0;
    let currentQuestionIndex = 0;

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
            answer: "Data mining"
        },
        {
            question: "What is ML?",
            options: ["Alien Intelligence", "Machine Learning",
                "Monster Learning", "Mechanical Levitation"],
            answer: "Machine Learning"
        },
        {
            question: "Does ML utilize algorithms and data?",
            options: ["No", "Yes", "Maybe", "I don't know"],
            answer: "Yes"
        },
        {
            question: "Is there a clear distinction between AI and Robots?",
            options: ["No", "Yes", "Maybe", "I don't know"],
            answer: "Yes"
        },
        {
            question: 'Is your boss right when he says, "Automation and AI are the same thing"',
            options: ["No", "Yes", "Maybe", "I don't know"],
            answer: "No"
        }
    ];

    
    instructionSect.style.display = "block";

    quizContainer.style.display = "none";

    startQuizButton.addEventListener("click", function () {
        
        instructionSect.style.display = "none";
        
        quizContainer.style.display = "block";
        
        displayQuestionAndAnswers(currentQuestionIndex);
    });

    // add click event to each answer button : ChatGPT AIDED CODE
    answerButtons.forEach(button => {
        button.addEventListener("click", function () {
            
            answerButtons.forEach(btn => btn.classList.remove("active"));
            
            this.classList.add("active");
            
            selectedAnswer = this.textContent;
        });
        
    });

//Tip from the Love Maths Lesson
    
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();  
        }
    });

    /** Function to display the current question and its answers
     *  */
    function displayQuestionAndAnswers(index) {
        
        document.getElementById("question").innerText = quiz[index].question;

        
        quiz[index].options.forEach((option, i) => {
            answerButtons[i].innerHTML = option;
            answerButtons[i].classList.remove("active");
        });
    }

    /** Function to check the user's answer
     */
    function checkAnswer() {
        const selectedOption = document.querySelector(".answer-btn.active");

        // Check if an answer was selected
        if (!selectedOption) {
            alert("Please select an answer!");
            return;
        }

        let selectedAnswer = selectedOption.innerHTML;

        if (selectedAnswer === quiz[currentQuestionIndex].answer) {
            ++score;
        }
        else{
            document.getElementById("is-correct").innerText =(`Incorrect, the question was ${quiz[currentQuestionIndex].question} and the answer is ${quiz[currentQuestionIndex].answer}`);
        }

        document.getElementById("score-text").innerText = `Score: ${score}`;

        nextQuestion();
    }

    /**Function to move to the next question
     */
    function nextQuestion() {
        
        currentQuestionIndex++;

        if (currentQuestionIndex < quiz.length) {
            displayQuestionAndAnswers(currentQuestionIndex);
        } else {
            displayResults();
        }
    }

    /**Function to display the results after the quiz ends
     */
    function displayResults() {

        quizContainer.style.display = "none";

        const resultSection = document.getElementById("result-section");
        resultSection.style.display = "flex";

        document.getElementById("analytics").innerText = `Your final score is ${score} out of ${quiz.length}`;
    }


    submitButton.addEventListener("click", checkAnswer);
});

