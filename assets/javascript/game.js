function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function checkWinLose (x, y) {
    if (x == y) {
        return "win";
    } else if (x > y) {
        return "lose"
    } else {
        return "continue"
    }
}

function gameStart () {
    // Set random number values for goal and each crystal
    var goalNumber = randomNumber(19,120);
    var crys1Val = randomNumber(1,12);
    var crys2Val = randomNumber(1,12);
    var crys3Val = randomNumber(1,12);
    var crys4Val = randomNumber(1,12);
    var score = 0;

    // Log values
    console.log("Goal: " + goalNumber);
    console.log("Crystal 1: " + crys1Val);
    console.log("Crystal 2: " + crys2Val);
    console.log("Crystal 3: " + crys3Val);
    console.log("Crystal 4: " + crys4Val);

    // Write values to document
    $('#goal').text(goalNumber);
    $('#score').text(score);

    return { goalNumber : goalNumber, crys1Val : crys1Val, crys2Val : crys2Val, crys3Val : crys3Val, crys4Val : crys4Val, score : score };
}

data = gameStart();
var goalNumber = data.goalNumber;
var crys1Val = data.crys1Val;
var crys2Val = data.crys2Val;
var crys3Val = data.crys3Val;
var crys4Val = data.crys4Val;
var score = data.score;

// Initialize variables and write to document
var wins = 0;
var losses = 0;
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
            // Reset game
            data = gameStart();
            goalNumber = data.goalNumber;
            crys1Val = data.crys1Val;
            crys2Val = data.crys2Val;
            crys3Val = data.crys3Val;
            crys4Val = data.crys4Val;
            score = data.score;
        } else if (check == "lose") {
            losses++;
            $('#losses').text(losses);
            // Reset game
            data = gameStart();
            goalNumber = data.goalNumber;
            crys1Val = data.crys1Val;
            crys2Val = data.crys2Val;
            crys3Val = data.crys3Val;
            crys4Val = data.crys4Val;
            score = data.score;
        }

    });

});
