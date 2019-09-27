
var count = 0;
var counter = 25;

var bird = document.getElementById('bird');
var horse = document.getElementById('horse');
var squirrel = document.getElementById('squirrel');
var monkey = document.getElementById('monkey');
var tiger = document.getElementById('tiger');
var eagle = document.getElementById('eagle');
var cursor = document.getElementById('target');
var forest = document.getElementById('forest');
var animal = document.getElementsByClassName("animal");
var elems = document.getElementsByClassName("animal");

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

$(document).mousedown(function (event) {
    var audio = $(".game-container .gun")[0];
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    //console.log('clicked');
});


function setRandomHorse() {
    horse.className = "animate";
    horse.style.display = 'block';
}

function setRandom() {
    bird.className = "animate";
    squirrel.className = "animate";
    bird.style.display = 'block';
    squirrel.style.display = 'block';
}

function setRandomTiger() {
    tiger.className = "animate";
    tiger.style.display = 'block';
}

function setRandomEagle() {
    eagle.className = "animate";
    eagle.style.display = 'block';
}

var loop = setInterval(function () {
    setRandomHorse();
}, 5000);


var loop1 = setInterval(function () {
    setRandom();
}, 2000);

var setTiger = setInterval(function () {
    setRandomTiger();
}, 10000);

var setEagle = setInterval(function () {
    setRandomEagle();
}, 15000);

function clickEffect(e) {
    var d = document.createElement("img");
    d.src = '../../images/explosion1.png';
    d.style.height = '20%';
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    forest.appendChild(d);
    d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d);
    }.bind(this));
}

document.addEventListener('click', clickEffect);


for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', function () {
        this.style.display = 'none';
        if (counter != 0) {
            count++;
            document.getElementById('score').innerHTML = "Score:" + count;
        }
    })
}

var tt = setInterval(function () {
    startTime()
}, 1000);


function startTime() {
    if (counter == 0) {
        clearInterval(tt);
        clearInterval(loop);
        clearInterval(loop1);
        clearInterval(setTiger);
        clearInterval(setEagle);
        document.getElementById("dashboard").className = "result";
        document.getElementById('value').innerHTML = "Final Score:" + count;
        count = 0;
        document.getElementById('score').innerHTML = "Score:" + count;
        forest.style.opacity = '0.3';
    } else {
        counter--;
        document.getElementById('timer').innerHTML = "Timer:" + counter;
    }

}



