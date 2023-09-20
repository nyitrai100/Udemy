
gamePattern = [];
userClickedPattern = [];

buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

function nextSequence(){

increaseLevel();
var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColor = buttonColours[randomNumber];

gamePattern.push(randomChosenColor);

for (let i = 0; i < buttonColours.length; i++) {
    if(randomChosenColor === buttonColours[i]){
        $("#" + buttonColours[i]).fadeOut(10).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(buttonColours[i]);
        animatePress(buttonColours[i]);
    }
    
}
   
}
 

var gotClicked = $(".btn").on("click", function(){
        increaseLevel();
       var userChosenColour= $(this).attr("id");
       userClickedPattern.push(userChosenColour);
       console.log(userClickedPattern);
       playSound(userChosenColour);
    
       animatePress(userChosenColour)
      
});


function playSound(input){
    var audio = new Audio('./sounds/'+ input + ".mp3");
    audio.play();
}



function animatePress(currentColour){
    $(".btn").removeClass("pressed");
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        
        $("#" + currentColour).removeClass("pressed")
        
    }, 100);
}



$(document).keypress(function(){
    nextSequence();
})

function increaseLevel(){
    $("h1").text("level" + " " + level);
    level++
 } 
