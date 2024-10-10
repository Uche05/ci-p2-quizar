//Wait the DOM to finish loading

document.addEventListener("DOMContentLoaded", function() {
    // Select the elements that need to showcase after
    const startQuizButton = document.getElementById("start-quiz");
    const instructionSect = document.querySelector(".instruction-sect");
    const quizContainer = document.querySelector(".quiz-container");

    //hide the quiz container at first
    quizContainer.style.display = "none";

    //show the instructionSect at first
    instructionSect.style.display = "block";


    //add a click event listener to start quiz button
    startQuizButton.addEventListener("click", function() {

        //hide the instruction section
        instructionSect.style.display = "none";

        //show the quiz container
        quizContainer.style.display = "block";
    })
    
});


// lets start by making a question set which contains the answers as well


//we need a function that displays the question

//we need a function that checks the answer and tracks the user's score

// we need a function that tracks how many questions the user has made and to ensure the game stops after a certain number of questions have been answered

// a function that can make an analysis section after user has opted to check the analytics