import { order } from "./order.model";
import { User } from "./User.Model";

export class Invoice{
        id:number;
        date:Date;
        amount:number;
        status:String;
        user:User;
        orders:order[];
    public constructor(
        id:number,
        date:Date,
        amount:number,
        status:String,
        user:User,
        orders:order[]
    ){}
}