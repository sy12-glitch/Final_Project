import {User} from 'src/Models/User.Model';
import {Product} from 'src/Models/products.model';

export class order
{
id:number;
product:Product;
user:User;
quantity:number;
}