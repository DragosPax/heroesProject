import { Component, Input, OnInit } from '@angular/core';
import { UserSettings } from './data/user-settings';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

 @Input() userSettings:UserSettings={
    name:"",
    email:"",
    phone:"",
    age:"",
    occupation:"",
    subscription:false

  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const info=document.getElementById('info')
    if(info){
   info.style.display='block'}
   console.log(this.userSettings.name)
  }

}
