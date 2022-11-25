/*><*/

function playSound(key) {
    switch(key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default: 
            break;
        
    }
}

function addAnimation(key) {
    document.querySelector("." + key).style.boxShadow = "none";

    function shadow() {
        document.querySelector("." + key).style.boxShadow = "inset 0 0 0 2000px rgba(31, 29, 30, 0.3)";
    }

    setTimeout(shadow, 100);
}

for(let i = 0; i < document.querySelectorAll(".subItem").length; i++) {
    document.querySelectorAll(".subItem")[i].addEventListener("click", function() {
        playSound(this.innerHTML);
        addAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    addAnimation(event.key);
})