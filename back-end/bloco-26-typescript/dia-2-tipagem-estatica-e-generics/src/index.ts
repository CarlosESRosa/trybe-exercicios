enum color {
  preta = 'preta',
  branca = 'branca',
  vermelha = 'vermelha',
  prata = 'prata'
}
enum direction {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

class Car {
  brand: string;
  color: color;
  doors: number;
  isTurnedOn: boolean;
  speed: number;
  carDirection: direction;

  constructor(brand: string, color: color, doors: number, isTurnedOn: boolean, speed: number, direction: direction){
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.isTurnedOn = isTurnedOn;
    this.speed = speed;
    this.carDirection = direction;
  }

  honk(): void {
    console.log('acionando BUZINA BUMMMMMMMMMMMMMMMMMMMMMMMMMMM');
  }

  openTheDoor(): void {
    console.log('Abriu uma porta');
  }

  closeTheDoor(): void {
    console.log('Abriu uma porta');
  }

  turnOn(): void {
    this.isTurnedOn = true;
  }

  turnOff(): void {
    this.isTurnedOn = false;
  }

  speedUp(): void {
    this.speed += 10;
  }

  speedDown(): void {
    this.speed -= 10;
  }

  stop(): void {
    this.speed = 0;
  }

  turn(): void {
    console.log('virou o carro');
  }

  turnLeft(): void {
    this.carDirection = direction['LEFT']
  }

  turnRight(): void {
    this.carDirection = direction['RIGHT']
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
 