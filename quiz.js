const quizContainer = document.getElementById('quiz');
const submitButton = document.querySelector('button');

const questions = [
    {
        question: ' What does the acronym "C" stand for in C programming ?',
        options: [' Complex','Compiled','Computer','Common'],
        correctAnswer:'Complex'
    },
    {
        question: 'What is the purpose of the `sizeof` operator in C?',
        options: ['Returns the size of a variable', 'Returns the size of a variable', 'Concatenates strings', 'Converts data types'],
        correctAnswer: 'Returns the size of a variable'
    },
    {
        question: 'How do you declare a constant in C?',
        options: ['#define', 'const', 'var', 'let'],
        correctAnswer: '#define'
    },
	{
        question: 'What is the format specifier for printing a float in C using `printf`?',
        options: [' %f', '%d', '%S', '%C'],
        correctAnswer: ' %f'
    },
	{
        question: 'Which of the following is a correct way to comment out multiple lines in C?',
        options: ['// This is a comment', '/* This is a comment */', '# This is a comment', ' This is a comment'],
        correctAnswer: ' /* This is a comment */'
    },
	{
        question: 'What does the `scanf` function in C do?',
        options: ['  Prints formatted text to the console',' Reads formatted input from the console','Allocates memory for a variable','Compares two strings'],
        correctAnswer:'Reads formatted input from the console'
    },
	{
        question: 'How is memory allocated for a dynamic array in C?',
        options: [' Using `malloc`', 'Using `new`', 'Using `allocate`', 'Arrays cannot be dynamically allocated in C'],
        correctAnswer: ' Using `malloc`'
    },
	{
        question: 'What is the purpose of the `break` statement in a switch statement?',
        options: [' Ends the loop', 'Exits the program', 'Jumps to the next case', 'Skips the current iteration'],
        correctAnswer: ' Jumps to the next case'
    },
	{
        question: 'In C, what is the difference between `++i` and `i++`?',
        options: [' No difference', '`++i` increments before the value is used', '`i++` increments after the value is used', '`++i` and `i++` are not valid expressions'],
        correctAnswer: ' `++i` increments before the value is used'
    },
	{
        question: 'What is the purpose of the `void` keyword in a function declaration in C?',
        options: ['Specifies that the function returns nothing', ' Declares a variable without assigning a value', 'Indicates an error in the program', 'Allows the function to take any number of arguments'],
        correctAnswer: '  Specifies that the function returns nothing'
    },
    // Add more questions as needed
];

function buildQuiz() {
    const output = [];

    questions.forEach((question, index) => {
        const options = question.options.map((option, i) => {
            return (
                `<label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>`
            );
        });

        output.push(
            `<div class="question">
                <h3>${question.question}</h3>
                ${options.join('')}
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function submitQuiz() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedAnswer) {
            if (selectedAnswer.value === question.correctAnswer) {
                score++;
            }
        }
    });

    alert(`Your Score: ${score}/${questions.length}`);
}

buildQuiz();
