export interface IProduct {
  price: number;
  count: number;
  color: string;
}

export interface IDelivery {
  isAvailable: boolean;
  from: string;
  to: string;
  date: Date;
}
