let buttonColours=["red", "blue", "green", "yellow"] 
let gamePattern=[]
let userClickedPattern=[]
let started=false
let level=0

function nextSequence() {
    userClickedPattern = []
    level++
    let randomNumber=Math.floor(Math.random()*4)
    let randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    //console.log(randomChosenColour)
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
    $('h1').text(`Level ${level}`)
}

$('.btn').click( (ev)=> {
    userChosenColour=ev.target.id //ou userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour)
    animatePress(userChosenColour)
    playSound(userChosenColour)
    checkAnswer(userClickedPattern.length-1);

})

function playSound(name) {
    let audio = new Audio('./sounds/'+name+'.mp3')
    audio.play()
}

function animatePress(currentColour) {
    $('#'+currentColour).addClass('pressed')
    setTimeout(() => {    
        $('#'+currentColour).removeClass('pressed')
      }, 100)
}

$(document).keypress(ev=> {
    if (!started) {
        nextSequence()
        started=true
    }
})

function checkAnswer(currentLevel) {
    console.log(gamePattern)
    console.log(userClickedPattern)
    console.log(currentLevel)
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    } else {
        playSound('wrong')
        $('body').addClass('game-over')
        setTimeout(() => {    
            $('body').removeClass('game-over')
          }, 200)
          $('h1').text('Game Over, Press Any Key to Restart')
          startOver()
    }
}

function startOver() {
    level=0
    gamePattern=[]
    started=false
}