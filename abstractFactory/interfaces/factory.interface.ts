import { IDelivery, IProduct } from './products.interface';

export interface IFactory {
  createProduct: (...any: any) => IProduct;
  createDelivery: (...any: any) => IDelivery;
}
