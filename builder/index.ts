import { CarBuilderInterface } from './interfaces/builder.interface';

class CarBuilder implements CarBuilderInterface {
  private car: any;

  begin() {
    this.car = {};
    return this;
  }

  setSeats(count: number) {
    this.car.seats = count;
    return this;
  }

  setEngine(type: string) {
    this.car.engine = type;
    return this;
  }

  setGPS() {
    this.car.GPS = true;
    return this;
  }

  setTripComputer() {
    this.car.tripComputer = true;
    return this;
  }

  build() {
    return this.car;
  }
}

const newCar = new CarBuilder().begin().setEngine('v8').setGPS().setSeats(5).build();
const newCar2 = new CarBuilder().begin().setTripComputer().setEngine('v8').setGPS().setSeats(5).build();

console.log(newCar);
console.log(newCar2);

class ManualCarBuilder implements CarBuilderInterface {
  private car: any;

  begin() {
    this.car = {};
    return this;
  }

  setSeats(count: number) {
    this.car.seats = count;
    return this;
  }

  setEngine(type: string) {
    this.car.engine = type;
    return this;
  }

  setGPS() {
    this.car.GPS = true;
    return this;
  }

  setTripComputer() {
    this.car.tripComputer = true;
    return this;
  }

  setColor(color: string) {
    this.car.color = color;
    return this;
  }

  setSidewall(type: string) {
    this.car.sidewall = type;
    return this;
  }

  build() {
    return this.car;
  }
}

const newManualCar = new ManualCarBuilder()
  .begin()
  .setColor('green')
  .setEngine('latest')
  .setGPS()
  .setSeats(5)
  .setTripComputer()
  .setSidewall('any')
  .build();

console.log(newManualCar);

class DirectorBuilderCar {
  constructor(private builder: CarBuilderInterface) {}

  makeCheapCar() {
    return this.builder.begin().setEngine('old').setSeats(2).setTripComputer().build();
  }

  makeExpensiveCar() {
    return this.builder.begin().setEngine('latest').setGPS().setSeats(4).setTripComputer().build();
  }
}

const cheapCar = new DirectorBuilderCar(new CarBuilder()).makeCheapCar();
const luxuryCar = new DirectorBuilderCar(new CarBuilder()).makeExpensiveCar();

const cars = {
  cheapCar,
  luxuryCar,
};

console.log(cars);
