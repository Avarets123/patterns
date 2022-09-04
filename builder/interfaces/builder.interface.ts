export interface CarBuilderInterface {
  begin(): CarBuilderInterface;
  setSeats(count: number): CarBuilderInterface;
  setEngine(type: string): CarBuilderInterface;
  setGPS(): CarBuilderInterface;
  setTripComputer(): CarBuilderInterface;
  build(): CarBuilderInterface;
}
