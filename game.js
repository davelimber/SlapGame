
// Place in Game Service js file
var Target = function (health) {
    this.health = health;
    this.slap = 1;
    this.slapCounter = 0;
    this.punch = 10
    this.punchCounter = 0;
    this.kick = 20;
    this.kickCounter = 0;
    this.hadouken = 50;
    this.hadoukenCounter = 0;
    this.hits = 0;
    this.items = [];
    this.addMods = function () {
        sum = 1
        if (this.items.length == 0) { return 1; } //Return one if there are no items.
        for (var i = 0; i < this.items.length; i++) {
            item = p1.items[i].modifier;
            sum += item
            console.log(sum);
        }
        if (sum > 1) {
            sum = .5;
        }
        return sum;
        console.log(sum);
    }
    this.getReduction = function (reqCounter) {
         console.log('getreduction has been passed ' + reqCounter);
        var ans = p1.reqCounter;
        console.log('the ans ' + ans);
        
    }
}

var p1 = new Target(100);
drawUpdateHealth();
console.log('initial hits ' + p1.hits)

var Item = function (name, modifier, desc, numhits) {
    this.name = name;
    this.modifier = modifier;
    this.desc = desc;
    this.numhits = numhits;
}

var items = {
    shield: new Item("Shield", 0.3, "This is an awesome shield!", 2),
    helmet: new Item("Helmet", 0.5, "Fantastic helmet!", 4),
    armor: new Item("Armor", 0.25, "Great armor!", 5)
}


// Place in Game Controller js file

function onShield() {
  
    assignItem(items.shield);

}


function onHelmet() {

    assignItem(items.helmet);

};

function onArmor() {

    assignItem(items.armor);

};

function assignItem(x) {
    var itemToLoad = x
    var nameOfItem = x.name
    var counter = 0;
    if (p1.items.length == 0) {
        p1.items.push(x);

    } else {
// Check if item is already loaded
        for (var i = 0; i < (p1.items.length); i++) {
            console.log(p1.items[i]);
            if (p1.items[i].name == nameOfItem) {
                console.log('item eq name');
                console.log(p1.items[i]);
                counter++;
            }
        }
        if (counter == 0) {
            p1.items.push(x);
        }
    } console.log(p1.items.length);
};



function onSlap() {
    if (p1.health > 0) {
        p1.health -= p1.slap * addMod();
        p1.hits++;
        p1.slapCounter++;
        reduceMods('slapCounter');
        gameController();
    }
};



function onPunch() {
    if (p1.health > 0) {
        p1.health -= p1.punch * addMod();
        p1.hits++;
        p1.punchCounter++;
        gameController();
    }
}



function onKick() {
    if (p1.health > 0) {
        p1.health -= p1.kick * addMod();
        p1.hits++;
        p1.kickCounter++;
        gameController();
    }

}



function onHadouken() {
    if (p1.health > 0) {
        p1.health -= p1.hadouken * addMod();
        p1.hits++;
        p1.hadoukenCounter++;
        gameController();
    }

}

function reduceMods(x) {
var y = 0;
    if (x == 'slapCounter' && p1.slapCounter > 10) {
        p1.items.pop();
        console.log(p1.slapCounter + ' value of slap before check')
        p1.slapCounter = 0;
        console.log(p1.slapCounter + ' value of slap after check')
    } else if (x == 'kickCounter') {
        y = p1.kickCounter;
    } else if (x == 'punchCounter') {
        y = p1.punchCounter;
    } else if (x == 'hadoukenCounter') {
        y = p1.hadoukenCounter;
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

function addMod() {
    return (p1.addMods());
}

function gameController() {
    drawUpdateHealth();
    zeroScreen();
    gameOver();

}