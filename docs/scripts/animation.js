//Animation!
const def = [0,0,0,10,20,-10,-20,0];
const animationButton = document.getElementById('animationToggle');
const turboButton = document.getElementById('turboToggle');
var poss = [0,0,0,10,20,-10,-20,0];
var doAnimate = true;
var doTurbo = false;

function updateBackground() {
    document.body.style.backgroundPosition = 
                `${poss[0]}px ${poss[1]}px, ${poss[2]}px ${poss[3]}px, ${poss[4]}px ${poss[5]}px, ${poss[6]}px ${poss[7]}px`;
            
}

function randomizer() {
    if (!(doAnimate)) {
        return
    }
    var choice = Math.floor(Math.random()*7);
    var sign = Math.pow(-1, Math.floor(Math.random()*1));
    poss[choice] = poss[choice] + (10*sign);

    if (poss[choice] > 20) {
        poss[choice] = 0;
    } else if (poss[choice] < -20) {
        poss[choice] = 0;
    }
    updateBackground();
}

function animationToggle() {
    doAnimate = !(doAnimate);
    if (doAnimate) {
        animationButton.innerHTML = "<b>Disable Animations</b>";
    } else {
        animationButton.innerHTML = "<b>Enable Animations</b>";
        poss = def
        updateBackground();
    }
}

function turboToggle() {
    doTurbo = !(doTurbo)
    if (doTurbo) {
        clearInterval(inter);
        inter = window.setInterval(randomizer, 1800);
        turboButton.innerHTML = "<b>Turbo Mode!</b>";
    } else {
        clearInterval(inter);
        inter = window.setInterval(randomizer, 200);
        turboButton.innerHTML = "<b>Normal Mode</b>";
    }
}

animationButton.addEventListener('click', animationToggle);
turboButton.addEventListener('click', turboToggle);

var inter = window.setInterval(randomizer, 1800);
