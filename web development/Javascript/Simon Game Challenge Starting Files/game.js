
gamePattern = [];
userClickedPattern = [];
buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
var sequenceInProgress = false;


function nextSequence(){
    increaseLevel();
    userClickedPattern = [];
    sequenceInProgress = true;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    playPattern(gamePattern);


   
}
function playPattern(pattern) {
    var delay = 1000; 
    
    for (var i = 0; i < pattern.length; i++) {
        (function (index) {
            setTimeout(function () {
                var currentColor = pattern[index];
                $("#" + currentColor).fadeOut(100).fadeIn(100);
                playSound(currentColor);
                animatePress(currentColor);

                if (index === pattern.length - 1) {
                    sequenceInProgress = false;
                }
            }, delay * i);
        })(i);
    }
}

 

$(".btn").on("click", function(){
    if (started && !sequenceInProgress){
       var userChosenColour= $(this).attr("id");
       userClickedPattern.push(userChosenColour);
        // var clickedIndexOfColor= buttonColours.indexOf(userChosenColour);
       
        playSound(userChosenColour);
       animatePress(userChosenColour);
       var clickedIndexOfColor = userClickedPattern.length - 1; 
        checkAnswer(clickedIndexOfColor);
    }
});


function playSound(input){
    var audio = new Audio('./sounds/'+ input + ".mp3");
    audio.play()
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}

$(document).keypress(function(){
    if(!started){
        started = true;
        nextSequence();
    }
})

function increaseLevel(){
    level++
    $("h1").text("level " + level);
 } 


 function checkAnswer(currentLevel){
        if(userClickedPattern[currentLevel] !== gamePattern[currentLevel]){
            console.log("wrong");
            playSound("wrong");
            $("body").addClass("game-over");

            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();
            return;
        }
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
                
            }, 1000);
        }
      
 }

 function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
 }


