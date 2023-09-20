
gamePattern = [];

buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColor = buttonColours[randomNumber];

gamePattern.push(randomChosenColor);
console.log(gamePattern);

for (let i = 0; i < buttonColours.length; i++) {
    if(randomChosenColor === buttonColours[i]){
        $("#" + buttonColours[i]).fadeOut(10).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/'+ buttonColours[i] + ".mp3");
            audio.play();
    }
    
}
 
}
 
var gotClicked=$(".btn").on("click", function(){

    var userChosenColor = $(this).attr("id");
    console.log(userChosenColor)
   
   
});







