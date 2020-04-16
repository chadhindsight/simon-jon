// Store the colors in an array and randomly select one
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

// Keep track of whether the game has started or not
let started = false
let level = 0;
// 7th iteration
$(document).keypress(function () {
    if (!started) {

        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    //When a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColor);
    animatePress(userChosenColor);

});

function nextSequence() {

    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    $('button').click(() => playSound(randomChosenColor));
}

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}
// function animatePress(currentColor) {
//     $(`#${currentColor}`).addClass("pressed")
// }
function animatePress(currentColor) {

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $(`#${currentColor}`).addClass("pressed");

    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}




// alert('OKAY!')