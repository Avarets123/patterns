import { IFactory } from './interfaces/factory.interface';
import { IDelivery, IProduct } from './interfaces/products.interface';

class IPhoneProduct implements IProduct {
  price: number;
  count: number;
  color: string;

  constructor(price: number, count: number, color: string) {
    this.color = color;
    this.count = count;
    this.price = price;
  }
}

class IPhoneDelivery implements IDelivery {
  public date: Date = new Date();

  constructor(public isAvailable: boolean, public from: string, public to: string) {}
}

class IPhoneFactory implements IFactory {
  createProduct(price: number, count: number, color: string): IProduct {
    return new IPhoneProduct(price, count, color);
  }
  createDelivery(isAvailable: boolean, from: string, to: string): IPhoneDelivery {
    return new IPhoneDelivery(isAvailable, from, to);
  }
}

class ComputerProduct implements IProduct {
  constructor(public price: number, public count: number, public color: string) {}
}

class ComputerDelivery implements IDelivery {
  public date: Date = new Date();

  constructor(public isAvailable: boolean, public from: string, public to: string) {}
}

class ComputerFactory implements IFactory {
  createProduct(price: number, count: number, color: string): IProduct {
    return new ComputerProduct(price, count, color);
  }
  createDelivery(isAvailable: boolean, from: string, to: string): IPhoneDelivery {
    return new ComputerDelivery(isAvailable, from, to);
  }
}

class Application {
  private factory: IFactory;
  product: IProduct;

  constructor(factory: IFactory) {
    this.factory = factory;
  }

  createProduct(price: number, count: number, color: string): void {
    this.product = this.factory.createProduct(price, count, color);
  }

  changeFactory(factory: IFactory): void {
    this.factory = factory;
  }
}

const app = new Application(new IPhoneFactory());
app.createProduct(1500, 4, 'black');
console.log(app);
app.changeFactory(new ComputerFactory());
app.createProduct(3432, 22, 'green');
console.log(app);
