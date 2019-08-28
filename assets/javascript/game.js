function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function checkWinLose (x, y) {
    if (x === y) {
        return "win";
    } else if (x > y) {
        return "lose"
    } else {
        return "continue"
    }
}

// Set random number values for goal and each crystal
var goalNumber = randomNumber(19,120);
var crys1Val = randomNumber(1,12);
var crys2Val = randomNumber(1,12);
var crys3Val = randomNumber(1,12);
var crys4Val = randomNumber(1,12);
console.log("Goal: " + goalNumber);
console.log("Crystal 1: " + crys1Val);
console.log("Crystal 2: " + crys2Val);
console.log("Crystal 3: " + crys3Val);
console.log("Crystal 4: " + crys4Val);

// Initialize variables
var wins = 0;
var losses = 0;
var score = 0;

// Write values
$('#goal').text(goalNumber);
$('#score').text(score);
$('#wins').text(wins);
$('#losses').text(losses);

$(document).ready(function () {
    
    $('img').on("click", function() {
        // Check which crystal was clicked and add the value to the score
        if ($(this).is('#crystal1')) {
            score += crys1Val;
            $('#score').text(score);
        } else if ($(this).is('#crystal2')) {
            score += crys2Val;
            $('#score').text(score);
        } else if ($(this).is('#crystal3')) {
            score += crys3Val;
            $('#score').text(score);
        } else if ($(this).is('#crystal4')) {
            score += crys4Val;
            $('#score').text(score);
        } 

        // Check for win, lose, continue
        check = checkWinLose(score, goalNumber);
        if (check == "win") {
            wins++;
            $('#wins').text(wins);
        } else if (check == "loses") {
            lose++;
            $('#losses').text(losses);
        }

    });

});
