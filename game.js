// Store the colors in an array and randomly select one
const buttonColors = ["blue", "green", "yellow", "red"];
let gamePattern = []

// Generate
function nextSequence() {
    let randomNumber = Math.ceil(Math.random() * 3);
    return randomNumber

    let randomChosenColor = buttonColors[randomNumber];
}

console.log(nextSequence())












// alert('OKAY!')