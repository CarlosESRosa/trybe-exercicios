"use strict";
var color;
(function (color) {
    color["preta"] = "preta";
    color["branca"] = "branca";
    color["vermelha"] = "vermelha";
    color["prata"] = "prata";
})(color || (color = {}));
class Car {
    constructor(brand, color, doors, isTurnedOn, speed) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
        this.isTurnedOn = isTurnedOn;
        this.speed = speed;
    }
    honk() {
        console.log('acionando BUZINA BUMMMMMMMMMMMMMMMMMMMMMMMMMMM');
    }
    openTheDoor() {
        console.log('Abriu uma porta');
    }
    closeTheDoor() {
        console.log('Abriu uma porta');
    }
    turnOn() {
        this.isTurnedOn = true;
    }
    turnOff() {
        this.isTurnedOn = false;
    }
    speedUp() {
        this.speed += 10;
    }
    speedDown() {
        this.speed -= 10;
    }
    stop() {
        this.speed = 0;
    }
    turn() {
        console.log('virou o carro');
    }
}
const myCar = new Car('Mercedes', color['branca'], 4, false, 0);
console.log(myCar);
myCar.turnOn();
myCar.speedUp();
myCar.speedUp();
myCar.speedUp();
console.log(myCar);
