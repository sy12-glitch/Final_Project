import {User} from 'src/Models/User.Model';
import {Product} from 'src/Models/products.model';

export class order
{
static id(id: any) {
  throw new Error('Method not implemented.');
}
id:number;
product:Product;
user:User;
quantity:number;
}