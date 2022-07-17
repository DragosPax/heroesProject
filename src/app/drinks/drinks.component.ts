import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  
  name:string=''
  img:string=''
  id:string=''

  constructor(private service:DrinkService) { }

  ngOnInit(): void {
  }
  getName(){
    document.getElementById('drink-name')!.innerText+="";
    const name=(<HTMLInputElement>document.getElementById('input-drink')).value;

    (<HTMLInputElement>document.getElementById('response'))!.style.display='block'
    this.service.getDrink(name).subscribe((data)=>this.showCocktail(data))
   
  }
  showCocktail(data:any){
    this.name=data.drinks[0].strDrink
    this.img=data.drinks[0].strDrinkThumb
    this.id=data.drinks[0].idDrink

    document.getElementById('drink-name')!.innerText+=this.name
    document.getElementById('drink-img')!.setAttribute('src',this.img)
    document.getElementById('drink-id')!.innerText+=this.id

  }

}
