buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence(){
var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColor = buttonColours[randomNumber];

console.log(randomChosenColor);
};


