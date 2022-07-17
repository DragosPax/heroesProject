import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {


  constructor(private http:HttpClient) { }

    getDrink(name:string):Observable<any>
    {
      const url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+name;
      return this.http.get(url)
    }
}
