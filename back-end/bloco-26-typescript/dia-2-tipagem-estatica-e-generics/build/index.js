"use strict";
var color;
(function (color) {
    color["preta"] = "preta";
    color["branca"] = "branca";
    color["vermelha"] = "vermelha";
    color["prata"] = "prata";
})(color || (color = {}));
var direction;
(function (direction) {
    direction["RIGHT"] = "right";
    direction["LEFT"] = "left";
    direction["CENTER"] = "center";
})(direction || (direction = {}));
class Car {
    constructor(brand, color, doors, isTurnedOn, speed, direction) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
        this.isTurnedOn = isTurnedOn;
        this.speed = speed;
        this.carDirection = direction;
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
    turnLeft() {
        this.carDirection = direction['LEFT'];
    }
    turnRight() {
        this.carDirection = direction['RIGHT'];
    }
}
/*
const myCar = new Car('Mercedes', color['branca'], 4, false, 0, direction['CENTER']);
console.log(myCar);
myCar.turnOn();
myCar.speedUp();
console.log(myCar);
*/
const uberCar = new Car('volkswagen', color['prata'], 4, false, 0, direction['CENTER']);
uberCar.turnOn();
uberCar.turnLeft();
uberCar.turnLeft();
uberCar.turnRight();
uberCar.turnRight();
uberCar.turnRight();
uberCar.turnOff();
console.log(uberCar);
