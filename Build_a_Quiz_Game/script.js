// script.js
// Build a Quiz Game

const questions = [
    {
        category: "Literature",
        question: "Who wrote the fantasy novel Pawn of Prophecy?",
        choices: ["Terry Brooks", "David Eddings", "JRR Tolkien"],
        answer: "David Eddings"
    },

    {
        category: "Programming Languages",
        question: "Which programming language was developed at Google?",
        choices: ["Python", "C#", "Go"],
        answer: "Go"
    },

    {
        category: "US State Capitals",
        question: "What is the capital of Idaho?",
        choices: ["Idaho Falls", "Boise", "Moscow"],
        answer: "Boise"
    },

    {
        category: "Movies",
        question: "Which movie is one of the Alien prequels?",
        choices: ["Prometheus", "Event Horizon", "Passengers"],
        answer: "Prometheus"
    },

    {
        category: "Energy Drinks",
        question: "Which energy drink claims to give you wings?",
        choices: ["Green Tea HP", "Monster", "Red Bull"],
        answer: "Red Bull"
    },
];

function getRandomQuestion(questions) {
    const questionsIndex = Math.floor(Math.random() * questions.length);
    return questions[questionsIndex];
}

function getRandomComputerChoice(choices) {
    const choicesIndex = Math.floor(Math.random() * choices.length);
    return choices[choicesIndex];
}

function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return ("The computer's choice is wrong. The correct answer is: " + questionObj.answer);
    }
}
