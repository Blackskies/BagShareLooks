import Flight from "./flights";

interface BagUser {
  userName: string;
  firstName: string;
}

export default interface Bag {
  id?: any | null;
  numberOfBags: number;
  weightAvailable: string;
  price: number;
  flightInfo: Flight;
  userInfo: BagUser;
}
