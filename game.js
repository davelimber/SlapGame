
// Global vars
var health = 100;
var slap = 1;
var punch = 10;
var kick = 20;
var hadouken = 50;
var hits = 0;


var Objects = function(name, item, description) {
    this.name = name;
    this.item = item;
    this.description = discription;
}

var items = {
    shield:new Item("Shield",0.3,"This is an awesome shield!"),
    sword:new Item("Sword",0.5,"Fantastic sword!"), 
    hammer:new Item("Hammer",0.25,"Great hammer!")
}


function onSlap() {
    if (health > 0) {
        health = health - slap;
        if (health == 0 || health < 0) {
            gameOver();
        } drawUpdateHealth();
    } else {
        gameOver();
    }
}



function onPunch() {
    if (health > 0) {
        health = health - punch;
        drawUpdateHealth();
    } else {
        gameOver();
    }
}



function onKick() {
    // console.log(health);
    if (health > 0) {
        health = health - kick;
        drawUpdateHealth();
    } else {
        gameOver();
    }
}



function onHadouken() {
    if (health > 0) {
        health = health - hadouken;
        drawUpdateHealth();
    } else {
        gameOver();
    }
}

function onReset() {
    health = 100;
    hits = 0;
    drawUpdateHealth();
}

function gameOver() {
    document.getElementById("health1").innerHTML = 'Game Over!';
    document.getElementById("health").innerHTML = 'Good Job!!';
}

function drawUpdateHealth() {
    hits++;
    document.getElementById("health").innerHTML = health;
    document.getElementById("hits").innerHTML = hits;
}