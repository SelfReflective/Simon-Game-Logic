buttonColors = ["red", "blue", "green", "yellow"];

gamePattern = []; // Pattern made by the Game
userClickedPattern = []; // Pattern klicked by the user

var started = false;
var level = 0;

$(document).keydown(function () {
    if (!started) { // If started === false 
        $("#level-title").text("Level " + level);
        nextSequence(); // Starts sequence
        started = true;
    };
});

// Functions wich saves the id of the pressed Buttonelement

$(".btn").on("click", function () {

    var userChosenColour = $(this).attr("id"); // saves the pressed elements id with its corresponding color (yellow,green,blue,red)
    userClickedPattern.push(userChosenColour); //the ID Value gets pushed into the userClickedPattern

    checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel) { // Function which checks User Answers

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200)
        $("#level-title").text("Game Over, press any key to restart");
        startOver();
    }
}

// Functions which generates a random Number and saves it into a var

function nextSequence() { //returns the random Number

    userClickedPattern = []; //User clicked pattern gets reset

    $("#level-title").text("Level " + level);

    level++;

    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColor = buttonColors[randomNumber]; // Selects a random color from the "buttonsColors" Array.
    gamePattern.push(randomChosenColor); // Gamepattern gets pushed the random picked color

    $("#" + randomChosenColor).fadeOut().fadeIn(); // the Color is SET here exa. "RED" its fixed // Fades a random Tile in and out.
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

// Functions wich plays sounds according to the button pressed.

$(".btn").on("click", function () {


    var clicked = this.id;

    if (clicked === "red") {

        var redSound = new Audio("sounds/red.mp3");
        redSound.play();
    }
    else if (clicked === "blue") {

        var blueSound = new Audio("sounds/blue.mp3");
        blueSound.play();

    }
    else if (clicked === "green") {

        var greenSound = new Audio("sounds/green.mp3");
        greenSound.play();
    }
    else if (clicked === "yellow") {

        var yellowSound = new Audio("sounds/yellow.mp3");
        yellowSound.play();
    }
    else {

        var wrongSounds = new Audio("sounds/wrong.mp3");
        wrongSounds.play();
    }

    checkAnswer(userClickedPattern, length - 1);
});


// Function to animate the buttons when clicked

$(".btn").on("click", function () {

    var clicked = this.id;

    if (clicked === "red") {

        $("#" + clicked).addClass("pressed");
        setTimeout(function () {
            $("#" + clicked).removeClass("pressed")
        }, 100);

    }
    else if (clicked === "blue") {

        $(this).addClass("pressed");
        setTimeout(function () {
            $("#" + clicked).removeClass("pressed")
        }, 100);

    }
    else if (clicked === "green") {

        $(this).addClass("pressed");
        setTimeout(function () {
            $("#" + clicked).removeClass("pressed")
        }, 100);
    }
    else if (clicked === "yellow") {

        $(this).addClass("pressed");
        setTimeout(function () {
            $("#" + clicked).removeClass("pressed")
        }, 100);
    }
    else {

        $(this).addClass("pressed");
        setTimeout(function () {
            $(this).removeClass("pressed")
        }, 100);
    }
});

/* switch (randomChosenColor) {

    case "red":
        var redSound = new Audio("sounds/red.mp3");
        redSound.play();
        break;
    case "blue":
        var blueSound = new Audio("sounds/blue.mp3");
        blueSound.play();
        break;
    case "green":
        var greenSound = new Audio("sounds/green.mp3");
        greenSound.play();
        break;
    case "yellow":
        var yellowSound = new Audio("sounds/yellow.mp3");
        yellowSound.play();
        break;
    default:
        var wrongSounds = new Audio("sounds/wrong.mp3");
        wrongSounds.play();
        break;
} */
