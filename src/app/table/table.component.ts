import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(public heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroService.heroes = heroes;
      console.log('extra', this.heroService.heroes);
    });
  }
  displayTime(hero: Hero): string {
    if (hero.time) {
      return hero.time.hour.toString();
    }
    return '-'
  }
  displayDate(hero: Hero): string {
    if (hero.date) {
      return hero.date.day.toString();
    }
    return '-'
  }
}
