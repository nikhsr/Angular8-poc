import { NgFormSelectorWarning } from '@angular/forms';

export class User {
  constructor(
    public userId: number,
    public fName: string,
    public lName: string,
    public aadhar: string,
    public mobileNumber: string,
    public propertyId: number
  ) { }
}