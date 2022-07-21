import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private heroService: HeroService,private router:Router) {}
  //heroes: Hero[] = [];

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(3),]            
    ],
      power: ['', [Validators.required]],
      cars: [false, [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
     
      
    });
  }

  add(): void {
    
    const hero = this.myForm.getRawValue() as Hero;
  
    console.log( 'this is' ,hero)

    this.heroService.addHero(hero).subscribe((hero) => {
      //this.heroService.heroes.push(hero);
      this.router.navigate(['/table'])
    });
  }
}
