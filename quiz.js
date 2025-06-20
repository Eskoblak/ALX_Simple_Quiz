// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Handle case when no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 5: Compare the user's answer to the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
