import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()

export class WeatherService{
    constructor(private http: HttpClient){}
    
    getTemp(cityName: string){
    }
}