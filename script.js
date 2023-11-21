// Assume you have the user's marks and total marks
const userMarks = 85;
const totalMarks = 100;

// Function to update the progress bar and display user's marks
function updateResult() {
    const progressBar = document.getElementById("progress-bar");
    const percentage = document.getElementById("percentage");
    const marksElement = document.getElementById("marks");

    const userPercentage = (userMarks / totalMarks) * 100;

    progressBar.style.width = `${userPercentage}%`;
    percentage.innerText = `${userPercentage.toFixed(1)}%`;
    marksElement.innerText = `${userMarks}/${totalMarks}`;
}

// Call the updateResult function
updateResult();
