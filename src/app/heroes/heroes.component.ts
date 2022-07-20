import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //heroes: Hero[] = [];

  constructor(public heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroService.heroes = heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroService.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroService.heroes = this.heroService.heroes.filter((h) => h !== hero);
    this.heroService
      .deleteHero(hero.id)
      .subscribe(() => console.log(`deleted hero id=${hero.id}`));
  }

  edit(hero: Hero): void {
    this.heroService.heroes.map((h) => {
      if (h === hero) {
        h.name = h.name + '$';
      }
    });
    this.heroService.editHero(hero).subscribe();
    console.log(this.heroService.heroes);
  }
}
