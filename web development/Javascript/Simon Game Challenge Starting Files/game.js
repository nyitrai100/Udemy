
gamePattern = [];

buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColor = buttonColours[randomNumber];

gamePattern.push(randomChosenColor);
console.log(gamePattern);
};


