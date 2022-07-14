import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    const url = `http://api.weatherapi.com/v1/current.json?key=5903fc61a2b9422984d112432221407&q=London&aqi=no`;
    return this.http.get(url);
  }
}
