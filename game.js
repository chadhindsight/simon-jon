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
    checkAnswer(userClickedPattern.length - 1);

});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColor);
}

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {
        startOver()
        console.log("wrong");
        //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }

}

function animatePress(currentColor) {
    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $(`#${currentColor}`).addClass("pressed");

    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}
// RESTART GAME
function startOver() {
    level = 0
    gamePattern = []
    started = false
}
// MODAL
$(".close-button").click(()=>{
    $(".modal").addClass('closed')
    let yeah = new Audio('sounds/yeah-instrumental.mp3');
    yeah.play()
    yeah.volume = 0.12
})
// YEAH!
// let jams = new Audio(`sounds/yeah-instrumental.mp3`)
// jams.play();
//  document.getElementsByTagName("audio").play()
// alert('OKAY!')
// MODAL STUFF