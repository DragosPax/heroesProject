import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  temperatura: string = '';

  constructor(private service: WeatherService) {}
  //1
  ngOnInit(): void {
    this.service.getWeather().subscribe((data) => {
      console.log(data);
      this.temperatura = data.current.temp_c; //in loc de acest bloc, putem pune arata(data)
    });

    console.log(this.temperatura);
  }

  // //2.
  // ngOnInit(): void {
  //   this.showWeather();
  // }
  // showWeather() {
  //   this.service.getWeather().subscribe((data) => this.arata(data));
  // }
  arata(data: any) {
    this.temperatura = data.current.temp_c;
    console.log(this.temperatura);
  }
}
