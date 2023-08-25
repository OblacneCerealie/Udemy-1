var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [ ];
var userClickedPattern = [ ]; 
var gamePlaying = false;
var level = 0;

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
}, 100);

}


$(document).keypress(function(event) {
    if (!gamePlaying) {
        nextSequence();
        gamePlaying = true;
        $("#level-title").text("Level " + level);
    }
});

function nextSequence() {

    userClickedPattern = [];

    $("#level-title").text("Level " + level);

    level++;

    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);

    animatePress(randomChosenColour);

    }

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    
        if (userClickedPattern.length === gamePattern.length){
        
        setTimeout(function () {
            nextSequence();
        }, 1000);
    
            }
    
    } else {
        
        var failAudio = new Audio("sounds/wrong.mp3");
        
        failAudio.play();
        
        $("body").addClass("game-over");
    
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        
        $("h1#level-title").html("<strong>Game Over! Press a key to restart!</strong>");
        
        gamePlaying = false;
        
        level = 0;
        
        gamePattern = [];
    
    }

    
}
