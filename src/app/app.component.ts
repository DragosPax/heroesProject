import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title:string="Homepage"
  defaultName:string="Dragos"
  page:string="Form";
  toggle:number=0;

  valoare:string=""

  constructor(private router:Router){}

  navigate(){
    if(this.toggle===0)
    {
      this.router.navigate(['/form'])
     this.toggle=1;
     this.page="Dashboard"
    }
    else {
      this.router.navigate(['/dashboard'])
      this.toggle=0;
      this.page="Form"
    }
  }

  onNotify(val:string){
    this.valoare=val;

    console.log(this.valoare)

  }

}
