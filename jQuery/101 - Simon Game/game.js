let buttonColours=["red", "blue", "green", "yellow"] 
let gamePattern=[]
let userClickedPattern=[]

function nextSequence() {
    let randomNumber=Math.floor(Math.random()*4)
    let randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    console.log(randomChosenColour)
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
}
nextSequence()

$('.btn').click( (ev)=> {
    userChosenColour=ev.target.id //ou userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)

})

function playSound(name) {
    let audio = new Audio('./sounds/'+name+'.mp3')
    audio.play()
}
