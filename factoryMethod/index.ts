interface IHouse {
  area: number;
  floor: number;
  editArea: (countM: number) => IHouse;
}

class City {
  houses: IHouse[] = [];

  addHouse(house: IHouse) {
    this.houses.push(house);
  }
}

class School implements IHouse {
  area: number;
  floor: number;
  learner: number;

  constructor(area: number, floor: number) {
    this.area = area;
    this.floor = floor;
  }

  editArea(countM: number): IHouse {
    this.area + countM;
    return this;
  }

  setLearner(count: number) {
    this.learner = count;
  }
}

class Hospital implements IHouse {
  area: number;
  floor: number;
  sicks: number;

  constructor(area: number, floor: number) {
    this.area = area;
    this.floor = floor;
  }

  editArea(countM: number): IHouse {
    this.area + countM;
    return this;
  }

  setSicks(count: number) {
    this.sicks = count;
  }
}

const moscow = new City();

const school1 = new School(300, 3);
const hospital1 = new Hospital(500, 4);

school1.setLearner(400);
hospital1.setSicks(1000);
moscow.addHouse(school1);
moscow.addHouse(hospital1);

console.log(moscow);
