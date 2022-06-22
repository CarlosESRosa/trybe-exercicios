enum color {
  preta = 'preta',
  branca = 'branca',
  vermelha = 'vermelha',
  prata = 'prata'
}

class Car {
  brand: string;
  color: color;
  doors: number;
  isTurnedOn: boolean;
  speed: number;

  constructor(brand: string, color: color, doors: number, isTurnedOn: boolean, speed: number){
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.isTurnedOn = isTurnedOn;
    this.speed = speed;
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
}

const myCar = new Car('Mercedes', color['branca'], 4, false, 0);

console.log(myCar);
myCar.turnOn();
myCar.speedUp();
myCar.speedUp();
myCar.speedUp();
console.log(myCar);
