import { Address } from './address';
import { User } from './user';

export class Property{
  constructor(

    public propertyId: number,
    public name: string,
    public address: Address,
    public coordinateURL: string,
    public ownerList: Set<User>,
    public price: number


  ) { }
}