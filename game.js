
// Global vars
// var health = 100;
// var slap = 1;
// var punch = 10;
// var kick = 20;
// var hadouken = 50;
// var hits = 0;
// var player1 = '';
// var player2 = '';



var Target = function (health) {
    this.health = health;
    this.slap = 1;
    this.punch = 10
    this.kick = 20;
    this.hadouken = 50;
    this.hits = 0;

}

var p1 = new Target(100);
drawUpdateHealth();


// var Objects = function (name, item, description) {
//     this.name = name;
//     this.item = item;
//     this.description = description;
// }

// var items = {
//     shield: new Item("Shield", 0.3, "This is an awesome shield!"),
//     sword: new Item("Sword", 0.5, "Fantastic sword!"),
//     hammer: new Item("Hammer", 0.25, "Great hammer!")
// }


function onSlap() {
    if (p1.health > 0) {
        p1.health = p1.health - 1;
        p1.hits++;
        gameController();
    }
};



function onPunch() {
    if (p1.health > 0) {
        p1.health = p1.health - 10;
        p1.hits++;
        gameController();
    }
}



function onKick() {
    if (p1.health > 0) {
        p1.health = p1.health - 25;
        p1.hits++;
        gameController();
    }

}



function onHadouken() {
    if (p1.health > 0) {
        p1.health = p1.health - 50;
        p1.hits++;
        gameController();
    }

}

function onReset() {
    p1.health = 100;
    p1.hits = 0;
    console.log('reset ' + p1.health);
    document.getElementById("health1").innerHTML = '';
    drawUpdateHealth();
}


function zeroScreen() {
    if (p1.health < 0) {
        document.getElementById("health").innerHTML = 0;
    }

}

function gameOver() {
    console.log(p1.health);
    if (p1.health <= 0) {
        document.getElementById("health1").innerHTML = 'Game Over!';
        document.getElementById("health").innerHTML = 'Good Job!!';
    }
}

function drawUpdateHealth() {
    console.log('update ' + p1.health);
    document.getElementById("health").innerHTML = p1.health;
    document.getElementById("hits").innerHTML = p1.hits;
}

function gameController() {
    drawUpdateHealth();
    zeroScreen();
    gameOver();

}