export class Address{
  constructor(
    public addressId: number,
    public streetName: string,
    public city: string,
    public state: string,
    public zipcode: string
  ) { }
}