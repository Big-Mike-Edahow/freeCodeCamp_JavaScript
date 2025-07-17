// script.js
// Build a Gradebook App

function getAverage(scores) {
    let sum = scores.reduce((p, c) => p + c, 0);
    let index = scores.length;
    let average = sum / index;
    return average;
}

function getGrade(score) {
    if (score == 100) {
        return "A+";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    if (getGrade(score) != "F") {
        return true;
    } else return false;
}

function studentMsg(scores, score) {
    if (hasPassingGrade(score)) {
        return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`;
    } else {
        return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`;
    }
}
