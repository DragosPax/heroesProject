import { TimePicker } from "./time-picker";

export interface Hero{
    id:number;
    name:string;
    age:string;
    power:string;
    time:TimePicker;
    date:{
        day:number;
        month:number;
        year:number
    }
    cars:boolean;
    

}