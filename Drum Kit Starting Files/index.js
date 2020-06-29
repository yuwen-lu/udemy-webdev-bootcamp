var buttonElementsList = document.querySelectorAll(".drum");

for (var i = 0; i < buttonElementsList.length; i++) {
    buttonElementsList[i].addEventListener("click", function () {
        playMusic(this.textContent);
        buttonAnimation(this.textContent);
    });
}

document.addEventListener("keydown", function (e) {
    playMusic(e.key);
    buttonAnimation(e.key);
})


function playMusic(letter) {
    switch(letter) {
        case "w":
            var fileLocation = "./sounds/crash.mp3";
            break;
        case "a":
            var fileLocation = "./sounds/kick-bass.mp3";
            break;
        case "s":
            var fileLocation = "./sounds/snare.mp3";
            break;
        case "d":
            var fileLocation = "./sounds/tom-1.mp3";
            break;
        case "j":
            var fileLocation = "./sounds/tom-2.mp3";
            break;
        case "k":
            var fileLocation = "./sounds/tom-3.mp3";
            break;
        case "l":
            var fileLocation = "./sounds/tom-4.mp3";
            break;
        default:
                console.log(e.key);
    }
    var keyboardAudio = new Audio(fileLocation);
    keyboardAudio.play();
}

function buttonAnimation(letter) {
    var selectorName = "." + letter;
    document.querySelector(selectorName).classList.add("pressed");
    setTimeout(function() {
        document.querySelector(selectorName).classList.remove("pressed");
    }, 100);
    
}